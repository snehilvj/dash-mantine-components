
import {
    LineChartCurveType,
    LineChartSeries,
    LineChartGradientStop,
    LineChartType,
} from "@mantine/charts/lib/LineChart/LineChart";
import { BoxProps } from "props/box";
import { GridChartBaseProps } from "props/charts";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { Suspense } from "react";

// eslint-disable-next-line no-inline-comments
const LazyLineChart = React.lazy(() => import(/* webpackChunkName: "LineChart" */ './fragments/LineChart'));

export interface Props
    extends BoxProps,
        GridChartBaseProps,
        StylesApiProps,
        DashBaseProps {
    /** Data used to display chart */
    data: Record<string, any>[];
    /** An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array. */
    series: LineChartSeries[];
    /** Type of the curve, `'monotone'` by default */
    curveType?: LineChartCurveType;
    /** Controls fill opacity of all lines, `1` by default */
    fillOpacity?: number;
    /** Determines whether dots should be displayed, `true` by default */
    withDots?: boolean;
    /** Props passed down to all dots. Ignored if `withDots={false}` is set. */
    dotProps?: any;
    /** Props passed down to all active dots. Ignored if `withDots={false}` is set. */
    activeDotProps?: any;
    /** Stroke width for the chart lines, `2` by default */
    strokeWidth?: number;
    /** Props passed down to recharts `LineChart` component */
    lineChartProps?: any;
    /** Props passed down to recharts `Line` component */
    lineProps?: any;
    /** Determines whether points with `null` values should be connected, `true` by default */
    connectNulls?: boolean;
    /** Additional components that are rendered inside recharts `AreaChart` component */
    children?: React.ReactNode;
    /** Click data */
    clickData?: Record<string, any>;
    /** Hover data */
    hoverData?: Record<string, any>;
    /** Name of the series that was clicked */
    clickSeriesName?: Record<string, any>;
    /** Name of the series that is hovered*/
    hoverSeriesName?: Record<string, any>;
    /**Determines whether a hovered series is highlighted. False by default. Mirrors the behaviour when hovering about chart legend items*/
    highlightHover?: boolean
    /** Determines whether each point should have associated label, False by default  */
    withPointLabels?: boolean;
     /** Data used to generate gradient stops, [{ offset: 0, color: 'red' }, { offset: 100, color: 'blue' }] by default */
    gradientStops?: LineChartGradientStop[];
    /** Controls styles of the line 'default' | 'gradient'.   'default' by default */
    type?: LineChartType;
}

/** Mantine-themed line chart built on top of the Recharts library, */
const LineChart = (props: Props) => {
    return (
      <Suspense fallback={null}>
        <LazyLineChart {...props} />
      </Suspense>
    );
}

export default LineChart;
