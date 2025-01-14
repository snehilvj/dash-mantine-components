import { Tabs } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {
    /** `Tabs.Tab` components */
    children: React.ReactNode;
    /** Determines whether tabs should take all available space, `false` by default */
    grow?: boolean;
    /** Tabs alignment, `flex-start` by default */
    justify?: React.CSSProperties["justifyContent"];
}

/** TabsList */
const TabsList = (props: Props) => {
    const { children, setProps, ...others } = props;
    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <Tabs.List
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </Tabs.List>
    );
};

TabsList.defaultProps = {};

export default TabsList;
