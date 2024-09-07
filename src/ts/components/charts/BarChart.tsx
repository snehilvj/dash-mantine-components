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
import { getClickData, isEventValid } from "../../utils/charts";

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
    /** Props passed down to recharts `Bar` component */
    barProps?: object;
    /** Additional components that are rendered inside recharts `BarChart` component */
    children?: React.ReactNode;
    /** Click data */
    clickData?: Record<string, any>;
    /** Determines whether a label with bar value should be displayed on top of each bar,
     incompatible with type="stacked" and type="percent", false by default */
    withBarValueLabel?: boolean;

}

/** BarChart */
const BarChart = (props: Props) => {
    const { setProps, clickData, barChartProps, ...others } = props;

    const onClick = (ev) => {
        if (isEventValid(ev)) {
            setProps({ clickData: getClickData(ev) });
        }
    };

    const newProps = { ...barChartProps, onClick };

    return <MantineBarChart barChartProps={newProps}  {...others} />;
};

BarChart.defaultProps = {
    withBarValueLabel: false
};

export default BarChart;
