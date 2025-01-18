import { AppShell } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Determines whether the section should take all available space, `false` by default */
    grow?: boolean;
    /** Content */
    children: React.ReactNode;
}

/** AppShellSection */
const AppShellSection = (props: Props) => {
    const { children, setProps, ...others } = props;
    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <AppShell.Section
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </AppShell.Section>
    );
};

export default AppShellSection;
