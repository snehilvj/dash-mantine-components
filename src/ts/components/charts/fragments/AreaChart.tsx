import { AreaChart as MantineAreaChart } from '@mantine/charts';
import '@mantine/charts/styles.css';
import React, { useRef, useState } from 'react';
import { getLoadingState } from '../../../utils/dash3';
import { parseFuncProps } from '../../../utils/prop-functions';
import { Props } from '../AreaChart';

/** AreaChart */
const AreaChart = ({
    setProps,
    loading_state,
    clickData,
    hoverData,
    clickSeriesName,
    hoverSeriesName,
    series,
    highlightHover = false,
    areaChartProps,
    activeDotProps,
    areaProps,
    data,
    dataKey,
    ...others
}: Props) => {
    const [highlightedArea, setHighlightedArea] = useState(null);

    const clickArea = useRef(null);
    const hoverArea = useRef(null);

    const shouldHighlight =
        highlightHover && highlightedArea !== null;

    const handleSeriesClick = (ev) => {
        if (ev?.name) {
            clickArea.current = ev;
        }
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
        hoverArea.current = null;
    };

    const areaPropsFunction = (item) => {
        const dimmed =
            shouldHighlight && highlightedArea !== item.name;

        const returnProps: any = {
            ...areaProps,
            onClick: handleSeriesClick,
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
        <MantineAreaChart
            data-dash-is-loading={
                getLoadingState(loading_state) || undefined
            }
            {...parseFuncProps('AreaChart', others)}
            data={data}
            dataKey={dataKey}
            series={series}
            activeDotProps={{
                ...activeDotProps,
                onClick: handleDotClick,
                onMouseOver: handleDotHover,
                onMouseOut: handleHoverEnd,
            }}
            areaProps={areaPropsFunction}
        />
    );
};

export default AreaChart;