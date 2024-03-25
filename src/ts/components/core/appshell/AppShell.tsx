import {
    AppShellAsideConfiguration,
    AppShellFooterConfiguration,
    AppShellHeaderConfiguration,
    AppShellNavbarConfiguration,
    AppShellResponsiveSize,
    AppShell as MantineAppShell,
    MantineSpacing,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Determines whether associated components should have a border, `true` by default */
    withBorder?: boolean;
    /** Controls padding of the main section, `0` by default. !important!: use `padding` prop instead of `p`. */
    padding?: MantineSpacing | AppShellResponsiveSize;
    /** AppShell.Navbar configuration, controls width, breakpoints and collapsed state. Required if you use AppShell.Navbar component. */
    navbar?: AppShellNavbarConfiguration;
    /** AppShell.Aside configuration, controls width, breakpoints and collapsed state. Required if you use AppShell.Aside component. */
    aside?: AppShellAsideConfiguration;
    /** AppShell.Header configuration, controls height, offset and collapsed state. Required if you use AppShell.Header component. */
    header?: AppShellHeaderConfiguration;
    /** AppShell.Footer configuration, controls height, offset and collapsed state. Required if you use AppShell.Footer component. */
    footer?: AppShellFooterConfiguration;
    /** Duration of all transitions in ms, `200` by default */
    transitionDuration?: number;
    /** Timing function of all transitions, `ease` by default */
    transitionTimingFunction?: React.CSSProperties["transitionTimingFunction"];
    /** `z-index` of all associated elements, `200` by default */
    zIndex?: string | number;
    /** Determines how Navbar/Aside are arranged relative to Header/Footer, `default` by default */
    layout?: "default" | "alt";
    /** If set, Navbar, Aside, Header and Footer components be hidden */
    disabled?: boolean;
    /** Determines whether Header and Footer components should include styles to offset scrollbars. Based on `react-remove-scroll`. `true` by default */
    offsetScrollbars?: boolean;
    /** Content */
    children: React.ReactNode;
}

/** AppShell */
const AppShell = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <MantineAppShell {...others}>{children}</MantineAppShell>;
};

AppShell.defaultProps = {};

export default AppShell;
