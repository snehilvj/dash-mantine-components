import React from "react";
import { DashComponentProps, MantineColors } from "../../props";
import { Divider as MantineDivider } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** Line color from theme, defaults to gray in light color scheme and to dark in dark color scheme */
    color?: MantineColors;
    /** Line orientation */
    orientation?: "horizontal" | "vertical";
    /** Sets height in horizontal orientation and width in vertical */
    size?: MantineSize;
    /** Adds text after line in horizontal orientation */
    label?: React.ReactNode;
    /** Label position */
    labelPosition?: "left" | "center" | "right";
    /** Divider borderStyle */
    variant?: "solid" | "dashed" | "dotted";
} & DashComponentProps;

/**
 * Horizontal line with optional label or vertical divider. For more information, see: https://mantine.dev/core/divider/
 */
const Divider = (props: Props) => {
    const { setProps, ...other } = props;

    return <MantineDivider {...other} />;
};

Divider.defaultProps = {};

export default Divider;
