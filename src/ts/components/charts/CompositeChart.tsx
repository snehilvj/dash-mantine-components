import {
    CompositeChartSeries,
    CompositeChartCurveType,
} from "@mantine/charts/lib/CompositeChart/CompositeChart";
import { BoxProps } from "props/box";
import { GridChartBaseProps } from "props/charts";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { Suspense } from "react";

// eslint-disable-next-line no-inline-comments
const LazyCompositeChart = React.lazy(() => import(/* webpackChunkName: "CompositeChart" */ './fragments/CompositeChart'));

export interface Props
    extends BoxProps,
        Omit<GridChartBaseProps, 'orientation'>,
        StylesApiProps,
        DashBaseProps {
    /** Data used to display chart */
    data: Record<string, any>[];
    /** An array of objects with `name`, `color` and `type` keys. Determines which data should be consumed from the `data` array. */
    series: CompositeChartSeries[];
    /** Controls how curve of lines and area series are displayed, `'montone'` by default */
    curveType?: CompositeChartCurveType;
    /** Additional components that are rendered inside `Composite` component */
    children?: React.ReactNode;
    /** Click data for entire dataKey*/
    clickData?: Record<string, any>;
    /** Hover data for entire dataKey*/
    hoverData?: Record<string, any>;
    /** Determines whether a label with value should be displayed on top of a curve,
     This feature is supported only for Line and Area series */
    withPointLabels?: boolean;
     /** Determines whether a label with bar value should be displayed on top of each bar, incompatible with `type="stacked"` and `type="percent"`, `false` by default */
    withBarValueLabel?: boolean;
    /** Props passed down to recharts `Composite` component */
    composedChartProps?: object;
    /** Props passed down to recharts `Line` component */
    lineProps?: object;
    /** Props passed down to recharts `Area` component */
    areaProps?: object;
    /** Props passed down to recharts `Bar` component */
    barProps?: object;
    /** Props passed down to all dots. Ignored if `withDots={false}` is set. */
    dotProps?: any;
    /** Props passed down to all active dots. Ignored if `withDots={false}` is set. */
    activeDotProps?: any;
    /** Name of the series that was clicked */
    clickSeriesName?: Record<string, any>;
    /** Name of the series that is hovered*/
    hoverSeriesName?: Record<string, any>;
    /**Determines whether a hovered series is highlighted. False by default. Mirrors the behaviour when hovering about chart legend items*/
    highlightHover?: boolean
    /** Determines whether dots should be displayed, `true` by default */
    withDots?: boolean;
    /** Stroke width for the chart lines, `2` by default */
    strokeWidth?: number;
    /** Determines whether points with `null` values should be connected, `true` by default */
    connectNulls?: boolean;
    /** Sets minimum height of the bar in px, `0` by default */
    minBarSize?: number;
    /** Maximum bar width in px */
    maxBarWidth?: number;
}


/** CompositeChart */
const CompositeChart = (props: Props) => {
    return (
      <Suspense fallback={null}>
        <LazyCompositeChart {...props} />
      </Suspense>
    );
}


export default CompositeChart;