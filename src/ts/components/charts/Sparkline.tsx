import { AreaChartCurveType } from '@mantine/charts';
import { SparklineTrendColors } from '@mantine/charts/lib/Sparkline/Sparkline';
import { MantineColor } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { Suspense } from 'react';

// eslint-disable-next-line no-inline-comments
const LazySparkline = React.lazy(
    () => import(/* webpackChunkName: "Sparkline" */ './fragments/Sparkline')
);

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Data used to render the chart */
    data: number[];
    /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Determines whether the chart fill should be a gradient, `true` by default */
    withGradient?: boolean;
    /** Controls fill opacity of the area, `0.6` by default */
    fillOpacity?: number;
    /** Type of the curve, `'linear'` by default */
    curveType?: AreaChartCurveType;
    /** Area stroke width, `2` by default */
    strokeWidth?: number;
    /** If set, `color` prop is ignored and chart color is determined by the difference between first and last value. */
    trendColors?: SparklineTrendColors;
    /** Props passed down to recharts `Area` component */
    areaProps?: object;
    /** Determines whether points with `null` values should be connected, `true` by default */
    connectNulls?: boolean;
}

/** Sparkline */
const Sparkline = (props: Props) => {
    return (
        <Suspense fallback={null}>
            <LazySparkline {...props} />
        </Suspense>
    );
};
export default Sparkline;
