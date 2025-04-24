import { BubbleChart as MantineBubbleChart } from "@mantine/charts";
import '@mantine/charts/styles.css';
import React from "react";
import { getScatterClickData, isEventValid } from "../../../utils/charts";
import { getLoadingState } from "../../../utils/dash3";
import { Props }  from "../BubbleChart"


/** BubbleChart */
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
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            scatterProps={newProps}
            {...others}
        />
    );
};

export default BubbleChart;
