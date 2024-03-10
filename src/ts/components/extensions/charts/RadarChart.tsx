import { RadarChart as MantineRadarChart } from "@mantine/charts";
import { RadarChartSeries } from "@mantine/charts/lib/RadarChart/RadarChart";
import { MantineColor } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Data used in the chart */
    data: Record<string, any>[];
    /** Determines which data should be consumed from the `data` array. */
    series: RadarChartSeries[];
    /** Key of the `data` object for axis values */
    dataKey: string;
    /** Controls color of the grid lines. By default, color depends on the color scheme. */
    gridColor?: MantineColor;
    /** Controls color of all text elements. By default, color depends on the color scheme. */
    textColor?: MantineColor;
    /** Determines whether PolarGrid component should be displayed, `true` by default. */
    withPolarGrid?: boolean;
    /** Determines whether PolarAngleAxis component should be displayed, `true` by default */
    withPolarAngleAxis?: boolean;
    /** Determines whether PolarRadiusAxisProps component should be displayed, `false` by default */
    withPolarRadiusAxis?: boolean;
    /** Props passed down to recharts RadarChart component */
    radarChartProps?: object;
    /** Props passed down to recharts PolarGrid component */
    polarGridProps?: object;
    /** Props passed down to recharts PolarAngleAxis component */
    polarAngleAxisProps?: object;
    /** Props passed down to recharts PolarRadiusAxis component */
    polarRadiusAxisProps?: object;
    /** Additional components that are rendered inside recharts `RadarChart` component */
    children?: React.ReactNode;
}

/** RadarChart */
const RadarChart = (props: Props) => {
    const { setProps, ...others } = props;

    return <MantineRadarChart {...others} />;
};

RadarChart.defaultProps = {};

export default RadarChart;
