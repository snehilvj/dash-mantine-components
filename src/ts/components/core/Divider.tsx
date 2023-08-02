import React from "react";
import { Divider as MantineDivider } from "@mantine/core";
import {
    MantineColor,
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Props added to the label element */
    labelProps?: Record<string, any>;
    /** Line color from theme, defaults to gray in light color scheme and to dark in dark color scheme */
    color?: MantineColor;
    /** Line orientation */
    orientation?: "horizontal" | "vertical";
    /** Sets height in horizontal orientation and width in vertical */
    size?: MantineNumberSize;
    /** Adds text after line in horizontal orientation */
    label?: React.ReactNode;
    /** Label position */
    labelPosition?: "left" | "center" | "right";
    /** Divider borderStyle */
    variant?: "solid" | "dashed" | "dotted";
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Horizontal line with optional label or vertical divider */
const Divider = (props: Props) => {
    const { setProps, ...other } = props;

    return <MantineDivider {...other} />;
};

Divider.defaultProps = {};

export default Divider;
