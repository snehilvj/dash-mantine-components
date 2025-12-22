import { RadarChart as MantineRadarChart } from '@mantine/charts';
import '@mantine/charts/styles.css';
import React from 'react';
import { getClickData, isEventValid } from '../../../utils/charts';
import { getLoadingState } from '../../../utils/dash3';
import { Props } from '../RadarChart';

/** RadarChart */
const RadarChart = (props: Props) => {
    const { setProps, loading_state, clickData, radarChartProps, ...others } =
        props;

    const onClick = (ev) => {
        if (isEventValid(ev)) {
            setProps({ clickData: getClickData(ev) });
        }
    };

    const newProps = { ...radarChartProps, onClick };

    return (
        <MantineRadarChart
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            radarChartProps={newProps}
            {...others}
        />
    );
};

export default RadarChart;
