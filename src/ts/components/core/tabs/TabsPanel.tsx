import React from "react";
import { Tabs } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStylesAPIProps, MantineStyleSystemProps } from "props/mantine";

type Props = {
    /** Panel content */
    children?: React.ReactNode;
    /** Value of associated control */
    value: string;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Switch between different views */
const TabsPanel = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Tabs.Panel {...other}>{children}</Tabs.Panel>;
};

TabsPanel.defaultProps = {};

export default TabsPanel;
