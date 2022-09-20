import React from "react";
import { DashComponentProps } from "../../../props";
import { Tabs } from "@mantine/core";

type Props = {
    /** Panel content */
    children?: React.ReactNode;
    /** Value of associated control */
    value: string;
} & DashComponentProps;

/**
 * Utility component to pass to Tabs. For more information, see: https://mantine.dev/core/tabs/
 */
const TabsPanel = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Tabs.Panel {...other}>{children}</Tabs.Panel>;
};

TabsPanel.defaultProps = {};

export default TabsPanel;
