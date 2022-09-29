import React from "react";
import { DefaultProps } from "../../props";
import { ThemeIcon as MantineThemeIcon, ThemeIconVariant } from "@mantine/core";
import {
    MantineNumberSize,
    MantineColor,
    MantineGradient,
} from "@mantine/styles";

type Props = {
    /** Icon */
    children?: React.ReactNode;
    /** Predefined width and height or number for width and height in px */
    size?: MantineNumberSize;
    /** Predefined border-radius from theme.radius or number for border-radius in px */
    radius?: MantineNumberSize;
    /** Icon color from theme */
    color?: MantineColor;
    /** Controls appearance */
    variant?: ThemeIconVariant;
    /** Controls gradient settings in gradient variant only */
    gradient?: MantineGradient;
} & DefaultProps;

/**
 * Render icon inside element with theme colors. For more information, see: https://mantine.dev/core/theme-icon/
 */
const ThemeIcon = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineThemeIcon {...other}>{children}</MantineThemeIcon>;
};

ThemeIcon.defaultProps = {};

export default ThemeIcon;
