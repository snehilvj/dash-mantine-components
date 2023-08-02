import React from "react";
import {
    Badge as MantineBadge,
    BadgeVariant,
    MantineGradient,
} from "@mantine/core";
import {
    MantineColor,
    MantineNumberSize,
    MantineSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Key of theme.colors */
    color?: MantineColor;
    /** Controls appearance */
    variant?: BadgeVariant;
    /** Controls gradient, applied to gradient variant only */
    gradient?: MantineGradient;
    /** Badge height and font size */
    size?: MantineSize;
    /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
    radius?: MantineNumberSize;
    /** Sets badge width to 100% of parent element, hides overflow text with text-overflow: ellipsis */
    fullWidth?: boolean;
    /** Section rendered on the left side of label */
    leftSection?: React.ReactNode;
    /** Section rendered on the right side of label */
    rightSection?: React.ReactNode;
    /** Badge label */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Render react node inside portal at fixed position */
const Badge = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineBadge {...other}>{children}</MantineBadge>;
};

Badge.defaultProps = {};

export default Badge;
