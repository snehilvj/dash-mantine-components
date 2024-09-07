import { AppShell } from "@mantine/core";
import { AppShellSectionFactory } from "@mantine/core/lib/components/AppShell/AppShellSection/AppShellSection";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesAPIProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesAPIProps<AppShellSectionFactory["stylesNames"]>,
        DashBaseProps {
    /** Determines whether the section should take all available space, `false` by default */
    grow?: boolean;
    /** Content */
    children: React.ReactNode;
}

/** AppShellSection */
const AppShellSection = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <AppShell.Section {...others}>{children}</AppShell.Section>;
};

AppShellSection.defaultProps = {};

export default AppShellSection;
