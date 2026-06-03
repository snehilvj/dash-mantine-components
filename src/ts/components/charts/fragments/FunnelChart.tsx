import { FunnelChart as MantineFunnelChart } from '@mantine/charts';
import '@mantine/charts/styles.css';
import React, { useState } from 'react';
import { getFunnelClickData, isEventValid } from '../../../utils/charts';
import { getLoadingState } from '../../../utils/dash3';
import { Props } from '../FunnelChart';
import {parseFuncProps} from "../../../utils/prop-functions";

/** FunnelChart */
const FunnelChart = (props: Props) => {
    const {
        setProps,
        loading_state,
        clickData,
        hoverData,
        clickSeriesName,
        hoverSeriesName,
        funnelProps,
        data,
        ...others
    } = props;

    const onClick = (ev) => {
        if (isEventValid(ev)) {
            const clickdata = getFunnelClickData(ev);
            setProps({
                clickData: clickdata,
                clickSeriesName: clickdata['name'],
            });
        }
    };

    const onMouseOver = (ev) => {
        if (isEventValid(ev)) {
            const hoverdata = getFunnelClickData(ev);
            setProps({
                hoverData: hoverdata,
                hoverSeriesName: hoverdata['name'],
            });
        }
    };

    const newProps = { ...funnelProps, onClick, onMouseOver };

    return (
        <MantineFunnelChart
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
             {...parseFuncProps('FunnelChart', others)}
            data={data}
            funnelProps={newProps}
        />
    );
};

export default FunnelChart;
