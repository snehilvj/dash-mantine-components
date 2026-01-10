import {
    PinInput as MantinePinInput,
    MantineSize,
} from '@mantine/core';
import { useDidUpdate } from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { useState } from 'react';
import { setPersistence, getLoadingState } from '../../../utils/dash3';

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Hidden input `name` attribute */
    name?: string;
    /** Hidden input `form` attribute */
    form?: string;
    /** Key of `theme.spacing` or any valid CSS value to set `gap` between inputs, numbers are converted to rem, `'md'` by default */
    gap?: string | number;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: string | number;
    /** Controls inputs `width` and `height`, `'sm'` by default */
    size?: MantineSize;
    /** If set, the first input is focused when component is mounted, `false` by default */
    autoFocus?: boolean;
    /** Controlled component value */
    value?: string;
    /** Inputs placeholder, `'○'` by default */
    placeholder?: string;
    /** Determines whether focus should be moved automatically to the next input once filled, `true` by default */
    manageFocus?: boolean;
    /** Determines whether `autocomplete="one-time-code"` attribute should be set on all inputs, `true` by default */
    oneTimeCode?: boolean;
    /** If set, `disabled` attribute is added to all inputs */
    disabled?: boolean;
    /** If set, adds error styles and `aria-invalid` attribute to all inputs */
    error?: boolean;
    /** Determines which values can be entered, `'alphanumeric'` by default. */
    type?: 'alphanumeric' | 'number';
    /** Changes input type to `"password"`, `false` by default */
    mask?: boolean;
    /** Number of inputs, `4` by default */
    length?: number;
    /** If set, the user cannot edit the value */
    readOnly?: boolean;
    /** Inputs `type` attribute, inferred from the `type` prop if not specified */
    inputType?: React.HTMLInputTypeAttribute;
    /** `inputmode` attribute, inferred from the `type` prop if not specified */
    inputMode?:
        | 'none'
        | 'text'
        | 'tel'
        | 'url'
        | 'email'
        | 'numeric'
        | 'decimal'
        | 'search'
        | undefined;
    /** `aria-label` for the inputs */
    ariaLabel?: string;
}

/** Capture pin code or one time password from the user */
const PinInput = (props: Props) => {
    const { setProps, loading_state, value, ...others } = props;

    const [val, setVal] = useState(value);

    useDidUpdate(() => {
      setVal(value);
    }, [value]);

    return (
        <MantinePinInput
            onChange={setVal}
            value={val}
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            onComplete={(v) => setProps({ value: v })}
            {...others}
        />
    );
};

setPersistence(PinInput);

export default PinInput;
