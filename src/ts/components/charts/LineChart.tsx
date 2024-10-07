import { LineChart as MantineLineChart } from "@mantine/charts";
import {
    LineChartCurveType,
    LineChartSeries,
} from "@mantine/charts/lib/LineChart/LineChart";
import { BoxProps } from "props/box";
import { GridChartBaseProps } from "props/charts";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { getClickData, isEventValid } from "../../utils/charts";

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
    /** Click data */
    clickData?: Record<string, any>;
}

/** LineChart */
const LineChart = (props: Props) => {
    const { setProps, loading_state, clickData, lineChartProps, ...others } =
        props;

    const onClick = (ev) => {
        if (isEventValid(ev)) {
            setProps({ clickData: getClickData(ev) });
        }
    };

    const newProps = { ...lineChartProps, onClick };

    return (
        <MantineLineChart
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            lineChartProps={newProps}
            {...others}
        />
    );
};

LineChart.defaultProps = {};

export default LineChart;
