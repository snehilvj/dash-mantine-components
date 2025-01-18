import {
    MantineColor,
    MantineRadius,
    Tabs as MantineTabs,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        DashBaseProps,
        StylesApiProps,
        PersistenceProps {
    /** Value for controlled component */
    value?: string | null;
    /** Tabs orientation, `'horizontal'` by default */
    orientation?: "vertical" | "horizontal";
    /** `Tabs.List` placement relative to `Tabs.Panel`, applicable only when `orientation="vertical"`, `'left'` by default */
    placement?: "left" | "right";
    /** Base id, used to generate ids to connect labels with controls, generated randomly by default */
    id?: string;
    /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */
    loop?: boolean;
    /** Determines whether tab should be activated with arrow key press, `true` by default */
    activateTabWithKeyboard?: boolean;
    /** Determines whether tab can be deactivated, `false` by default */
    allowTabDeactivation?: boolean;
    /** Tabs content */
    children: React.ReactNode;
    /** Changes colors of `Tabs.Tab` components when variant is `pills` or `default`, does nothing for other variants */
    color?: MantineColor;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Determines whether tabs should have inverted styles, `false` by default */
    inverted?: boolean;
    /** If set to `false`, `Tabs.Panel` content will be unmounted when the associated tab is not active, `true` by default */
    keepMounted?: boolean;
    /** Determines whether active item text color should depend on `background-color` of the indicator. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. Only applicable when `variant="pills"` */
    autoContrast?: boolean;
}

/** Tabs */
const Tabs = (props: Props) => {
    const {
        children,
        setProps,
        persistence,
        persisted_props = ['value'],
        persistence_type = 'local',
        ...others
    } = props;

    const onChange = (value: string) => {
        setProps({ value });
    };
    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineTabs
            data-dash-is-loading={loading || undefined}
            onChange={onChange}
            {...others}
        >
            {children}
        </MantineTabs>
    );
};

export default Tabs;
