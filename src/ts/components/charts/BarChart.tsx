import { BarChart as MantineBarChart } from "@mantine/charts";
import {
    BarChartSeries,
    BarChartType,
} from "@mantine/charts/lib/BarChart/BarChart";
import { MantineColor } from "@mantine/core";
import { BoxProps } from "props/box";
import { GridChartBaseProps } from "props/charts";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        GridChartBaseProps,
        StylesApiProps,
        DashBaseProps {
    /** Data used to display chart */
    data: Record<string, any>[];
    /** An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array. */
    series: BarChartSeries[];
    /** Controls how bars are positioned relative to each other, `'default'` by default */
    type?: BarChartType;
    /** Controls fill opacity of all bars, `1` by default */
    fillOpacity?: number;
    /** Fill of hovered bar section, by default value is based on color scheme */
    cursorFill?: MantineColor;
    /** Props passed down to recharts `BarChart` component */
    barChartProps?: object;
    /** Additional components that are rendered inside recharts `BarChart` component */
    children?: React.ReactNode;
}

/** BarChart */
const BarChart = (props: Props) => {
    const { setProps, ...others } = props;

    return <MantineBarChart {...others} />;
};

BarChart.defaultProps = {};

export default BarChart;
