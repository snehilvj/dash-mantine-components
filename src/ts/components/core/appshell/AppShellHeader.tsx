import { AppShell } from "@mantine/core";
import { AppShellHeaderFactory } from "@mantine/core/lib/components/AppShell/AppShellHeader/AppShellHeader";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesAPIProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesAPIProps<AppShellHeaderFactory["stylesNames"]>,
        DashBaseProps {
    /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
    withBorder?: boolean;
    /** Component `z-index`, by default inherited from the `AppShell` */
    zIndex?: string | number;
    /** Content */
    children: React.ReactNode;
}

/** AppShellHeader */
const AppShellHeader = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <AppShell.Header {...others}>{children}</AppShell.Header>;
};

AppShellHeader.defaultProps = {};

export default AppShellHeader;
