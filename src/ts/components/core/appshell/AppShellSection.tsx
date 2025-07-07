import { AppShell } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Determines whether the section should take all available space, `false` by default */
    grow?: boolean;
    /** Content */
    children: React.ReactNode;
}

/** AppShellSection */
const AppShellSection = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <AppShell.Section
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </AppShell.Section>
    );
};

export default AppShellSection;
