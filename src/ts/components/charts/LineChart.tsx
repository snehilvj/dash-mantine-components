import { LineChart as MantineLineChart } from "@mantine/charts";
import {
    LineChartCurveType,
    LineChartSeries,
    LineChartGradientStop,
    LineChartType,
} from "@mantine/charts/lib/LineChart/LineChart";
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
    series: LineChartSeries[];
    /** Type of the curve, `'monotone'` by default */
    curveType?: LineChartCurveType;
    /** Controls fill opacity of all lines, `1` by default */
    fillOpacity?: number;
    /** Determines whether dots should be displayed, `true` by default */
    withDots?: boolean;
    /** Props passed down to all dots. Ignored if `withDots={false}` is set. */
    dotProps?: any;
    /** Props passed down to all active dots. Ignored if `withDots={false}` is set. */
    activeDotProps?: any;
    /** Stroke width for the chart lines, `2` by default */
    strokeWidth?: number;
    /** Props passed down to recharts `LineChart` component */
    lineChartProps?: any;
    /** Props passed down to recharts `Line` component */
    lineProps?: any;
    /** Determines whether points with `null` values should be connected, `true` by default */
    connectNulls?: boolean;
    /** Additional components that are rendered inside recharts `AreaChart` component */
    children?: React.ReactNode;
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
    /** Determines whether each point should have associated label, False by default  */
    withPointLabels?: boolean;
     /** Data used to generate gradient stops, [{ offset: 0, color: 'red' }, { offset: 100, color: 'blue' }] by default */
    gradientStops?: LineChartGradientStop[];
    /** Controls styles of the line 'default' | 'gradient'.   'default' by default */
    type?: LineChartType;
}

/** Mantine-themed line chart built on top of the Recharts library, */
const LineChart = (props: Props) => {
    const { setProps, loading_state, clickData, hoverData, clickSeriesName, hoverSeriesName, series, highlightHover, lineChartProps, activeDotProps, lineProps, ...others } = props;

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

    const linePropsFunction = (item) => {
        const dimmed = shouldHighlight && highlightedArea !== item.name;

        const returnProps : any = {
            ...lineProps,
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


    const newProps = { ...lineChartProps, onClick, onMouseOver };

    return (
        <MantineLineChart
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            lineChartProps={newProps}
            series={series}
            activeDotProps={{
                ...activeDotProps,
                onClick: handleDotClick,
                onMouseOver: handleDotHover,
                onMouseOut: handleHoverEnd,
            }}
            lineProps={linePropsFunction}
            {...others}
        />
    );
};

LineChart.defaultProps = {
    highlightHover: false,
};

export default LineChart;
