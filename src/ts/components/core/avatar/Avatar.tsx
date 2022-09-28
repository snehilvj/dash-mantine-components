import React from "react";
import { DefaultProps } from "../../../props";
import { Avatar as MantineAvatar } from "@mantine/core";
import { AvatarVariant } from "@mantine/core/lib/Avatar/Avatar.styles";
import {
    MantineNumberSize,
    MantineColor,
    MantineGradient,
} from "@mantine/styles";

type Props = {
    /** Image url */
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
    /** Controls appearance */
    variant?: AvatarVariant;
} & DefaultProps;

/**
 * Display user profile image, initials or fallback icon. For more information, see: https://mantine.dev/core/avatar/
 */
const Avatar = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineAvatar {...other}>{children}</MantineAvatar>;
};

Avatar.defaultProps = {};

export default Avatar;
