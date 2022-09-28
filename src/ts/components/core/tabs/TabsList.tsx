import React from "react";
import { DefaultProps } from "../../../props";
import { Tabs } from "@mantine/core";
import { TabsPosition } from "@mantine/core/lib/Tabs/Tabs.types";

type Props = {
    /** dmc.Tab components */
    children?: React.ReactNode;
    /** Determines whether tabs should take the whole space */
    grow?: boolean;
    /** Tabs alignment */
    position?: TabsPosition;
} & DefaultProps;

/**
 * Utility component to pass to Tabs. For more information, see: https://mantine.dev/core/tabs/
 */
const TabsList = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Tabs.List {...other}>{children}</Tabs.List>;
};

TabsList.defaultProps = {};

export default TabsList;
