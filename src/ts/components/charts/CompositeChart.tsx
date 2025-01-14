import { CompositeChart as MantineCompositeChart } from "@mantine/charts";
import {
    CompositeChartSeries,
    CompositeChartCurveType,
} from "@mantine/charts/lib/CompositeChart/CompositeChart";
import { BoxProps } from "props/box";
import { GridChartBaseProps } from "props/charts";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { useRef, useState } from "react";
import { getClickData, isEventValid } from "../../utils/charts";

interface Props
    extends BoxProps,
        Omit<GridChartBaseProps, 'orientation'>,
        StylesApiProps,
        DashBaseProps {
    /** Data used to display chart */
    data: Record<string, any>[];
    /** An array of objects with `name`, `color` and `type` keys. Determines which data should be consumed from the `data` array. */
    series: CompositeChartSeries[];
    /** Controls how curve of lines and area series are displayed, `'montone'` by default */
    curveType?: CompositeChartCurveType;
    /** Additional components that are rendered inside `Composite` component */
    children?: React.ReactNode;
    /** Click data for entire dataKey*/
    clickData?: Record<string, any>;
    /** Hover data for entire dataKey*/
    hoverData?: Record<string, any>;
    /** Determines whether a label with value should be displayed on top of a curve,
     This feature is supported only for Line and Area series */
    withPointLabels?: boolean;
     /** Determines whether a label with bar value should be displayed on top of each bar, incompatible with `type="stacked"` and `type="percent"`, `false` by default */
    withBarValueLabel?: boolean;
    /** Props passed down to recharts `Composite` component */
    composedChartProps?: object;
    /** Props passed down to recharts `Line` component */
    lineProps?: object;
    /** Props passed down to recharts `Area` component */
    areaProps?: object;
    /** Props passed down to recharts `Bar` component */
    barProps?: object;
    /** Props passed down to all dots. Ignored if `withDots={false}` is set. */
    dotProps?: any;
    /** Props passed down to all active dots. Ignored if `withDots={false}` is set. */
    activeDotProps?: any;
    /** Name of the series that was clicked */
    clickSeriesName?: Record<string, any>;
    /** Name of the series that is hovered*/
    hoverSeriesName?: Record<string, any>;
    /**Determines whether a hovered series is highlighted. False by default. Mirrors the behaviour when hovering about chart legend items*/
    highlightHover?: boolean
    /** Determines whether dots should be displayed, `true` by default */
    withDots?: boolean;
    /** Stroke width for the chart lines, `2` by default */
    strokeWidth?: number;
    /** Determines whether points with `null` values should be connected, `true` by default */
    connectNulls?: boolean;
    /** Sets minimum height of the bar in px, `0` by default */
    minBarSize?: number;
    /** Maximum bar width in px */
    maxBarWidth?: number;
}

/** CompositeChart */
const CompositeChart = (props: Props) => {
    const { setProps,  clickData, hoverData, highlightHover, hoverSeriesName, clickSeriesName, composedChartProps, barProps, lineProps, areaProps, activeDotProps, ...others } =
        props;

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
            seriesName.current = ev.tooltipPayload?.[0]?.name ?? ev.name;
        }
    };

    const handleSeriesHover = (ev) => {
        if (isEventValid(ev)) {
            const hoveredSeriesName = ev.tooltipPayload?.[0]?.name ?? ev.name;
            seriesName.current = hoveredSeriesName
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


    const propsFunction = (item: any, chartType: "bar" | "area" | "line") => {
        let chartProps : any = null;
        const dimmed = shouldHighlight && highlightedArea !== item.name;

        if (chartType === "bar") {
            chartProps = barProps ?? {};
        } else if (chartType === "area") {
            chartProps = areaProps ?? {};
        } else if (chartType === "line") {
            chartProps = lineProps ?? {};
        }

        if (dimmed) {
            chartProps.fillOpacity = 0.1;
            chartProps.strokeOpacity = 0.2;
        }

        const returnProps: any = {
            ...chartProps,
            onClick: handleSeriesClick,
            onMouseOver: handleSeriesHover,
            onMouseOut: handleHoverEnd,
        };

        return returnProps;
    };



    const newProps = { ...composedChartProps, onClick, onMouseOver};


    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineCompositeChart
            data-dash-is-loading={loading || undefined}
            composedChartProps={newProps}
            barProps={(item) => propsFunction(item, 'bar')}   // Pass the chart type as 'bar'
            lineProps={(item) => propsFunction(item, 'line')}  // Pass the chart type as 'line'
            areaProps={(item) => propsFunction(item, 'area')}  // Pass the chart type as 'area'
            activeDotProps={{
                ...activeDotProps,
                onClick: handleDotClick,
                onMouseOver: handleDotHover,
                onMouseOut: handleHoverEnd,
            }}
            {...others}
        />
    );
};

CompositeChart.defaultProps = {
    withPointLabels: false,
    withBarValueLabel: false,
    highlightHover: false
};

export default CompositeChart;