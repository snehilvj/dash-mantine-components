import { FunnelChartCell } from '@mantine/charts/lib/FunnelChart/FunnelChart';
import { MantineColor } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { Suspense } from 'react';

// eslint-disable-next-line no-inline-comments
const LazyFunnelChart = React.lazy(
    () => import(/* webpackChunkName: "FunnelChart" */ './fragments/FunnelChart')
);

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Data used to render chart */
  data: FunnelChartCell[];

  /** Determines whether the tooltip should be displayed when a section is hovered Default true */
  withTooltip?: boolean;

  /** Tooltip animation duration in ms Default 0 */
  tooltipAnimationDuration?: number;

  /** Props passed down to `Tooltip` recharts component */
  tooltipProps?: object;

  /** Props passed down to recharts `Funnel` component */
  funnelProps?: object;

  /** Controls color of the segments stroke, by default depends on color scheme */
  strokeColor?: MantineColor;

  /** Controls text color of all labels Default 'white' */
  labelColor?: MantineColor;

  /** Controls chart width and height Default 300 */
  size?: number;

  /** Controls width of segments stroke Default 1 */
  strokeWidth?: number;

  /** Determines whether each segment should have associated label. Default false */
  withLabels?: boolean;

  /** Controls labels position relative to the segment.Default 'right' */
  labelsPosition?: 'right' | 'left' | 'inside';

  /** A function to format values inside the tooltip and labels */
  valueFormatter?: any;

  /** Determines which data is displayed in the tooltip. `'all'` – display all values, `'segment'` – display only hovered segment. Default 'all' */
  tooltipDataSource?: 'segment' | 'all';

  /** Additional elements rendered inside `FunnelChart` component */
  children?: React.ReactNode;

  /** Props passed down to recharts `FunnelChart` component */
  funnelChartProps?: object;

  /** Click data */
  clickData?: Record<string, any>;

   /** Hover data */
   hoverData?: Record<string, any>;

   /** Name of the series that was clicked */
   clickSeriesName?: Record<string, any>;

   /** Name of the series that is hovered*/
   hoverSeriesName?: Record<string, any>;
}

/** FunnelChart */
const FunnelChart = (props: Props) => {
    return (
        <Suspense fallback={null}>
            <LazyFunnelChart {...props} />
        </Suspense>
    );
};

export default FunnelChart;
