import { Heatmap as MantineHeatmap } from '@mantine/charts';
import '@mantine/charts/styles.css';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';
import { parseFuncProps } from '../../../utils/prop-functions';
import { Props } from '../Heatmap';

/** PieChart */
const Heatmap = (props: Props) => {
    const {
        setProps,
        loading_state,
        data,
        clickData,
        hoverData,
        ...others
    } = props;

    return (
        <MantineHeatmap
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...parseFuncProps('Heatmap', others)}
            data={data}
            getRectProps={({ date, value }) => ({
                onClick: () => {
                    setProps({
                        clickData: {  [date]: value },
                    });
                },
                onMouseEnter: () => {
                    setProps({
                        hoverData: { [date]: value },
                    });
                 },
                onMouseLeave: () => {
                    setProps?.({
                        hoverData: null,
                    });
                },
            })}
        />
    );
};

export default Heatmap;
