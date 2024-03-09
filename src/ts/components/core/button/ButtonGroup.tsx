import { Button } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {
    /** `Button` components */
    children?: React.ReactNode;
    /** Orientation of the group, `horizontal` by default */
    orientation?: "horizontal" | "vertical";
    /** `border-width` of the child `Button` components. Numbers are converted to rem. Default value in `1`. */
    borderWidth?: number | string;
}

/** ButtonGroup */
const ButtonGroup = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <Button.Group {...others}>{children}</Button.Group>;
};

ButtonGroup.defaultProps = {};

export default ButtonGroup;
