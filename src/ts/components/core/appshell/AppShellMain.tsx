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
    const { children, setProps, loading_state, ...others } = props;

    return (
        <AppShell.Main
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {children}
        </AppShell.Main>
    );
};

AppShellMain.defaultProps = {};

export default AppShellMain;
