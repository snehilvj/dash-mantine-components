import React from "react";
import { DefaultProps } from "../../../props";
import { Avatar } from "@mantine/core";
import { MantineNumberSize } from "@mantine/styles";

type Props = {
    /** Avatar components */
    children?: React.ReactNode;
    /** Negative space between Avatars */
    spacing?: MantineNumberSize;
} & DefaultProps;

/**
 * Display user profile image, initials or fallback icon. For more information, see: https://mantine.dev/core/avatar/
 */
const AvatarGroup = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Avatar.Group {...other}>{children}</Avatar.Group>;
};

AvatarGroup.defaultProps = {};

export default AvatarGroup;
