import { DonutChart as MantineDonutChart } from '@mantine/charts';
import '@mantine/charts/styles.css';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';
import { Props } from '../DonutChart';

/** DonutChart */
const DonutChart = ({
    setProps,
    loading_state,
    clickData,
    hoverData,
    clickSeriesName,
    hoverSeriesName,
    pieProps,
    ...others
}: Props) => {
    const handleClick = (data) => {
        if (data?.payload) {
            setProps({
                clickData: data.payload,
                clickSeriesName: data.name,
            });
        }
    };

    const handleMouseEnter = (data) => {
        if (data?.payload) {
            setProps({
                hoverData: data.payload,
                hoverSeriesName: data.name,
            });
        }
    };

    return (
        <MantineDonutChart
            data-dash-is-loading={
                getLoadingState(loading_state) || undefined
            }
            pieProps={{
                ...pieProps,
                onClick: handleClick,
                onMouseEnter: handleMouseEnter,
            }}
            {...others}
        />
    );
};

export default DonutChart;