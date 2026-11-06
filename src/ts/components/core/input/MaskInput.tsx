import { MaskInput as MantineMaskInput } from '@mantine/core';
import { useDebouncedValue, useDidUpdate } from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { DashBaseProps, DebounceProps, PersistenceProps } from 'props/dash';
import { __BaseInputProps } from 'props/input';
import { StylesApiProps } from 'props/styles';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getLoadingState, setPersistence } from '../../../utils/dash3';
import { parseFuncProps } from '../../../utils/prop-functions';

interface Props
    extends BoxProps,
        StylesApiProps,
        __BaseInputProps,
        DashBaseProps,
        DebounceProps,
        PersistenceProps {
    /** Mask pattern. Built-in tokens: `9` digit, `a` letter, `A` uppercase letter, `*` letter or digit, `#` digit or sign. Other characters are literals, `\\` escapes a token character, and `?` marks the remaining slots as optional. Example: `'(999) 999-9999'` */
    mask: string;
    /** Raw (unmasked) value, e.g. `'5551234567'` for mask `'(999) 999-9999'`. Can be set from a callback, a formatted value is also accepted. */
    value?: string;
    /** (read-only) Value as displayed with the mask applied, e.g. `'(555) 123-4567'` */
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

type Slot = { token: boolean; char: string; optional: boolean };

// Mirrors the string-mask parsing of Mantine's use-mask hook
const parseMask = (mask: string, tokenKeys: string[]): Slot[] => {
    const slots: Slot[] = [];
    let optional = false;
    for (let i = 0; i < mask.length; i++) {
        const char = mask[i];
        if (char === '\\' && i + 1 < mask.length) {
            i++;
            slots.push({ token: false, char: mask[i], optional });
            continue;
        }
        if (char === '?') {
            optional = true;
            continue;
        }
        slots.push({ token: tokenKeys.includes(char), char, optional });
    }
    return slots;
};

// Formats a raw value the same way Mantine's applyMaskToRaw does:
// literals are inserted, output stops at the first unfilled token
const formatRaw = (raw: string, slots: Slot[]): string => {
    if (!raw) return '';
    let result = '';
    let rawIndex = 0;
    for (const slot of slots) {
        if (!slot.token) {
            result += slot.char;
        } else if (rawIndex < raw.length) {
            result += raw[rawIndex++];
        } else {
            break;
        }
    }
    return result;
};

// Extracts the raw value from a displayed (masked) value
const extractRaw = (masked: string, slots: Slot[]): string => {
    let raw = '';
    for (let i = 0; i < masked.length && i < slots.length; i++) {
        if (slots[i].token) raw += masked[i];
    }
    return raw;
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
    n_submit = 0,
    n_blur = 0,
    debounce = false,
    autoComplete = 'off',
    mask,
    tokens,
    inputProps,
    ...others
}: Props) => {
    const regexTokens = useMemo(
        () =>
            tokens
                ? Object.fromEntries(
                      Object.entries(tokens).map(([k, v]) => [k, new RegExp(v)])
                  )
                : undefined,
        [tokens]
    );

    const slots = useMemo(
        () => parseMask(mask ?? '', [...DEFAULT_TOKENS, ...Object.keys(tokens ?? {})]),
        [mask, tokens]
    );
    const required = slots.filter((s) => s.token && !s.optional).length;

    const toState = (raw: string) => ({
        value: raw,
        maskedValue: formatRaw(raw, slots),
        complete: required > 0 && raw.length >= required,
    });

    const [current, setCurrent] = useState<ReturnType<typeof toState> | null>(null);
    const debounceValue = typeof debounce === 'number' ? debounce : 0;
    const [debounced] = useDebouncedValue(current, debounceValue);

    const lastValue = useRef(value ?? '');
    const [remountKey, setRemountKey] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const send = (state: ReturnType<typeof toState> | null) => {
        if (!state) return;
        lastValue.current = state.value;
        setProps(state);
    };

    useDidUpdate(() => {
        if (typeof debounce === 'number' || debounce === false) {
            send(debounced);
        }
    }, [debounced]);

    // value set from a callback: Mantine's MaskInput is uncontrolled, so remount it with the new value
    useDidUpdate(() => {
        if ((value ?? '') !== lastValue.current) {
            lastValue.current = value ?? '';
            setCurrent(null);
            setRemountKey((k) => k + 1);
        }
    }, [value]);

    // on mount with a value, and after every remount, normalise the value to raw
    // and report maskedValue / complete
    useEffect(() => {
        if (!inputRef.current || (remountKey === 0 && !value)) return;
        const state = toState(extractRaw(inputRef.current.value, slots));
        if (
            state.value !== value ||
            state.maskedValue !== maskedValue ||
            state.complete !== complete
        ) {
            send(state);
        }
    }, [remountKey]);

    const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter') {
            setProps({
                n_submit: n_submit + 1,
                ...(debounce === true && current),
            });
        }
    };

    const handleBlur = () => {
        setProps({
            n_blur: n_blur + 1,
            ...(debounce === true && current),
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
            onChangeRaw={(raw: string) => setCurrent(toState(raw))}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            autoComplete={autoComplete}
            {...parseFuncProps('MaskInput', others)}
        />
    );
};

setPersistence(MaskInput);

export default MaskInput;
