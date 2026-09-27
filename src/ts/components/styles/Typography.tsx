import { Typography as MantineTypography } from '@mantine/core';
import React from 'react';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Content to be styled. */
    children?: React.ReactNode;
}

/* Typography Styles */
const Typography = (props: Props) => {
    const { children, ...others } = props;

    return (
        <MantineTypography {...others}>
            {children}
        </MantineTypography>
    );
};

export default Typography;
