import { RadarChartSeries } from "@mantine/charts/lib/RadarChart/RadarChart";
import { MantineColor } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { Suspense} from "react";


// eslint-disable-next-line no-inline-comments
const LazyRadarChart = React.lazy(() => import(/* webpackChunkName: "RadarChart" */ './fragments/RadarChart'));

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Data used in the chart */
    data: Record<string, any>[];
    /** Determines which data should be consumed from the `data` array. */
    series: RadarChartSeries[];
    /** Key of the `data` object for axis values */
    dataKey: string;
    /** Controls color of the grid lines. By default, color depends on the color scheme. */
    gridColor?: MantineColor;
    /** Props passed down to recharts Legend component */
    legendProps?: object;
    /** Controls color of all text elements. By default, color depends on the color scheme. */
    textColor?: MantineColor;
    /** Determines whether chart legend should be displayed, `false` by default */
    withLegend?: boolean;
    /** Determines whether PolarGrid component should be displayed, `true` by default. */
    withPolarGrid?: boolean;
    /** Determines whether PolarAngleAxis component should be displayed, `true` by default */
    withPolarAngleAxis?: boolean;
    /** Determines whether PolarRadiusAxisProps component should be displayed, `false` by default */
    withPolarRadiusAxis?: boolean;
    /** Props passed down to recharts RadarChart component */
    radarChartProps?: object;
    /** Props passed down to recharts Radar component in a dict */
    radarProps?: any;
    /** Props passed down to recharts PolarGrid component */
    polarGridProps?: object;
    /** Props passed down to recharts PolarAngleAxis component */
    polarAngleAxisProps?: object;
    /** Props passed down to recharts PolarRadiusAxis component */
    polarRadiusAxisProps?: object;
    /** Additional components that are rendered inside recharts `RadarChart` component */
    children?: React.ReactNode;
    /** Click data */
    clickData?: Record<string, any>;
}

/** RadarChart */
const RadarChart = (props: Props) => {
    return (
      <Suspense fallback={null}>
        <LazyRadarChart {...props} />
      </Suspense>
    );
}

export default RadarChart;
