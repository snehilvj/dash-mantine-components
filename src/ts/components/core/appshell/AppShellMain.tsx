import { AppShell } from "@mantine/core";
import { AppShellMainFactory } from "@mantine/core/lib/components/AppShell/AppShellMain/AppShellMain";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesAPIProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesAPIProps<AppShellMainFactory["stylesNames"]>,
        DashBaseProps {
    /** Content */
    children: React.ReactNode;
}

/** AppShellMain */
const AppShellMain = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <AppShell.Main {...others}>{children}</AppShell.Main>;
};

AppShellMain.defaultProps = {};

export default AppShellMain;
