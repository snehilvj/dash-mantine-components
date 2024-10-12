import { ScatterChart as MantineScatterChart } from "@mantine/charts";
import { ScatterChartSeries } from "@mantine/charts/lib/ScatterChart/ScatterChart";
import { BoxProps } from "props/box";
import { GridChartBaseProps } from "props/charts";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { getScatterClickData, isEventValid } from "../../utils/charts";

interface Props
    extends BoxProps,
        Omit<GridChartBaseProps, "dataKey" | "data" | "unit">,
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
    /** If set, displays labels next to points for the given axis  */
    pointLabels?: "x" | "y";
}

/** ScatterChart */
const ScatterChart = (props: Props) => {
    const { setProps, loading_state, clickData, scatterProps, ...others } =
        props;

    const onClick = (ev) => {
        if (isEventValid(ev)) {
            setProps({ clickData: getScatterClickData(ev) });
        }
    };

    const newProps = { ...scatterProps, onClick };

    return (
        <MantineScatterChart
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            scatterProps={newProps}
            {...others}
        />
    );
};

ScatterChart.defaultProps = {};

export default ScatterChart;
