import { LineChart as MantineLineChart } from '@mantine/charts';
import '@mantine/charts/styles.css';
import React, { useState } from 'react';
import { getLoadingState } from '../../../utils/dash3';
import { parseFuncProps } from '../../../utils/prop-functions';
import { Props } from '../LineChart';

/** Mantine-themed line chart built on top of the Recharts library, */
const LineChart = ({
    setProps,
    loading_state,
    clickData,
    hoverData,
    clickSeriesName,
    hoverSeriesName,
    series,
    data,
    dataKey,
    highlightHover = false,
    lineChartProps,
    activeDotProps,
    lineProps,
    ...others
}: Props) => {
    const [highlightedArea, setHighlightedArea] = useState(null);

    const shouldHighlight =
        highlightHover && highlightedArea !== null;

    const handleDotClick = (ev, payload) => {
        if (!payload) {
            return;
        }

        setProps({
            clickSeriesName: payload.dataKey,
            clickData: payload.payload,
        });
    };

    const handleDotHover = (ev, payload) => {
        if (!payload) {
            return;
        }

        setProps({
            hoverSeriesName: payload.dataKey,
            hoverData: payload.payload,
        });

        setHighlightedArea(payload.dataKey);
    };

    const handleHoverEnd = () => {
        setHighlightedArea(null);
    };

    const linePropsFunction = (item) => {
        const dimmed =
            shouldHighlight && highlightedArea !== item.name;

        const returnProps: any = {
            ...lineProps,
            onMouseOver: () => setHighlightedArea(item.name),
            onMouseOut: handleHoverEnd,
        };

        if (dimmed) {
            returnProps.fillOpacity = 0.1;
            returnProps.strokeOpacity = 0.2;
        }

        return returnProps;
    };

    return (
        <MantineLineChart
            data-dash-is-loading={
                getLoadingState(loading_state) || undefined
            }
            {...parseFuncProps('LineChart', others)}
            data={data}
            dataKey={dataKey}
            lineChartProps={lineChartProps}
            series={series}
            activeDotProps={{
                ...activeDotProps,
                onClick: handleDotClick,
                onMouseOver: handleDotHover,
                onMouseOut: handleHoverEnd,
            }}
            lineProps={linePropsFunction}
        />
    );
};

export default LineChart;