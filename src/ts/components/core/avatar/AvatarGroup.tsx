import { Avatar, AvatarGroupFactory, MantineSpacing } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesAPIProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesAPIProps<AvatarGroupFactory["stylesNames"]>,
        DashBaseProps {
    /** Negative space between Avatar components, `'sm'` by default */
    spacing?: MantineSpacing;
    /** dmc.Avatar components */
    children?: React.ReactNode;
}

/** AvatarGroup */
const AvatarGroup = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <Avatar.Group {...others}>{children}</Avatar.Group>;
};

AvatarGroup.defaultProps = {};

export default AvatarGroup;
