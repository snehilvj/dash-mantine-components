import { Avatar, MantineSpacing } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { getLoadingState } from "../../../utils/dash3";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Negative space between Avatar components, `'sm'` by default */
    spacing?: MantineSpacing;
    /** <Avatar /> components */
    children?: React.ReactNode;
}

/** AvatarGroup */
const AvatarGroup = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <Avatar.Group
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </Avatar.Group>
    );
};

AvatarGroup.defaultProps = {};

export default AvatarGroup;
