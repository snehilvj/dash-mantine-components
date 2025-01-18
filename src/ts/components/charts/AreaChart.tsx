import { AreaChart as MantineAreaChart } from "@mantine/charts";
import {
    AreaChartCurveType,
    AreaChartSeries,
    AreaChartType,
} from "@mantine/charts/lib/AreaChart/AreaChart";
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
    series: AreaChartSeries[];
    /** Controls how chart areas are positioned relative to each other, `'default'` by default */
    type?: AreaChartType;
    /** Determines whether the chart area should be represented with a gradient instead of the solid color, `false` by default */
    withGradient?: boolean;
    /** Type of the curve, `'monotone'` by default */
    curveType?: AreaChartCurveType;
    /** Determines whether dots should be displayed, `true` by default */
    withDots?: boolean;
    /** Props passed down to all dots. Ignored if `withDots={false}` is set. */
    dotProps?: object;
    /** Props passed down to all active dots. Ignored if `withDots={false}` is set. */
    activeDotProps?: object;
    /** Stroke width for the chart areas, `2` by default */
    strokeWidth?: number;
    /** Props passed down to recharts `AreaChart` component */
    areaChartProps?: object;
    /** Props passed down to recharts `Area` component */
    areaProps?: object;
    /** Controls fill opacity of all areas, `0.2` by default */
    fillOpacity?: number;
    /** A tuple of colors used when `type="split"` is set, ignored in all other cases. A tuple may include theme colors reference or any valid CSS colors `['green.7', 'red.7']` by default. */
    splitColors?: [MantineColor, MantineColor];
    /** Offset for the split gradient. By default, value is inferred from `data` and `series` if possible. Must be generated from the data array with `getSplitOffset` function. */
    splitOffset?: number;
    /** Determines whether points with `null` values should be connected, `true` by default */
    connectNulls?: boolean;
    /** Additional components that are rendered inside recharts `AreaChart` component */
    children?: React.ReactNode;
    /** Determines whether each point should have associated label, False by default  */
    withPointLabels?: boolean;
    /** Click data */
    clickData?: Record<string, any>;
    /** Hover data */
    hoverData?: Record<string, any>;
    /** Name of the series that was clicked */
    clickSeriesName?: Record<string, any>;
    /** Name of the series that is hovered*/
    hoverSeriesName?: Record<string, any>;
    /**Determines whether a hovered series is highlighted. False by default. Mirrors the behaviour when hovering about chart legend items*/
    highlightHover?: boolean
}

/** AreaChart */
const AreaChart = (props: Props) => {
    const { setProps, clickData, hoverData, clickSeriesName, hoverSeriesName, series, highlightHover = false, areaChartProps, activeDotProps, areaProps, ...others } = props;

    const [highlightedArea, setHighlightedArea] = useState(null);
    const shouldHighlight = highlightHover && highlightedArea !== null;

    const seriesName = useRef(null);

    const onClick = (ev) => {
        if (isEventValid(ev)) {
            setProps({
                clickSeriesName: seriesName.current,
                clickData: getClickData(ev)
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
            seriesName.current = ev["name"];
        }
    };

    const handleSeriesHover = (ev) => {
        if (isEventValid(ev)) {
            const hoveredSeriesName = ev["name"];

            seriesName.current = hoveredSeriesName;
            setHighlightedArea(hoveredSeriesName);
        }
    };

    const handleDotClick = (ev, payload) => {
        if (isEventValid(ev)) {
            seriesName.current = payload["dataKey"];
        }
    }

    const handleDotHover = (ev, payload) => {
        if (isEventValid(ev)) {
            const hoveredSeriesName = payload["dataKey"];
            seriesName.current = hoveredSeriesName;
            setHighlightedArea(hoveredSeriesName);
        }
    };


    const handleHoverEnd = () => {
        setHighlightedArea(null); // Reset highlighted area
    };

    const areaPropsFunction = (item) => {
        const dimmed = shouldHighlight && highlightedArea !== item.name;

        const returnProps : any = {
            ...areaProps,
            onClick: handleSeriesClick,
            onMouseOver: handleSeriesHover,
            onMouseOut: handleHoverEnd,
        };

        /**if not dimmed, default behavior of Opacity will be triggered, including Hover over chart legend (BarChart.mjs)
            fillOpacity: dimmed ? 0.1 : fillOpacity,
            strokeOpacity: dimmed ? 0.2 : 0,
        */
        if (dimmed) {
            returnProps.fillOpacity = 0.1;
            returnProps.strokeOpacity = 0.2;
        }

        return returnProps;
    };

    const newProps = { ...areaChartProps, onClick, onMouseOver };

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
      <MantineAreaChart
        data-dash-is-loading={loading || undefined}
        areaChartProps={newProps}
        series={series}
        activeDotProps={{
            ...activeDotProps,
            onClick: handleDotClick,
            onMouseOver: handleDotHover,
            onMouseOut: handleHoverEnd,
        }}
        areaProps={areaPropsFunction}
        {...others}
      />
    );
}

export default AreaChart;
