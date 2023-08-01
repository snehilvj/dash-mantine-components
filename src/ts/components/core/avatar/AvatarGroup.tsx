import React from "react";
import { Avatar } from "@mantine/core";
import {
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Avatar components */
    children?: React.ReactNode;
    /** Negative space between Avatars */
    spacing?: MantineNumberSize;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Display user profile image, initials or fallback icon */
const AvatarGroup = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Avatar.Group {...other}>{children}</Avatar.Group>;
};

AvatarGroup.defaultProps = {};

export default AvatarGroup;
