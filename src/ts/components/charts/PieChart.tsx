import { PieChartCell } from '@mantine/charts/lib/PieChart/PieChart';
import { MantineColor } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { Suspense } from 'react';

// eslint-disable-next-line no-inline-comments
const LazyPieChart = React.lazy(
    () => import(/* webpackChunkName: "PieChart" */ './fragments/PieChart')
);

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Data used to render chart */
    data: PieChartCell[];
    /** Determines whether the tooltip should be displayed when one of the section is hovered, `true` by default */
    withTooltip?: boolean;
    /** Tooltip animation duration in ms, `0` by default */
    tooltipAnimationDuration?: number;
    /** Props passed down to `Tooltip` recharts component */
    tooltipProps?: any;
    /** Props passed down to recharts `Pie` component */
    pieProps?: any;
    /** Controls color of the segments stroke, by default depends on color scheme */
    strokeColor?: MantineColor;
    /** Controls text color of all labels, white by default */
    labelColor?: MantineColor;
    /** Controls padding between segments, `0` by default */
    paddingAngle?: number;
    /** Determines whether each segment should have associated label, `false` by default */
    withLabels?: boolean;
    /** Determines whether segments labels should have lines that connect the segment with the label, `true` by default */
    withLabelsLine?: boolean;
    /** Controls chart width and height, height is increased by 40 if `withLabels` prop is set. Cannot be less than `thickness`. `80` by default */
    size?: number;
    /** Controls width of segments stroke, `1` by default */
    strokeWidth?: number;
    /** Controls angle at which chart starts, `0` by default. Set to `180` to render the chart as semicircle. */
    startAngle?: number;
    /** Controls angle at which charts ends, `360` by default. Set to `0` to render the chart as semicircle. */
    endAngle?: number;
    /** Determines which data is displayed in the tooltip. `'all'` – display all values, `'segment'` – display only hovered segment. `'all'` by default. */
    tooltipDataSource?: 'segment' | 'all';
    /** Additional elements rendered inside `PieChart` component */
    children?: React.ReactNode;
    /** Props passed down to recharts `PieChart` component */
    pieChartProps?: object;
    /** Controls labels position relative to the segment, `'outside'` by default */
    labelsPosition?: 'inside' | 'outside';
    /** Type of labels to display, `'value'` by default */
    labelsType?: 'value' | 'percent';
    /** Click data */
    clickData?: Record<string, any>;
    /** Hover data */
    hoverData?: Record<string, any>;
    /** Name of the series that was clicked */
    clickSeriesName?: Record<string, any>;
    /** Name of the series that is hovered*/
    hoverSeriesName?: Record<string, any>;
}

/** PieChart */
const PieChart = (props: Props) => {
    return (
        <Suspense fallback={null}>
            <LazyPieChart {...props} />
        </Suspense>
    );
};

export default PieChart;
