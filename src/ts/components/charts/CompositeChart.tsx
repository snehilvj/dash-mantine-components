import { CompositeChart as MantineCompositeChart } from "@mantine/charts";
import {
    CompositeChartSeries,
    CompositeChartCurveType,
} from "@mantine/charts/lib/CompositeChart/CompositeChart";
import { BoxProps } from "props/box";
import { GridChartBaseProps } from "props/charts";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { getClickData, isEventValid } from "../../utils/charts";

interface Props
    extends BoxProps,
        GridChartBaseProps,
        StylesApiProps,
        DashBaseProps {
    /** Data used to display chart */
    data: Record<string, any>[];
    /** An array of objects with `name`, `color` and `type` keys. Determines which data should be consumed from the `data` array. */
    series: CompositeChartSeries[];
    /** Controls how curve of lines and area series are displayed, `'montone'` by default */
    curveType?: CompositeChartCurveType;    
    /** Additional components that are rendered inside `Composite` component */
    children?: React.ReactNode;
    /** Click data for entire dataKey*/
    clickData?: Record<string, any>;    
    /** Hover data for entire dataKey*/
    hoverData?: Record<string, any>;  
    /** Determines whether a label with value should be displayed on top of a curve,
     This feature is supported only for Line and Area series */
    withPointLabels?: boolean;
     /** Determines whether a label with bar value should be displayed on top of each bar, incompatible with `type="stacked"` and `type="percent"`, `false` by default */
    withBarValueLabel?: boolean;
    /** Props passed down to recharts `Composite` component */
    composedChartProps?: object;    
    /** Props passed down to recharts `Line` component */
    lineProps?: object;
    /** Props passed down to recharts `Area` component */
    areaProps?: object;
    /** Props passed down to recharts `Bar` component */
    barProps?: object;
    /** Name of the series that was clicked */
    clickSeriesName?: Record<string, any>;
    /** Name of the series that is hovered*/
    hoverSeriesName?: Record<string, any>;
}

/** CompositeChart */
const CompositeChart = (props: Props) => {
    const { setProps, loading_state, clickData, hoverData, hoverSeriesName, clickSeriesName, composedChartProps, barProps, lineProps, areaProps, ...others } =
        props;

    const onClick = (ev) => {        
        if (isEventValid(ev)) {
            setProps({ clickData: getClickData(ev) });
        }
    };

    const onMouseOver = (ev) => {
        if (isEventValid(ev)) {
            setProps({ hoverData: getClickData(ev) });
        }
    };

    const handleSeriesClick= (ev) => {        
        if (isEventValid(ev)) {
            setProps({ clickSeriesName: ev.tooltipPayload?.[0]?.name ?? ev.name })
        }
    };

    const handleSeriesHover = (ev) => {
        
        if (isEventValid(ev)) {
            const hoveredSeriesName = ev.tooltipPayload?.[0]?.name ?? ev.name;          
            setProps({ hoverSeriesName: hoveredSeriesName });
        } 
    }; 

    const propsFunction = (item: any, chartType: "bar" | "area" | "line") => {      
        let chartProps : object;
        
        if (chartType === "bar") {
            chartProps = barProps;
        } else if (chartType === "area") {
            chartProps = areaProps;
        } else if (chartType === "line") {
            chartProps = lineProps;
        }

        const returnProps: any = {
            ...chartProps,  
            onClick: handleSeriesClick,
            onMouseOver: handleSeriesHover,           
        };

        return returnProps;
    };  

   

    const newProps = { ...composedChartProps, onClick, onMouseOver};

    return (
        <MantineCompositeChart
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }          
            composedChartProps={newProps}  
            barProps={(item) => propsFunction(item, 'bar')}   // Pass the chart type as 'bar'
            lineProps={(item) => propsFunction(item, 'line')}  // Pass the chart type as 'line'
            areaProps={(item) => propsFunction(item, 'area')}  // Pass the chart type as 'area'            
            {...others}
        />
    );
};

CompositeChart.defaultProps = {
    withPointLabels: false,
};

CompositeChart.defaultProps = {
    withBarValueLabel: false,
};

export default CompositeChart;