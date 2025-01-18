import { Avatar, MantineSpacing } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Negative space between Avatar components, `'sm'` by default */
    spacing?: MantineSpacing;
    /** <Avatar /> components */
    children?: React.ReactNode;
}

/** AvatarGroup */
const AvatarGroup = (props: Props) => {
    const { children, setProps, ...others } = props;
    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <Avatar.Group
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </Avatar.Group>
    );
};

export default AvatarGroup;
