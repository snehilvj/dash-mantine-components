import { ScatterChart as MantineScatterChart } from "@mantine/charts";
import React from "react";
import { getScatterClickData, isEventValid } from "../../../utils/charts";
import { getLoadingState } from "../../../utils/dash3";
import { Props }  from "../ScatterChart"

/** ScatterChart */
const ScatterChart = (props: Props) => {
    const { setProps, loading_state, clickData, hoverData, clickSeriesName, hoverSeriesName, scatterProps, ...others } =
        props;

    const onClick = (ev) => {
        if (isEventValid(ev)) {
            const clickdata = getScatterClickData(ev)
            setProps({
                clickData: clickdata,
                clickSeriesName: clickdata["name"]
            });
        }
    };

    const onMouseOver= (ev) => {
        if (isEventValid(ev)) {
            const clickdata = getScatterClickData(ev)
            setProps({
                hoverData: clickdata,
                hoverSeriesName: clickdata["name"]
             });
        }
    };

    const newProps = { ...scatterProps, onClick, onMouseOver};

    return (
        <MantineScatterChart
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            scatterProps={newProps}
            {...others}
        />
    );
};


export default ScatterChart;
