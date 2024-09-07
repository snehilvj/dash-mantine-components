import { AppShell } from "@mantine/core";
import { AppShellNavbarFactory } from "@mantine/core/lib/components/AppShell/AppShellNavbar/AppShellNavbar";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesAPIProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesAPIProps<AppShellNavbarFactory["stylesNames"]>,
        DashBaseProps {
    /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
    withBorder?: boolean;
    /** Component `z-index`, by default inherited from the `AppShell` */
    zIndex?: string | number;
    /** Content */
    children: React.ReactNode;
}

/** AppShellNavbar */
const AppShellNavbar = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <AppShell.Navbar {...others}>{children}</AppShell.Navbar>;
};

AppShellNavbar.defaultProps = {};

export default AppShellNavbar;
