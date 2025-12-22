import React, { Suspense } from 'react';
import {
    BarChartSeries,
    BarChartType,
} from '@mantine/charts/lib/BarChart/BarChart';
import { MantineColor } from '@mantine/core';
import { BoxProps } from 'props/box';
import { GridChartBaseProps } from 'props/charts';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';

// eslint-disable-next-line no-inline-comments
const LazyBarChart = React.lazy(
    () => import(/* webpackChunkName: "BarChart" */ './fragments/BarChart')
);

export interface Props
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
    /** Props passed down to recharts `Bar` component */
    barProps?: object;
    /** Additional components that are rendered inside recharts `BarChart` component */
    children?: React.ReactNode;
    /** Click data */
    clickData?: Record<string, any>;
    /** Hover data */
    hoverData?: Record<string, any>;
    /** Name of the series that was clicked */
    clickSeriesName?: Record<string, any>;
    /** Name of the series that is hovered*/
    hoverSeriesName?: Record<string, any>;
    /** Determines whether a label with bar value should be displayed on top of each bar.
     On type="stacked" or type="percent", additionally use withBarValueLabel to customize the label (e.g. use {position: 'inside'} to move the labels inside each bar).
     false by default */
    withBarValueLabel?: boolean;
    /** Props passed down to recharts `LabelList` component. Can be an object with props like "position" for valueLabel formatting. Only relevant, if withBarValueLabel is true. */
    valueLabelProps?: object;
    /**Determines whether a hovered series is highlighted. False by default. Mirrors the behaviour when hovering about chart legend items*/
    highlightHover?: boolean;
    /** Sets minimum height of the bar in px, `0` by default */
    minBarSize?: number;
    /** Maximum bar width in px */
    maxBarWidth?: number;
    /** Controls color of the bar label, by default the value is determined by the chart orientation */
    barLabelColor?: MantineColor;
    /** A function to assign dynamic bar color based on its value.  Accepts value and series returns MantineColor.  See https://www.dash-mantine-components.com/functions-as-props */
    getBarColor?: any;
}

/** BarChart */
const BarChart = (props: Props) => {
    return (
        <Suspense fallback={null}>
            <LazyBarChart {...props} />
        </Suspense>
    );
};

export default BarChart;
