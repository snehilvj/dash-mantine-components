import { DonutChartCell } from "@mantine/charts/lib/DonutChart/DonutChart";
import { MantineColor } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { Suspense } from "react";

// eslint-disable-next-line no-inline-comments
const LazyDonutChart = React.lazy(() => import(/* webpackChunkName: "DonutChart" */ './fragments/DonutChart'));

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Data used to render chart */
    data: DonutChartCell[];
    /** Determines whether the tooltip should be displayed when one of the section is hovered, `true` by default */
    withTooltip?: boolean;
    /** Tooltip animation duration in ms, `0` by default */
    tooltipAnimationDuration?: number;
    /** Props passed down to `Tooltip` recharts component */
    tooltipProps?: object;
    /** Props passed down to recharts `Pie` component */
    pieProps?: object;
    /** Controls color of the segments stroke, by default depends on color scheme */
    strokeColor?: MantineColor;
    /** Controls text color of all labels, by default depends on color scheme */
    labelColor?: MantineColor;
    /** Controls padding between segments, `0` by default */
    paddingAngle?: number;
    /** Determines whether each segment should have associated label, `false` by default */
    withLabels?: boolean;
    /** Determines whether segments labels should have lines that connect the segment with the label, `true` by default */
    withLabelsLine?: boolean;
    /** Controls thickness of the chart segments, `20` by default */
    thickness?: number;
    /** Controls chart width and height, height is increased by 40 if `withLabels` prop is set. Cannot be less than `thickness`. `80` by default */
    size?: number;
    /** Controls width of segments stroke, `1` by default */
    strokeWidth?: number;
    /** Controls angle at which chart starts, `0` by default. Set to `180` to render the chart as semicircle. */
    startAngle?: number;
    /** Controls angle at which charts ends, `360` by default. Set to `0` to render the chart as semicircle. */
    endAngle?: number;
    /** Determines which data is displayed in the tooltip. `'all'` – display all values, `'segment'` – display only hovered segment. `'all'` by default. */
    tooltipDataSource?: "segment" | "all";
    /** Chart label, displayed in the center of the chart */
    chartLabel?: string | number;
    /** Additional elements rendered inside `PieChart` component */
    children?: React.ReactNode;
    /** Props passed down to recharts `PieChart` component */
    pieChartProps?: object;
    /** Click data */
    clickData?: Record<string, any>;
    /** Hover data */
    hoverData?: Record<string, any>;
    /** Name of the series that was clicked */
    clickSeriesName?: Record<string, any>;
    /** Name of the series that is hovered*/
    hoverSeriesName?: Record<string, any>;
}

/** DonutChart */
const DonutChart = (props: Props) => {
    return (
      <Suspense fallback={null}>
        <LazyDonutChart {...props} />
      </Suspense>
    );
}

export default DonutChart;
