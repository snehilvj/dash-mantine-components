import React from "react";
import { Tabs } from "@mantine/core";
import {
    MantineColor,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Value that is used to connect Tab with associated panel */
    value: string;
    /** Tab label */
    children?: React.ReactNode;
    /** Section of content displayed after label */
    rightSection?: React.ReactNode;
    /** Section of content displayed before label */
    icon?: React.ReactNode;
    /** Key of theme.colors */
    color?: MantineColor;
    /** Whether the tab is disabled */
    disabled?: boolean;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Switch between different views */
const Tab = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Tabs.Tab {...other}>{children}</Tabs.Tab>;
};

Tab.defaultProps = {};

export default Tab;
