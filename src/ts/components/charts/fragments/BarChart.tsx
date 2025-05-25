import { BarChart as MantineBarChart } from "@mantine/charts";
import '@mantine/charts/styles.css';
import React, { useState, useRef } from "react";
import { getClickData, isEventValid } from "../../../utils/charts";
import { getLoadingState } from "../../../utils/dash3";
import { resolveProp } from "../../../utils/prop-functions"
import { Props }  from "../BarChart"

/** BarChart */
const BarChart = ({
    setProps,
    loading_state,
    clickData,
    hoverData,
    barChartProps,
    clickSeriesName,
    hoverSeriesName,
    barProps,
    highlightHover = false,
    valueFormatter,
    tooltipProps,
    getBarColor,
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

    return (
        <MantineBarChart
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            barChartProps={newProps}
            barProps={barPropsFunction}
            valueFormatter={resolveProp(valueFormatter)}
            tooltipProps={resolveProp(tooltipProps)}
            getBarColor={resolveProp(getBarColor)}
            {...others}
        />

    );
};




export default BarChart;
