import React from "react";
import { DashComponentProps, MantineColors } from "../../../props";
import { Avatar as MantineAvatar } from "@mantine/core";
import { MantineNumberSize } from "@mantine/styles";

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
    color?: MantineColors;
    /** Custom placeholder */
    children?: React.ReactNode;
} & DashComponentProps;

/**
 * Display user profile image, initials or fallback icon. For more information, see: https://mantine.dev/core/avatar/
 */
const Avatar = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineAvatar {...other}>{children}</MantineAvatar>;
};

Avatar.defaultProps = {};

export default Avatar;
