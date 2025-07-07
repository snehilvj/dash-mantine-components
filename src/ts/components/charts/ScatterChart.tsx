import { ScatterChartSeries } from '@mantine/charts/lib/ScatterChart/ScatterChart';
import { BoxProps } from 'props/box';
import { GridChartBaseProps } from 'props/charts';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { Suspense } from 'react';

// eslint-disable-next-line no-inline-comments
const LazyScatterChart = React.lazy(
    () =>
        import(
            /* webpackChunkName: "ScatterChart" */ './fragments/ScatterChart'
        )
);

export interface Props
    extends BoxProps,
        Omit<GridChartBaseProps, 'dataKey' | 'data' | 'unit'>,
        StylesApiProps,
        DashBaseProps {
    /** Keys that should be used to retrieve data from the data array on x and y axis */
    dataKey: {
        x: string;
        y: string;
    };
    /** Data that is used to build the chart */
    data: ScatterChartSeries[];
    /** Units displayed after value on axis and inside the tooltip */
    unit?: {
        x?: string;
        y?: string;
    };
    /** Labels that should be used instead of keys names in the tooltip */
    labels?: {
        x?: string;
        y?: string;
    };
    /** Props passed down to recharts `ScatterChart` component */
    scatterChartProps?: object;
    /** Props passed down to recharts `Scatter` component */
    scatterProps?: object;
    /** Click data */
    clickData?: Record<string, any>;
    /** Hover data */
    hoverData?: Record<string, any>;
    /** If set, displays labels next to points for the given axis  */
    pointLabels?: 'x' | 'y';
    /** Name of the series that was clicked */
    clickSeriesName?: Record<string, any>;
    /** Name of the series that is hovered*/
    hoverSeriesName?: Record<string, any>;
}

/** ScatterChart */
const ScatterChart = (props: Props) => {
    return (
        <Suspense fallback={null}>
            <LazyScatterChart {...props} />
        </Suspense>
    );
};

export default ScatterChart;
