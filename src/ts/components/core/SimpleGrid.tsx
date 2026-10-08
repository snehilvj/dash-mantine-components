import {
    SimpleGrid as MantineSimpleGrid,
    MantineSpacing,
    StyleProp,
} from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../utils/dash3';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
    /** Number of columns, `1` by default */
    cols?: StyleProp<number>;
    /** Spacing between columns, `'md'` by default */
    spacing?: StyleProp<MantineSpacing>;
    /** Spacing between rows, `'md'` by default */
    verticalSpacing?: StyleProp<MantineSpacing>;
    /** Determines typeof of queries that are used for responsive styles, 'media' by default */
    type?: 'media' | 'container';
    /** Minimum column width when using auto-fit/auto-fill. When set, cols prop is ignored */
    minColWidth?: string | number;
    /** Grid repeat type when minColWidth is set @default 'auto-fill' */
    autoFlow?: 'auto-fit' | 'auto-fill';
    /** Sets the size of implicitly created grid rows */
    autoRows?: string;
}

/** SimpleGrid */
const SimpleGrid = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineSimpleGrid
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineSimpleGrid>
    );
};

export default SimpleGrid;
