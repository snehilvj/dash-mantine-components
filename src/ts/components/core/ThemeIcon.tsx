import React from "react";
import {
    MantineGradient,
    ThemeIcon as MantineThemeIcon,
    ThemeIconVariant,
} from "@mantine/core";
import {
    MantineColor,
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Icon */
    children: React.ReactNode;
    /** Width and height of theme icon */
    size?: MantineNumberSize;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Icon color from theme */
    color?: MantineColor;
    /** Controls appearance */
    variant?: ThemeIconVariant;
    /** Controls gradient settings in gradient variant only */
    gradient?: MantineGradient;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Render icon inside element with theme colors */
const ThemeIcon = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineThemeIcon {...other}>{children}</MantineThemeIcon>;
};

ThemeIcon.defaultProps = {};

export default ThemeIcon;
