import React from "react";
import { Tabs } from "@mantine/core";
import { TabsPosition } from "@mantine/core/lib/Tabs/Tabs.types";
import { DashBaseProps } from "props/dash";
import { MantineStylesAPIProps, MantineStyleSystemProps } from "props/mantine";

type Props = {
    /** dmc.Tab components */
    children?: React.ReactNode;
    /** Determines whether tabs should take the whole space */
    grow?: boolean;
    /** Tabs alignment */
    position?: TabsPosition;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Switch between different views */
const TabsList = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Tabs.List {...other}>{children}</Tabs.List>;
};

TabsList.defaultProps = {};

export default TabsList;
