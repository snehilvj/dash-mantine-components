import { ScatterChart as MantineScatterChart } from '@mantine/charts';
import '@mantine/charts/styles.css';
import React from 'react';
import { getScatterClickData, isEventValid } from '../../../utils/charts';
import { getLoadingState } from '../../../utils/dash3';
import { parseFuncProps } from '../../../utils/prop-functions';
import { Props } from '../ScatterChart';

/** ScatterChart */
const ScatterChart = ({
    setProps,
    loading_state,
    clickData,
    hoverData,
    clickSeriesName,
    hoverSeriesName,
    scatterProps,
    data,
    dataKey,
    ...others
}: Props) => {
    const onClick = (ev) => {
        if (isEventValid(ev)) {
            const clickdata = getScatterClickData(ev);
            setProps({
                clickData: clickdata,
                clickSeriesName: clickdata['name'],
            });
        }
    };

    const onMouseOver = (ev) => {
        if (isEventValid(ev)) {
            const clickdata = getScatterClickData(ev);
            setProps({
                hoverData: clickdata,
                hoverSeriesName: clickdata['name'],
            });
        }
    };

    const newProps = { ...scatterProps, onClick, onMouseOver };

    return (
        <MantineScatterChart
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...parseFuncProps('ScatterChart', others)}
            data={data}
            dataKey={dataKey}
            scatterProps={newProps}
        />
    );
};

export default ScatterChart;
