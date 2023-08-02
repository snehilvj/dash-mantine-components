import React from "react";
import { Avatar as MantineAvatar, MantineGradient } from "@mantine/core";
import {
    MantineColor,
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Controls appearance */
    variant?: "filled" | "light" | "gradient" | "outline";
    /** <img /> element attributes */
    imageProps?: Record<string, any>;
    /** image source */
    src?: string;
    /** Image alt text or title for placeholder variant */
    alt?: string;
    /** Avatar width and height */
    size?: MantineNumberSize;
    /** Value from theme.radius or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Color from theme.colors used for letter and icon placeholders */
    color?: MantineColor;
    /** Custom placeholder */
    children?: React.ReactNode;
    /** Controls gradient settings in gradient variant only */
    gradient?: MantineGradient;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Display user profile image, initials or fallback icon */
const Avatar = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineAvatar {...other}>{children}</MantineAvatar>;
};

Avatar.defaultProps = {};

export default Avatar;
