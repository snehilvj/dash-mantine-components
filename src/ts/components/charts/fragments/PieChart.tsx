import { PieChart as MantinePieChart } from '@mantine/charts';
import '@mantine/charts/styles.css';
import React, { useState } from 'react';
import { getLoadingState } from '../../../utils/dash3';
import { Props } from '../PieChart';

/** PieChart */
const PieChart = (props: Props) => {
    const {
        setProps,
        loading_state,
        pieProps,
        ...others
    } = props;

    const onClick = (data) => {
        if (data?.payload) {
            setProps({
                clickData: data.payload,
                clickSeriesName: data.name,
            });
        }
    };

    const onMouseEnter = (data) => {
        if (data?.payload) {
            setProps({
                hoverData: data.payload,
                hoverSeriesName: data.name,
            });
        }
    };

    const newProps = { ...pieProps, onClick, onMouseEnter };

    return (
        <MantinePieChart
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            pieProps={newProps}
            {...others}
        />
    );
};

export default PieChart;
