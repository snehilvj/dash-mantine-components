import { RadarChart as MantineRadarChart } from "@mantine/charts";
import { RadarChartSeries } from "@mantine/charts/lib/RadarChart/RadarChart";
import { MantineColor } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { ReactElement } from "react";
import {
    AxisDomain,
    AxisType,
    ScaleType,
    TickItem,
} from "recharts/types/util/types";

interface PolarGridProps {
    cx?: number;
    cy?: number;
    innerRadius?: number;
    outerRadius?: number;
    polarAngles?: number[];
    polarRadius?: number[];
    gridType?: "polygon" | "circle";
    radialLines?: boolean;
}

interface BaseAxisProps {
    type?: "number" | "category";
    dataKey?: string | number;
    hide?: boolean;
    scale?: ScaleType;
    tick?: boolean;
    tickCount?: number;
    axisLine?: boolean;
    tickLine?: boolean;
    tickSize?: number;
    allowDataOverflow?: boolean;
    allowDuplicatedCategory?: boolean;
    allowDecimals?: boolean;
    domain?: AxisDomain;
    includeHidden?: boolean;
    name?: string;
    unit?: string | number;
    axisType?: AxisType;
    range?: Array<number>;
    AxisComp?: any;
    label?: string | number | ReactElement | object;
    className?: string;
}

interface PolarRadiusAxisProps extends Omit<BaseAxisProps, "unit"> {
    cx?: number;
    cy?: number;
    radiusAxisId?: string | number;
    angle?: number;
    orientation?: "left" | "right" | "middle";
    ticks?: TickItem[];
    reversed?: boolean;
}

interface PolarAngleAxisProps extends BaseAxisProps {
    angleAxisId?: string | number;
    cx?: number;
    cy?: number;
    radius?: number;
    axisLineType?: "polygon" | "circle";
    ticks?: TickItem[];
    orientation?: "inner" | "outer";
}

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
    polarGridProps?: PolarGridProps;
    /** Props passed down to recharts PolarAngleAxis component */
    polarAngleAxisProps?: PolarAngleAxisProps;
    /** Props passed down to recharts PolarRadiusAxis component */
    polarRadiusAxisProps?: PolarRadiusAxisProps;
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
