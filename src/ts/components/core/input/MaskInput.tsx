import { MaskInput as MantineMaskInput } from '@mantine/core';
import { isMaskComplete, useDidUpdate } from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { __BaseInputProps } from 'props/input';
import { StylesApiProps } from 'props/styles';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { getLoadingState, setPersistence } from '../../../utils/dash3';
import { parseFuncProps, resolveProp } from '../../../utils/prop-functions';

interface Props
    extends BoxProps,
        StylesApiProps,
        __BaseInputProps,
        DashBaseProps,
        PersistenceProps {
    /** Mask pattern. A string of built-in tokens or a function that returns a string or an array of strings and RegExp objects. See https://www.dash-mantine-components.com/functions-as-props */
    mask: string  | Record<string, any>;
    /** Raw (unmasked) value, e.g. `'5551234567'` for mask `'(999) 999-9999'`. Can be set from a callback. */
    value?: string;
    /** (read-only) Value as displayed in the input, e.g. `'(555) 123-4567'` */
    maskedValue?: string;
    /** (read-only) `True` when all required mask slots are filled */
    complete?: boolean;
    /** Custom tokens that override or extend the built-in ones. Keys are single characters used in `mask`, values are regular expression strings matching one character, e.g. `{'h': '[0-9a-fA-F]'}` */
    tokens?: Record<string, string>;
    /** Character displayed in unfilled slots, `'_'` by default. Set to `None` to hide slot characters */
    slotChar?: string | null;
    /** Show mask pattern even when field is empty and unfocused */
    alwaysShowMask?: boolean;
    /** Show mask placeholder on focus, `True` by default */
    showMaskOnFocus?: boolean;
    /** Clear value on blur when mask is incomplete, `False` by default */
    autoClear?: boolean;
    /** When `True`, raw and display values are decoupled */
    separate?: boolean;
    /** A function to transform each character before validation and insertion, e.g. to uppercase. See https://www.dash-mantine-components.com/functions-as-props */
    transform?: any;
    /** A function called before masking on each keystroke, can return overrides for mask options. See https://www.dash-mantine-components.com/functions-as-props */
    modify?: any;
    /** Input placeholder */
    placeholder?: string;
    /** Number of times the input has lost focus */
    n_blur?: number;
    /** Number of times Enter has been pressed while the input is focused */
    n_submit?: number;
    /** (string; default "off") Enables the browser to attempt autocompletion based on user history.  For more information, see: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete  */
    autoComplete?: string;
}

/** MaskInput - Input with a fixed format pattern such as a phone number, date or card number */
const MaskInput = ({
    setProps,
    persistence,
    persisted_props,
    persistence_type,
    loading_state,
    value = '',
    maskedValue,
    complete,
    n_submit = 0,
    n_blur = 0,
    autoComplete = 'off',
    mask,
    tokens,
    slotChar,
    separate,
    inputProps,
    ...others
}: Props) => {
    const regexTokens = tokens
        ? Object.fromEntries(
              Object.entries(tokens).map(([k, v]) => [k, new RegExp(v)])
          )
        : undefined;

    const resolvedFuncs = parseFuncProps('MaskInput',  { ...others, mask });

    const resolvedMask = resolvedFuncs.mask;

    // Mantine expects a mask value, not a function. This allows regex masks to be defined in JS.
    const finalMask =
        typeof resolvedMask === 'function'
            ? resolvedMask()
            : resolvedMask;

    const resolvedModify = resolvedFuncs.modify;


    // isMaskComplete(masked, { modify }) internally calls modify("") with an empty
    // raw value, so a dynamic mask that depends on the prefix would never see it.
    // Wrap resolvedModify so it sees the current raw value.
    const checkComplete = (masked: string, raw: string): boolean => {
        const opts = resolvedModify
            ? {
                  mask: finalMask ?? '',
                  tokens: regexTokens,
                  slotChar,
                  separate,
                  modify: () => resolvedModify(raw),
              }
            : {
                  mask: finalMask ?? '',
                  tokens: regexTokens,
                  slotChar,
                  separate,
              };
        return isMaskComplete(masked, opts);
    };

    const inputRef = useRef<HTMLInputElement>(null);
    const lastValue = useRef(value ?? '');
    const [remountKey, setRemountKey] = useState(0);

    // value set from a callback: Mantine's MaskInput is uncontrolled, so remount it with the new value
    useDidUpdate(() => {
        if ((value ?? '') !== lastValue.current) {
            lastValue.current = value ?? '';
            setRemountKey((k) => k + 1);
        }
    }, [value]);

    // onChangeRaw doesn't fire for a value set by Dash, so report
    // maskedValue and complete after mount and after every remount
    useEffect(() => {
        if (!inputRef.current || (remountKey === 0 && !value)) return;
        const masked = inputRef.current.value;
        const state = {
            maskedValue: masked,
            complete: checkComplete(masked, value ?? ''),
        };
        if (state.maskedValue !== maskedValue || state.complete !== complete) {
            setProps(state);
        }
    }, [remountKey]);

    const handleChangeRaw = (raw: string, masked: string) => {
        lastValue.current = raw;
        setProps({
            value: raw,
            maskedValue: masked,
            complete: checkComplete(masked, raw),
        });
    };

    const handleKeyDown = (ev) => {
        if (ev.key === 'Enter') {
            setProps({ n_submit: n_submit + 1 });
        }
    };

    const handleBlur = () => {
        setProps({ n_blur: n_blur + 1 });
    };

    return (
        <MantineMaskInput
            key={remountKey}
            ref={inputRef}
            {...inputProps}
            {...resolvedFuncs}
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            mask={finalMask}
            tokens={regexTokens}
            slotChar={slotChar}
            separate={separate}
            defaultValue={value ?? ''}
            onChangeRaw={handleChangeRaw}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            autoComplete={autoComplete}
        />
    );
};

setPersistence(MaskInput);

export default MaskInput;
