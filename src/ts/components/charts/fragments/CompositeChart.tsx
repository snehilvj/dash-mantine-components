import { CompositeChart as MantineCompositeChart } from '@mantine/charts';
import '@mantine/charts/styles.css';
import React, { useState } from 'react';
import { getLoadingState } from '../../../utils/dash3';
import { parseFuncProps } from '../../../utils/prop-functions';
import { Props } from '../CompositeChart';

/** CompositeChart */
const CompositeChart = ({
    setProps,
    loading_state,
    clickData,
    hoverData,
    highlightHover = false,
    hoverSeriesName,
    clickSeriesName,
    composedChartProps,
    barProps,
    lineProps,
    areaProps,
    activeDotProps,
    series,
    data,
    dataKey,
    ...others
}: Props) => {
    const [highlightedArea, setHighlightedArea] = useState(null);

    const shouldHighlight =
        highlightHover && highlightedArea !== null;

    const handleBarClick = (seriesName, ev) => {
        if (!ev?.payload) {
            return;
        }

        setProps({
            clickSeriesName: seriesName,
            clickData: ev.payload,
        });
    };

    const handleBarHover = (seriesName, ev) => {
        if (!ev?.payload) {
            return;
        }

        setProps({
            hoverSeriesName: seriesName,
            hoverData: ev.payload,
        });

        setHighlightedArea(seriesName);
    };

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

    const propsFunction = (
        item: any,
        chartType: 'bar' | 'area' | 'line'
    ) => {
        let chartProps: any = null;

        if (chartType === 'bar') {
            chartProps = barProps ?? {};
        } else if (chartType === 'area') {
            chartProps = areaProps ?? {};
        } else {
            chartProps = lineProps ?? {};
        }

        const dimmed =
            shouldHighlight && highlightedArea !== item.name;

        const returnProps: any = {
            ...chartProps,
        };

        if (chartType === 'bar') {
            returnProps.onClick = (ev) =>
                handleBarClick(item.name, ev);
            returnProps.onMouseEnter = (ev) =>
                handleBarHover(item.name, ev);
            returnProps.onMouseLeave = handleHoverEnd;
        } else {
            returnProps.onMouseOver = () =>
                setHighlightedArea(item.name);
            returnProps.onMouseOut = handleHoverEnd;
        }

        if (dimmed) {
            returnProps.fillOpacity = 0.1;
            returnProps.strokeOpacity = 0.2;
        }

        return returnProps;
    };

    return (
        <MantineCompositeChart
            data-dash-is-loading={
                getLoadingState(loading_state) || undefined
            }
            {...parseFuncProps('CompositeChart', others)}
            data={data}
            dataKey={dataKey}
            series={series}
            composedChartProps={composedChartProps}
            barProps={(item) => propsFunction(item, 'bar')}
            lineProps={(item) => propsFunction(item, 'line')}
            areaProps={(item) => propsFunction(item, 'area')}
            activeDotProps={{
                ...activeDotProps,
                onClick: handleDotClick,
                onMouseOver: handleDotHover,
                onMouseOut: handleHoverEnd,
            }}
        />
    );
};

export default CompositeChart;