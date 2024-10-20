import { BubbleChart as MantineBubbleChart } from "@mantine/charts";
import { BubbleChartDataKey } from "@mantine/charts";
import { MantineColor } from "@mantine/core";
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
    /** Chart data */
    data: Record<string, any>[];
    /** Data keys for x, y and z axis */
    dataKey: BubbleChartDataKey;    
    /** Z axis range */
    range: [number, number];
    /** Color of the chart items. Key of `theme.colors` or any valid CSS color, `blue.6` by default. */
    color?: MantineColor;
    /** Props passed down to the `XAxis` recharts component */
    xAxisProps?: object;
    /** Props passed down to the `YAxis` recharts component */
    yAxisProps?: object;
    /** Props passed down to the `ZAxis` recharts component */
    zAxisProps?: object;
    /** Props passed down to the `Tooltip` component */
    tooltipProps?: object;
    /** Props passed down to the `Scatter` component */
    scatterProps?: object;
    /** Color of the text displayed inside the chart, `'dimmed'` by default */
    textColor?: MantineColor;
    /** Color of the grid and cursor lines, by default depends on color scheme */
    gridColor?: MantineColor;
    /** Chart label displayed next to the x axis */
    label?: string;
    /** Determines whether the tooltip should be displayed, `true` by default */
    withTooltip?: boolean;    
    /** Click data */
    clickData?: Record<string, any>;
    /** Hover data */
    hoverData?: Record<string, any>;
}


/** ScatterChart */
const BubbleChart = (props: Props) => {
    const { setProps, loading_state, clickData, hoverData, scatterProps, ...others } =
        props;

    const onClick = (ev) => {
        if (isEventValid(ev)) {
            setProps({ clickData: getScatterClickData(ev) });
        }
    };

    const onMouseOver= (ev) => {
        if (isEventValid(ev)) {
            setProps({ hoverData: getScatterClickData(ev) });
        }
    };

    const newProps = { ...scatterProps, onClick, onMouseOver};

    return (
        <MantineBubbleChart
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            scatterProps={newProps}
            {...others}
        />
    );
};

BubbleChart.defaultProps = {};

export default BubbleChart;
