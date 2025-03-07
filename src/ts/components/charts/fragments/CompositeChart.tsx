import { CompositeChart as MantineCompositeChart } from "@mantine/charts";
import React, { useRef, useState } from "react";
import { getClickData, isEventValid } from "../../../utils/charts";
import { getLoadingState } from "../../../utils/dash3";
import { Props }  from "../CompositeChart"

/** CompositeChart */
const CompositeChart = ({
    setProps,
    loading_state,
    clickData,
    hoverData,
    highlightHover = false,
    hoverSeriesName,
    clickSeriesName,
    composedChartProps,
    barProps,
    lineProps,
    areaProps,
    activeDotProps,
    ...others
}: Props) => {

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

    return (
        <MantineCompositeChart
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
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


export default CompositeChart;