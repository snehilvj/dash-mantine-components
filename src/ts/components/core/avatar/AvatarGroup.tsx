import React from "react";
import { DashComponentProps, MantineColors } from "../../../props";
import { Avatar } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** Avatar components */
    children?: React.ReactNode;
    /** Negative space between Avatars */
    spacing?: MantineSize;
} & DashComponentProps;

/**
 * Display user profile image, initials or fallback icon. For more information, see: https://mantine.dev/core/avatar/
 */
const AvatarGroup = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Avatar.Group {...other}>{children}</Avatar.Group>;
};

AvatarGroup.defaultProps = {};

export default AvatarGroup;
