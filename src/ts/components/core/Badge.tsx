import React from "react";
import { DefaultProps } from "../../props";
import { Badge as MantineBadge, BadgeVariant } from "@mantine/core";
import {
    MantineSize,
    MantineNumberSize,
    MantineColor,
    MantineGradient,
} from "@mantine/styles";

type Props = {
    /** Key of theme.colors */
    color?: MantineColor;
    /** Controls appearance */
    variant?: BadgeVariant;
    /** Controls gradient, applied to gradient variant only */
    gradient?: MantineGradient;
    /** Badge height and font size */
    size?: MantineSize;
    /** Key of theme.radius or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Sets badge width to 100% of parent element, hides overflow text with text-overflow: ellipsis */
    fullWidth?: boolean;
    /** Section rendered on the left side of label */
    leftSection?: React.ReactNode;
    /** Section rendered on the right side of label */
    rightSection?: React.ReactNode;
    /** Badge label */
    children?: React.ReactNode;
} & DefaultProps;

/**
 * Render react node inside portal at fixed position. For more information, see: https://mantine.dev/core/Badge/
 */
const Badge = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineBadge {...other}>{children}</MantineBadge>;
};

Badge.defaultProps = {};

export default Badge;
