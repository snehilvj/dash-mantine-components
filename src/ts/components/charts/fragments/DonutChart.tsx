import { DonutChart as MantineDonutChart } from "@mantine/charts";
import React, { useState } from "react";
import { getPieClickData, isEventValid } from "../../../utils/charts";
import { getLoadingState } from "../../../utils/dash3";
import { Props }  from "../DonutChart"

/** DonutChart */
const DonutChart = (props: Props) => {
    const { setProps, loading_state, clickData, hoverData, clickSeriesName, hoverSeriesName, pieProps, ...others } = props;

    const onClick = (ev) => {
        if (isEventValid(ev)) {
            const clickdata = getPieClickData(ev)
            setProps({
                clickData: clickdata,
                clickSeriesName: clickdata["name"]
            });
        }
    };

    const onMouseOver = (ev) => {
        if (isEventValid(ev)) {
            const hoverdata = getPieClickData(ev)
            setProps({
                hoverData: hoverdata,
                hoverSeriesName: hoverdata["name"]
            });
        }
    };

    const newProps = { ...pieProps, onClick, onMouseOver};

    return (
        <MantineDonutChart
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            pieProps={newProps}
            {...others}
        />
    );
};

export default DonutChart;
