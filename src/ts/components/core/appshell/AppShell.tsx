import { AppShell as MantineAppShell } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import {
    MantineNumberSize,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

type Props = {
    variant?: string;
    /** Determines how Navbar and Aside components are positioned relative to Header and Footer components */
    layout?: "default" | "alt";
    /** <Navbar /> component */
    navbar?: React.ReactElement;
    /** <Aside /> component */
    aside?: React.ReactElement;
    /** <Header /> component */
    header?: React.ReactElement;
    /** <Footer /> component */
    footer?: React.ReactElement;
    /** zIndex prop passed to Navbar and Header components */
    zIndex?: number;
    /** true to switch from static layout to fixed */
    fixed?: boolean;
    /** true to hide all AppShell parts and render only children */
    hidden?: boolean;
    /** AppShell content */
    children: React.ReactNode;
    /** Content padding */
    padding?: MantineNumberSize;
    /** Breakpoint at which Navbar component should no longer be offset with padding-left, applicable only for fixed position */
    navbarOffsetBreakpoint?: MantineNumberSize;
    /** Breakpoint at which Aside component should no longer be offset with padding-right, applicable only for fixed position */
    asideOffsetBreakpoint?: MantineNumberSize;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/**
 * Responsive shell for your application with header and navbar. For more information, see: https://mantine.dev/core/app-shell/
 */
const AppShell = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineAppShell {...other}>{children}</MantineAppShell>;
};

AppShell.defaultProps = {};

export default AppShell;
