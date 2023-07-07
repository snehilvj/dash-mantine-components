import { PinInput as MantinePinInput } from "@mantine/core";
import { HTMLInputTypeAttribute } from "props/css";
import { DashBaseProps } from "props/dash";
import {
    InputSharedProps,
    MantineNumberSize,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

export type Props = {
    /** Hidden input form attribute */
    form?: string;
    /** Key of theme.spacing or any valid CSS value to set spacing between inputs */
    spacing?: MantineNumberSize;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** If set, first input is focused when component is mounted */
    autoFocus?: boolean;
    /** Value for controlled component */
    value?: string;
    /** Determines whether focus should be moved automatically to the next input once filled */
    manageFocus?: boolean;
    /** Determines whether autocomplete="one-time-code" attribute should be set on all inputs */
    oneTimeCode?: boolean;
    /** Adds error styles to all inputs */
    error?: boolean;
    /** The type of allowed values */
    type?: "alphanumeric" | "number" | RegExp;
    /** Changes input type to "password" */
    mask?: boolean;
    /** Number of input boxes */
    length?: number;
    /** Determines whether the user can edit input content */
    readOnly?: boolean;
    /** Inputs type attribute, inferred from type prop if not specified */
    inputType?: HTMLInputTypeAttribute;
    /** Has the user entered the complete pin */
    valueOnComplete?: string;
} & InputSharedProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps &
    DashBaseProps;

/** Capture password from user with option to toggle visibility */
const PinInput = (props: Props) => {
    const { setProps, value, valueOnComplete, ...other } = props;

    return (
        <MantinePinInput
            onChange={(val) => setProps({ value: val })}
            onComplete={(val) => setProps({ valueOnComplete: val })}
            {...other}
        />
    );
};

PinInput.defaultProps = {};

export default PinInput;
