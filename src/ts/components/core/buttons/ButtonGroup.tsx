import { Button } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStylesAPIProps, MantineStyleSystemProps } from "props/mantine";
import React from "react";

type Props = {
    /** dmc.Button components only */
    children?: React.ReactNode;
    /** Switch between vertical and horizontal orientation */
    orientation?: "vertical" | "horizontal";
    /** Child Button border width in px */
    buttonBorderWidth?: number;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Render button or link with button styles from mantine theme. */
const ButtonGroup = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Button.Group {...other}>{children}</Button.Group>;
};

ButtonGroup.defaultProps = {};

export default ButtonGroup;
