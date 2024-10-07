import { Tabs } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {
    /** Panel content */
    children: React.ReactNode;
    /** If set to `true`, the content will be kept mounted, even if `keepMounted` is set `false` in the parent `Tabs` component */
    keepMounted?: boolean;
    /** Value of associated control */
    value: string;
}

/** TabsPanel */
const TabsPanel = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <Tabs.Panel
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {children}
        </Tabs.Panel>
    );
};

TabsPanel.defaultProps = {};

export default TabsPanel;
