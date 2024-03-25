import { VisuallyHidden as MantineVisuallyHidden } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Content */
    children?: React.ReactNode;
}

/** VisuallyHidden */
const VisuallyHidden = (props: Props) => {
    const { children, setProps, ...others } = props;

    return (
        <MantineVisuallyHidden {...others}>{children}</MantineVisuallyHidden>
    );
};

VisuallyHidden.defaultProps = {};

export default VisuallyHidden;
