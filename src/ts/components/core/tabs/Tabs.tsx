import React from "react";
import { Tabs as MantineTabs } from "@mantine/core";
import {
    TabsOrientation,
    TabsPlacement,
    TabsValue,
    TabsVariant,
} from "@mantine/core/lib/Tabs/Tabs.types";
import {
    MantineColor,
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps, PersistenceProps } from "props/dash";

type Props = {
    /** Value for controlled component */
    value?: TabsValue;
    /** Tabs orientation, vertical or horizontal */
    orientation?: TabsOrientation;
    /** Tabs.List placement relative to Tabs.Panel, applicable only for orientation="vertical", left by default */
    placement?: TabsPlacement;
    /** Base id, used to generate ids that connect labels with controls, by default generated randomly */
    id?: string;
    /** Determines whether arrow key presses should loop though items (first to last and last to first) */
    loop?: boolean;
    /** Determines whether tab should be activated with arrow key press, defaults to true */
    activateTabWithKeyboard?: boolean;
    /** Determines whether tab can be deactivated, defaults to false */
    allowTabDeactivation?: boolean;
    /** Tabs content */
    children: React.ReactNode;
    /** Controls component visuals */
    variant?: TabsVariant;
    /** Key of theme.colors */
    color?: MantineColor;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Determines whether tabs should have inverted styles */
    inverted?: boolean;
    /** If set to false, Tabs.Panel content will not stay mounted when tab is not active */
    keepMounted?: boolean;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps &
    PersistenceProps;

/** Switch between different views */
const Tabs = (props: Props) => {
    const {
        children,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    const onTabChange = (value: string) => {
        setProps({ value });
    };

    return (
        <MantineTabs onTabChange={onTabChange} {...other}>
            {children}
        </MantineTabs>
    );
};

Tabs.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default Tabs;
