// import { BarChart as MantineBarChart } from '@mantine/charts';
// import '@mantine/charts/styles.css';
// import React, { useState } from 'react';
// import { getLoadingState } from '../../../utils/dash3';
// import { resolveProp, parseFuncProps } from '../../../utils/prop-functions';
// import { Props } from '../BarChart';
//
// const defaultValueFormatter = (value: number) => value.toString();
//
// /** BarChart */
// const BarChart = ({
//     setProps,
//     loading_state,
//     clickData,
//     hoverData,
//     barChartProps,
//     clickSeriesName,
//     hoverSeriesName,
//     barProps,
//     highlightHover = false,
//     valueFormatter,
//     series,
//     data,
//     dataKey,
//     ...others
// }: Props) => {
//     const [highlightedArea, setHighlightedArea] = useState(null);
//
//     const shouldHighlight =
//         highlightHover && highlightedArea !== null;
//
//     const handleBarClick = (ev) => {
//         if (!ev?.payload) {
//             return;
//         }
//
//         setProps({
//             clickSeriesName: ev.name,
//             clickData: ev.payload,
//         });
//     };
//
//     const handleBarHover = (ev) => {
//         console.log("hover", ev)
//         if (!ev?.payload) {
//             return;
//         }
//
//         setProps({
//             hoverSeriesName: ev.name,
//             hoverData: ev.payload,
//         });
//
//         setHighlightedArea(ev.dataKey);
//     };
//
//     const handleHoverEnd = () => {
//         setHighlightedArea(null);
//     };
//
//     const barPropsFunction = (item) => {
//         const dimmed =
//             shouldHighlight && highlightedArea !== item.name;
//
//         const returnProps: any = {
//             ...barProps,
//             onClick: handleBarClick,
//             onMouseEnter: handleBarHover,
//             onMouseLeave: handleHoverEnd,
//         };
//
//         if (dimmed) {
//             returnProps.fillOpacity = 0.1;
//             returnProps.strokeOpacity = 0.2;
//         }
//
//         return returnProps;
//     };
//
//     return (
//         <MantineBarChart
//             data-dash-is-loading={
//                 getLoadingState(loading_state) || undefined
//             }
//             {...parseFuncProps('BarChart', others)}
//             data={data}
//             dataKey={dataKey}
//             series={series}
//             barProps={barPropsFunction}
//             valueFormatter={
//                 resolveProp(valueFormatter) || defaultValueFormatter
//             }
//         />
//     );
// };
//
// export default BarChart;


import { BarChart as MantineBarChart } from '@mantine/charts';
import '@mantine/charts/styles.css';
import React, { useState } from 'react';
import { getLoadingState } from '../../../utils/dash3';
import { resolveProp, parseFuncProps } from '../../../utils/prop-functions';
import { Props } from '../BarChart';

const defaultValueFormatter = (value: number) => value.toString();

/** BarChart */
const BarChart = ({
    setProps,
    loading_state,
    clickData,
    hoverData,
    barChartProps,
    clickSeriesName,
    hoverSeriesName,
    barProps,
    highlightHover = false,
    valueFormatter,
    series,
    data,
    dataKey,
    ...others
}: Props) => {
    const [highlightedArea, setHighlightedArea] = useState(null);

    const shouldHighlight =
        highlightHover && highlightedArea !== null;

    const handleBarClick = (seriesName, ev) => {
        console.log("bar click", seriesName, ev)
        if (!ev?.payload) {
            return;
        }

        setProps({
            clickSeriesName: seriesName,
            clickData: ev.payload,
        });
    };

    const handleBarHover = (seriesName, ev) => {
         console.log("bar hover", seriesName, ev)
        if (!ev?.payload) {
            return;
        }

        setProps({
            hoverSeriesName: seriesName,
            hoverData: ev.payload,
        });

        setHighlightedArea(seriesName);
    };

    const handleHoverEnd = () => {
        setHighlightedArea(null);
    };

    const barPropsFunction = (item) => {
        const dimmed =
            shouldHighlight && highlightedArea !== item.name;

        const returnProps: any = {
            ...barProps,
            onClick: (ev) => handleBarClick(item.name, ev),
            onMouseEnter: (ev) => handleBarHover(item.name, ev),
            onMouseLeave: handleHoverEnd,
        };

        if (dimmed) {
            returnProps.fillOpacity = 0.1;
            returnProps.strokeOpacity = 0.2;
        }

        return returnProps;
    };

    return (
        <MantineBarChart
            data-dash-is-loading={
                getLoadingState(loading_state) || undefined
            }
            {...parseFuncProps('BarChart', others)}
            data={data}
            dataKey={dataKey}
            series={series}
            barProps={barPropsFunction}
            valueFormatter={
                resolveProp(valueFormatter) || defaultValueFormatter
            }
        />
    );
};

export default BarChart;