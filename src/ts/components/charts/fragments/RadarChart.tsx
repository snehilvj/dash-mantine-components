import { RadarChart as MantineRadarChart } from '@mantine/charts';
import '@mantine/charts/styles.css';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';
import { Props } from '../RadarChart';
import {parseFuncProps} from "../../../utils/prop-functions";

/** RadarChart */
const RadarChart = (props: Props) => {
    const { setProps, loading_state, clickData, radarChartProps, data, series, dataKey, ...others } =
        props;

    const onClick = (ev) => {
    if (ev?.activeLabel != null) {
            const point = data.find(
                (item) => item[dataKey] === ev.activeLabel
            );

            setProps({ clickData: point ?? null });
        }
    };

    const newProps = { ...radarChartProps, onClick };

    return (
        <MantineRadarChart
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            radarChartProps={newProps}
            data={data}
            series={series}
            dataKey={dataKey}
            {...parseFuncProps('RadarChart', others)}
        />
    );
};

export default RadarChart;
