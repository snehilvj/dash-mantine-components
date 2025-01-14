import { AppShell } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Content */
    children: React.ReactNode;
}

/** AppShellMain */
const AppShellMain = (props: Props) => {
    const { children, setProps, ...others } = props;
    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <AppShell.Main
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </AppShell.Main>
    );
};

AppShellMain.defaultProps = {};

export default AppShellMain;
