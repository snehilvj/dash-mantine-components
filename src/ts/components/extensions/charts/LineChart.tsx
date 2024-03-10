import { ChartData, LineChart as MantineLineChart } from "@mantine/charts";
import {
    LineChartCurveType,
    LineChartSeries,
} from "@mantine/charts/lib/LineChart/LineChart";
import { MantineColor } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface GridChartBaseProps {
    /** Data used to display chart */
    data: ChartData;
    /** Key of the `data` object for x-axis values */
    dataKey: string;
    /** Reference lines that should be displayed on the chart */
    referenceLines?: object[];
    /** Determines whether x-axis should be hidden, `true` by default */
    withXAxis?: boolean;
    /** Determines whether y-axis should be hidden, `true` by default */
    withYAxis?: boolean;
    /** Props passed down to the `XAxis` recharts component */
    xAxisProps?: object;
    /** Props passed down to the `YAxis` recharts component */
    yAxisProps?: object;
    /** Props passed down to the `CartesianGrid` component */
    gridProps?: object;
    /** Specifies which axis should have tick line, `'y'` by default */
    tickLine?: "x" | "y" | "xy" | "none";
    /** Dash array for the grid lines and cursor, `'5 5'` by default */
    strokeDasharray?: string | number;
    /** Specifies which lines should be displayed in the grid, `'x'` by default */
    gridAxis?: "x" | "y" | "xy" | "none";
    /** Unit displayed next to each tick in y-axis */
    unit?: string;
    /** Tooltip position animation duration in ms, `0` by default */
    tooltipAnimationDuration?: number;
    /** Props passed down to the `Legend` component */
    legendProps?: object;
    /** Props passed down to the `Tooltip` component */
    tooltipProps?: object;
    /** Determines whether chart legend should be displayed, `false` by default */
    withLegend?: boolean;
    /** Determines whether chart tooltip should be displayed, `true` by default */
    withTooltip?: boolean;
    /** Color of the text displayed inside the chart, `'dimmed'` by default */
    textColor?: MantineColor;
    /** Color of the grid and cursor lines, by default depends on color scheme */
    gridColor?: MantineColor;
    /** Chart orientation, `'horizontal'` by default */
    orientation?: "horizontal" | "vertical";
}

interface Props
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
    /** Determines whether points with `null` values should be connected, `true` by default */
    connectNulls?: boolean;
    /** Additional components that are rendered inside recharts `AreaChart` component */
    children?: React.ReactNode;
}

/** LineChart */
const LineChart = (props: Props) => {
    const { setProps, ...others } = props;

    return <MantineLineChart {...others} />;
};

LineChart.defaultProps = {};

export default LineChart;
