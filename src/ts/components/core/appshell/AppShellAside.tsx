import { AppShell } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
    withBorder?: boolean;
    /** Component `z-index`, by default inherited from the `AppShell` */
    zIndex?: string | number;
    /** Content */
    children: React.ReactNode;
}

/** AppShellAside */
const AppShellAside = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <AppShell.Aside {...other}>{children}</AppShell.Aside>;
};

AppShellAside.defaultProps = {};

export default AppShellAside;
