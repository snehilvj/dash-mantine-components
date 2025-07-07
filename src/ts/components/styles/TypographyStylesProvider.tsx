import { TypographyStylesProvider as MantineTypographyStylesProvider } from '@mantine/core';
import React from 'react';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Content to be styled. */
    children?: React.ReactNode;
}

/* TypographyStylesProvider */
const TypographyStylesProvider = (props: Props) => {
    const { children, ...others } = props;

    return (
        <MantineTypographyStylesProvider {...others}>
            {children}
        </MantineTypographyStylesProvider>
    );
};

export default TypographyStylesProvider;
