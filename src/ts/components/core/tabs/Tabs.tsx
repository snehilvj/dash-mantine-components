import React from "react";
import { DefaultProps, PersistenceProps } from "../../../props";
import { Tabs as MantineTabs } from "@mantine/core";
import { MantineNumberSize, MantineColor } from "@mantine/styles";
import {
    TabsOrientation,
    TabsPlacement,
    TabsVariant,
} from "@mantine/core/lib/Tabs/Tabs.types";

type Props = {
    /** Value for controlled component */
    value?: string;
    /** Tabs orientation, vertical or horizontal */
    orientation?: TabsOrientation;
    /** Determines whether arrow key presses should loop though items (first to last and last to first) */
    loop?: boolean;
    /** Determines whether tab should be activated with arrow key press, defaults to true */
    activateTabWithKeyboard?: boolean;
    /** Determines whether tab can be deactivated, defaults to false */
    allowTabDeactivation?: boolean;
    /** Tabs content */
    children?: React.ReactNode;
    /** Controls component visuals */
    variant?: TabsVariant;
    /** Key of theme.colors */
    color?: MantineColor;
    /** Tabs border-radius from theme.radius or number ti set value from theme, defaults to theme.defaultRadius */
    radius?: MantineNumberSize;
    /** Determines whether tabs should have inverted styles */
    inverted?: boolean;
    /** If set to false, Tabs.Panel content will not stay mounted when tab is not active */
    keepMounted?: boolean;
    /** Tabs.List placement relative to Tabs.Panel, applicable only for orientation="vertical", left by default */
    placement?: TabsPlacement;
} & PersistenceProps &
    DefaultProps;

/**
 * Switch between different views. For more information, see: https://mantine.dev/core/tabs/
 */
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

Tabs.defaultProps = { persisted_props: ["value"], persistence_type: "local" };

export default Tabs;
