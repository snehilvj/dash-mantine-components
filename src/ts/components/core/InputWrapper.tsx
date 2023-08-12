import React from "react";
import { Input } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import {
    MantineStyleSystemProps,
    InputWrapperBaseProps,
    MantineStylesAPIProps,
} from "props/mantine";

export type Props = {
    /** children */
    children?: React.ReactNode;
} & InputWrapperBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps &
    DashBaseProps;

/** Base component to create custom inputs */
const InputWrapper = (props: Props) => {
    const { setProps, children, ...other } = props;

    return <Input.Wrapper {...other}> {children} </Input.Wrapper>;
};

InputWrapper.defaultProps = {};

export default InputWrapper;
