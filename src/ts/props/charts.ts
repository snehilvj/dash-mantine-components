import { ChartData } from "@mantine/charts";
import { MantineColor } from "@mantine/core";

export interface GridChartBaseProps {
    /** Data used to display chart */
    data: ChartData;
    /** Key of the `data` object for x-axis values */
    dataKey: string;
    /** Reference lines that should be displayed on the chart */
    referenceLines?: object[];
    /** Determines whether x-axis should be hidden, `true` by default */
    withXAxis?: boolean;
    /** Determines whether y-axis should be hidden, `true` by default */
    withYAxis?: boolean;
    /** Props passed down to the `XAxis` recharts component */
    xAxisProps?: object;
    /** Props passed down to the `YAxis` recharts component */
    yAxisProps?: object;
    /** Props passed down to the `CartesianGrid` component */
    gridProps?: object;
    /** Specifies which axis should have tick line, `'y'` by default */
    tickLine?: "x" | "y" | "xy" | "none";
    /** Dash array for the grid lines and cursor, `'5 5'` by default */
    strokeDasharray?: string | number;
    /** Specifies which lines should be displayed in the grid, `'x'` by default */
    gridAxis?: "x" | "y" | "xy" | "none";
    /** Unit displayed next to each tick in y-axis */
    unit?: string;
    /** Tooltip position animation duration in ms, `0` by default */
    tooltipAnimationDuration?: number;
    /** Props passed down to the `Legend` component */
    legendProps?: object;
    /** Props passed down to the `Tooltip` component */
    tooltipProps?: object;
    /** Determines whether chart legend should be displayed, `false` by default */
    withLegend?: boolean;
    /** Determines whether chart tooltip should be displayed, `true` by default */
    withTooltip?: boolean;
    /** Color of the text displayed inside the chart, `'dimmed'` by default */
    textColor?: MantineColor;
    /** Color of the grid and cursor lines, by default depends on color scheme */
    gridColor?: MantineColor;
    /** Chart orientation, `'horizontal'` by default */
    orientation?: "horizontal" | "vertical";
    /** A label to display below the x-axis */
    xAxisLabel?: string;
    /** A label to display next to the y-axis */
    yAxisLabel?: string;
    /** Determines whether additional y-axis should be displayed on the right side of the chart, false by default*/
    withRightYAxis?: boolean;
    /** Props passed down to the YAxis recharts component rendered on the right side */
    rightYAxisProps?: any;
    /** Props passed down to the YAxis recharts component rendered on the right side */
    rightYAxisLabel?: any;
    /** A function to format values on Y axis and inside the tooltip. See https://www.dash-mantine-components.com/functions-as-props */
    valueFormatter?: any;
}
