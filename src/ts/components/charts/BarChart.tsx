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
import React, { useState, useRef } from "react";
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
    /** Hover data */
    hoverData?: Record<string, any>;
    /** Name of the series that was clicked */
    clickSeriesName?: Record<string, any>;
    /** Name of the series that is hovered*/
    hoverSeriesName?: Record<string, any>;
    /** Determines whether a label with bar value should be displayed on top of each bar,
     incompatible with type="stacked" and type="percent", false by default */
    withBarValueLabel?: boolean;
    /**Determines whether a hovered series is highlighted. False by default. Mirrors the behaviour when hovering about chart legend items*/
    highlightHover?: boolean
    /** Sets minimum height of the bar in px, `0` by default */
    minBarSize?: number;
    /** Maximum bar width in px */
    maxBarWidth?: number;
    /** Controls color of the bar label, by default the value is determined by the chart orientation */
    barLabelColor?: MantineColor;
}

/** BarChart */
const BarChart = (props: Props) => {
    const {
        setProps,  clickData, hoverData, barChartProps, clickSeriesName, hoverSeriesName, barProps,
        highlightHover = false, withBarValueLabel= false, ...others } =  props;

    const [highlightedArea, setHighlightedArea] = useState(null);
    const shouldHighlight = highlightHover && highlightedArea !== null;

    const seriesName = useRef(null);

    const onClick = (ev) => {
        if (isEventValid(ev)) {
            setProps({
                clickSeriesName: seriesName.current,
                clickData: getClickData(ev),
            });
        }
        seriesName.current = null;
    };

    const onMouseOver = (ev) => {
        if (isEventValid(ev)) {
            setProps({
                hoverSeriesName: seriesName.current,
                hoverData: getClickData(ev)
            });
        }
        seriesName.current = null;
    };


    const handleSeriesClick= (ev) => {
        if (isEventValid(ev)) {
            seriesName.current = ev.tooltipPayload[0]["name"];
        }
    };

    const handleSeriesHover = (ev) => {
        if (isEventValid(ev)) {
            const hoveredSeriesName = ev.tooltipPayload[0]["name"];
            seriesName.current = hoveredSeriesName
            setHighlightedArea(hoveredSeriesName);
        }
    };

    const handleSeriesHoverEnd = () => {
        setHighlightedArea(null); // Reset highlighted area
    };

    const barPropsFunction = (item) => {
        const dimmed = shouldHighlight && highlightedArea !== item.name;

        const returnProps : any = {
            ...barProps,
            onClick: handleSeriesClick,
            onMouseOver: handleSeriesHover,
            onMouseOut: handleSeriesHoverEnd,
        };

        /**if not dimmed, default behavior of Opacity will be triggered, including Hover over chart legend (BarChart.mjs)
            fillOpacity: dimmed ? 0.1 : fillOpacity,
            strokeOpacity: dimmed ? 0.2 : 0,
        */
        if (dimmed) {
            returnProps.fillOpacity = 0.1
            returnProps.strokeOpacity = 0.2
        }

        return returnProps
    };

    const newProps = { ...barChartProps, onClick, onMouseOver };

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineBarChart
            data-dash-is-loading={loading || undefined}
            barChartProps={newProps}
            barProps={barPropsFunction}
            {...others}
        />

    );
};


export default BarChart;
