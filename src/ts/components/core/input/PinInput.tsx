import {
    PinInput as MantinePinInput,
    MantineRadius,
    MantineSize,
    MantineSpacing,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

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
    gap?: MantineSpacing;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: MantineRadius;
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
    /** Base id used for all inputs. By default, inputs' ids are generated randomly. */
    id?: string;
    /** If set, `disabled` attribute is added to all inputs */
    disabled?: boolean;
    /** If set, adds error styles and `aria-invalid` attribute to all inputs */
    error?: boolean;
    /** Determines which values can be entered, `'alphanumeric'` by default */
    type?: "alphanumeric" | "number" | RegExp;
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
        | "none"
        | "text"
        | "tel"
        | "url"
        | "email"
        | "numeric"
        | "decimal"
        | "search"
        | undefined;
    /** `aria-label` for the inputs */
    ariaLabel?: string;
}

/** PinInput */
const PinInput = (props: Props) => {
    const { setProps, value, ...others } = props;
    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantinePinInput
            data-dash-is-loading={loading || undefined}
            onComplete={(value) => setProps({ value })}
            {...others}
        />
    );
};

PinInput.defaultProps = {};

export default PinInput;
