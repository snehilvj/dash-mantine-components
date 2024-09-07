import { AppShell } from "@mantine/core";
import { AppShellFooterFactory } from "@mantine/core/lib/components/AppShell/AppShellFooter/AppShellFooter";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesAPIProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesAPIProps<AppShellFooterFactory["stylesNames"]>,
        DashBaseProps {
    /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
    withBorder?: boolean;
    /** Component `z-index`, by default inherited from the `AppShell` */
    zIndex?: string | number;
    /** Content */
    children: React.ReactNode;
}

/** AppShellFooter */
const AppShellFooter = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <AppShell.Footer {...others}>{children}</AppShell.Footer>;
};

AppShellFooter.defaultProps = {};

export default AppShellFooter;
