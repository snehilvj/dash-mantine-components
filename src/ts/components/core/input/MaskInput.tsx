import { MaskInput as MantineMaskInput } from '@mantine/core';
import { useDidUpdate } from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { __BaseInputProps } from 'props/input';
import { StylesApiProps } from 'props/styles';
import React, { useEffect, useRef, useState } from 'react';
import { getLoadingState, setPersistence } from '../../../utils/dash3';
import { parseFuncProps } from '../../../utils/prop-functions';

interface Props
    extends BoxProps,
        StylesApiProps,
        __BaseInputProps,
        DashBaseProps,
        PersistenceProps {
    /** Mask pattern. Built-in tokens: `9` digit, `a` letter, `A` uppercase letter, `*` letter or digit, `#` digit or sign. Other characters are literals, `\\` escapes a token character, and `?` marks the remaining slots as optional. Example: `'(999) 999-9999'` */
    mask: string;
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
    /** Input placeholder */
    placeholder?: string;
    /** (string; default "off") Enables the browser to attempt autocompletion based on user history.  For more information, see: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete  */
    autoComplete?: string;
}

const DEFAULT_TOKENS = ['9', 'a', 'A', '*', '#'];

// Number of token slots before the first `?`, i.e. the slots that must be filled
const countRequired = (mask: string, tokenKeys: string[]): number => {
    let count = 0;
    for (let i = 0; i < mask.length; i++) {
        if (mask[i] === '\\') {
            i++;
        } else if (mask[i] === '?') {
            break;
        } else if (tokenKeys.includes(mask[i])) {
            count++;
        }
    }
    return count;
};

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
    autoComplete = 'off',
    mask,
    tokens,
    inputProps,
    ...others
}: Props) => {
    const regexTokens = tokens
        ? Object.fromEntries(
              Object.entries(tokens).map(([k, v]) => [k, new RegExp(v)])
          )
        : undefined;
    const required = countRequired(mask ?? '', [
        ...DEFAULT_TOKENS,
        ...Object.keys(tokens ?? {}),
    ]);

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

    // onChangeRaw / onComplete don't fire for a value set by Dash, so report
    // maskedValue and complete after mount and after every remount
    useEffect(() => {
        if (!inputRef.current || (remountKey === 0 && !value)) return;
        const state = {
            maskedValue: inputRef.current.value,
            complete: required > 0 && (value ?? '').length >= required,
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
            // onComplete only fires when the mask becomes complete, not when it stops being complete
            ...(raw.length < required && { complete: false }),
        });
    };

    return (
        <MantineMaskInput
            key={remountKey}
            ref={inputRef}
            {...inputProps}
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            mask={mask}
            tokens={regexTokens}
            defaultValue={value ?? ''}
            onChangeRaw={handleChangeRaw}
            onComplete={() => setProps({ complete: true })}
            autoComplete={autoComplete}
            {...parseFuncProps('MaskInput', others)}
        />
    );
};

setPersistence(MaskInput);

export default MaskInput;
