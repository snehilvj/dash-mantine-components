import { AreaChart as MantineAreaChart } from "@mantine/charts";
import React, { useState, useRef } from "react";
import { getClickData, isEventValid } from "../../../utils/charts";
import { getLoadingState } from "../../../utils/dash3";
import { Props }  from "../AreaChart"

/** AreaChart */
const AreaChart = ({
    setProps,
    loading_state,
    clickData,
    hoverData,
    clickSeriesName,
    hoverSeriesName,
    series,
    highlightHover = false,
    areaChartProps,
    activeDotProps,
    areaProps,
    ...others }: Props) => {

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

    return (
      <MantineAreaChart
        data-dash-is-loading={getLoadingState(loading_state) || undefined}
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
