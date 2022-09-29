import React from "react";
import { DefaultProps } from "../../../props";
import { Button } from "@mantine/core";

type Props = {
    /** dmc.Button components only */
    children?: React.ReactNode;
    /** Switch between vertical and horizontal orientation */
    orientation?: "vertical" | "horizontal";
    /** Child Button border width in px */
    buttonBorderWidth?: number;
} & DefaultProps;

/**
 * Render button or link with button styles from mantine theme. For more information, see: https://mantine.dev/core/button/
 */
const ButtonGroup = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Button.Group {...other}>{children}</Button.Group>;
};

ButtonGroup.defaultProps = {};

export default ButtonGroup;
