import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { Suspense } from 'react';

// eslint-disable-next-line no-inline-comments
const LazyHeatmap = React.lazy(
    () => import(/* webpackChunkName: "Heatmap" */ './fragments/Heatmap')
);

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
  /** Heatmap data, key is date in `YYYY-MM-DD` format (interpreted as a UTC calendar day) */
  data: { [key: string]: number };

  /** Heatmap domain, array of 2 numbers, min and max values, calculated from data by default */
  domain?: [number, number];

  /** Heatmap start date. Current date - 1 year by default. Date is normalized to UTC midnight of the intended calendar day. */
  startDate?: Date | string;

  /** Heatmap end date. Current date by default. Date is normalized to UTC midnight of the intended calendar day. */
  endDate?: Date | string;

  /** If set, month labels are displayed @default false */
  withMonthLabels?: boolean;

  /** Month labels, array of 12 elements, can be used for localization */
  monthLabels?: string[];

  /** If set, weekday labels are displayed @default false */
  withWeekdayLabels?: boolean;

  /** Weekday labels, array of 7 elements, can be used for localization */
  weekdayLabels?: string[];

  /** If set, trailing dates that do not fall into the given `startDate` – `endDate` range are displayed to fill empty space. @default true */
  withOutsideDates?: boolean;

  /** First day of week, 0 – Sunday, 1 – Monday. @default 1 – Monday */
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;

  /** Size of day rect in px @default 10 */
  rectSize?: number;

  /** Gap between rects in px @default 1 */
  gap?: number;

  /** Rect radius in px @default 2 */
  rectRadius?: number;

  /** Colors array, used to calculate color for each value, by default 4 shades of green colors are used */
  colors?: string[];

  /** Width of weekday labels column @default 30 */
  weekdaysLabelsWidth?: number;

  /** Height of month labels row @default 30 */
  monthsLabelsHeight?: number;

  /** Font size of month and weekday labels @default 12 */
  fontSize?: number;

  /** A function to generate tooltip label based on the hovered rect date and value, required for the tooltip to be visible */
  getTooltipLabel?: any;

  /** If set, tooltip is displayed on rect hover @default false */
  withTooltip?: boolean;

  /** Props passed down to the `Tooltip.Floating` component */
  tooltipProps?: any;

  /** Props passed down to each rect depending on its date and associated value */
  getRectProps?: any;

  /** If set, inserts a spacer column between months @default false */
  splitMonths?: boolean;

  /** If set, legend with color levels is displayed below the heatmap @default false */
  withLegend?: boolean;

  /** Legend labels, array of 2 elements: [min label, max label] @default ['Less', 'More'] */
  legendLabels?: [string, string];

  /** Clicked heatmap cell data containing date and value  */
  clickData?: Record<string, number>;

  /** Hovered heatmap cell data */
  hoverData?: Record<string, number>;
}



/** Heatmap chart component */
const Heatmap = (props: Props) => {
    return (
        <Suspense fallback={null}>
            <LazyHeatmap {...props} />
        </Suspense>
    );
};

export default Heatmap;
