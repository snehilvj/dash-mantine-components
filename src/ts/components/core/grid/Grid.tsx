import {
    Grid as MantineGrid,
    MantineSpacing,
    StyleProp,
    MantineSize,
} from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';

export type GridBreakpoints = Record<MantineSize, string>;

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
    /** Gutter between columns, key of `theme.spacing` or any valid CSS value, `'md'` by default */
    gutter?: StyleProp<MantineSpacing>;
    /** Determines whether columns in the last row should expand to fill all available space, `false` by default */
    grow?: boolean;
    /** Sets `justify-content`, `flex-start` by default */
    justify?: React.CSSProperties['justifyContent'];
    /** Sets `align-items`, `stretch` by default */
    align?: React.CSSProperties['alignItems'];
    /** Number of columns in each row, `12` by default */
    columns?: number;
    /** Sets `overflow` CSS property on the root element, `'visible'` by default */
    overflow?: React.CSSProperties['overflow'];
    /** Determines typeof of queries that are used for responsive styles, `'media'` by default */
    type?: 'media' | 'container';
    /** Breakpoints values, only applicable when `type="container"` is set, ignored when `type` is not set or `type="media"` is set. */
    breakpoints?: GridBreakpoints;
}

/** Grid */
const Grid = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineGrid
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineGrid>
    );
};

export default Grid;
