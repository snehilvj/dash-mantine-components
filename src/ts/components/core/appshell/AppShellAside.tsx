import { AppShell } from "@mantine/core";
import { AppShellAsideFactory } from "@mantine/core/lib/components/AppShell/AppShellAside/AppShellAside";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesAPIProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesAPIProps<AppShellAsideFactory["stylesNames"]>,
        DashBaseProps {
    /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
    withBorder?: boolean;
    /** Component `z-index`, by default inherited from the `AppShell` */
    zIndex?: string | number;
    /** Content */
    children: React.ReactNode;
}

/** AppShellAside */
const AppShellAside = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <AppShell.Aside {...others}>{children}</AppShell.Aside>;
};

AppShellAside.defaultProps = {};

export default AppShellAside;
