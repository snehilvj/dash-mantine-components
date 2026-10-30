import { FunnelChart as MantineFunnelChart } from '@mantine/charts';
import '@mantine/charts/styles.css';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';
import { parseFuncProps } from '../../../utils/prop-functions';
import { Props } from '../FunnelChart';

/** FunnelChart */
const FunnelChart = ({
    setProps,
    loading_state,
    clickData,
    hoverData,
    clickSeriesName,
    hoverSeriesName,
    funnelProps,
    data,
    ...others
}: Props) => {
    const handleClick = (item) => {
        if (item?.payload) {
            setProps({
                clickData: item.payload,
                clickSeriesName: item.name,
            });
        }
    };

    const handleMouseEnter = (item) => {
        if (item?.payload) {
            setProps({
                hoverData: item.payload,
                hoverSeriesName: item.name,
            });
        }
    };

    return (
        <MantineFunnelChart
            data-dash-is-loading={
                getLoadingState(loading_state) || undefined
            }
            {...parseFuncProps('FunnelChart', others)}
            data={data}
            funnelProps={{
                ...funnelProps,
                onClick: handleClick,
                onMouseEnter: handleMouseEnter,
            }}
        />
    );
};

export default FunnelChart;