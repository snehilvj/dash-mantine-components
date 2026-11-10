
import {
    Schedule as MantineSchedule,
    ScheduleEventData,
    ScheduleLabelsOverride,
    ScheduleLayout
} from '@mantine/schedule';
import type { DayOfWeek } from '@mantine/dates';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import { BoxProps } from 'props/box';
import React from 'react';

interface DayViewDashProps {
    startTime?: string;
    endTime?: string;
    intervalMinutes?: number;
    withSubHourGridLines?: boolean;
    eventOverlapMode?: 'columns' | 'cascade';
    eventOverlapRaiseDelay?: number;
    withAllDaySlot?: boolean;
    locale?: string;
    radius?: string;
    slotLabelFormat?: string;
    slotLabelInterval?: number;
    headerFormat?: string;
    withCurrentTimeIndicator?: boolean;
    withCurrentTimeBubble?: boolean;
    withHeader?: boolean;
    slotHeight?: string | number;
    allDaySlotHeight?: string | number;
    highlightBusinessHours?: boolean;
    businessHours?: [string, string];
    withEventsDragAndDrop?: boolean;
    eventDragInterval?: number;
    withInteractiveBackgroundEvents?: boolean;
    withDragSlotSelect?: boolean;
    mode?: 'default' | 'static';
    startScrollTime?: string;
    withEventResize?: boolean;
    eventResizeInterval?: number;
    recurrenceExpansionLimit?: number;
    withAgenda?: boolean;
}

interface WeekViewDashProps {
    startTime?: string;
    endTime?: string;
    intervalMinutes?: number;
    withSubHourGridLines?: boolean;
    firstDayOfWeek?: DayOfWeek;
    weekdayFormat?: string;
    weekendDays?: DayOfWeek[];
    withWeekendDays?: boolean;
    eventOverlapMode?: 'columns' | 'cascade';
    eventOverlapRaiseDelay?: number;
    highlightToday?: boolean;
    radius?: string;
    locale?: string;
    withWeekNumber?: boolean;
    withCurrentTimeIndicator?: boolean;
    withCurrentTimeBubble?: boolean;
    forceCurrentTimeIndicator?: boolean;
    withAllDaySlots?: boolean;
    withHeader?: boolean;
    weekLabelFormat?: string;
    slotHeight?: string | number;
    allDaySlotHeight?: string | number;
    highlightBusinessHours?: boolean;
    businessHours?: [string, string];
    withEventsDragAndDrop?: boolean;
    eventDragInterval?: number;
    withInteractiveBackgroundEvents?: boolean;
    withDragSlotSelect?: boolean;
    mode?: 'default' | 'static';
    startScrollTime?: string;
    withEventResize?: boolean;
    eventResizeInterval?: number;
    recurrenceExpansionLimit?: number;
    withAgenda?: boolean;
    eventTimeFormat?: string;
}

interface MonthViewDashProps {
    withWeekNumbers?: boolean;
    withWeekDays?: boolean;
    withWeekendDays?: boolean;
    locale?: string;
    firstDayOfWeek?: DayOfWeek;
    weekdayFormat?: string;
    consistentWeeks?: boolean;
    highlightToday?: boolean;
    radius?: string;
    withOutsideDays?: boolean;
    withHeader?: boolean;
    withEventsDragAndDrop?: boolean;
    withInteractiveBackgroundEvents?: boolean;
    withDragSlotSelect?: boolean;
    mode?: 'default' | 'static';
    recurrenceExpansionLimit?: number;
    maxEventsPerDay?: number;
    withAgenda?: boolean;
    eventTimeFormat?: string;
}

interface YearViewDashProps {
    radius?: string;
    highlightToday?: boolean;
    withHeader?: boolean;
    mode?: 'default' | 'static';
    recurrenceExpansionLimit?: number;
}

interface MobileMonthViewDashProps {
    withWeekNumbers?: boolean;
    withWeekDays?: boolean;
    locale?: string;
    firstDayOfWeek?: DayOfWeek;
    weekdayFormat?: string;
    weekendDays?: DayOfWeek[];
    withWeekendDays?: boolean;
    consistentWeeks?: boolean;
    highlightToday?: boolean;
    radius?: string;
    withOutsideDays?: boolean;
    labels?: ScheduleLabelsOverride;
    mode?: 'default' | 'static';
    eventsHeaderFormat?: string;
    recurrenceExpansionLimit?: number;
    eventTimeFormat?: string;
}

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Meetings to display in the calendar */
    events?: ScheduleEventData[];
    /** Date to display */
    date?: string;
    /** Calendar view */
    view?: 'day' | 'week' | 'month' | 'year';
    /** Data for the event most recently clicked */
    eventClickData?: ScheduleEventData;
    /** Props passed to the day view */
    dayViewProps?: DayViewDashProps;
    /** Props passed to the week view */
    weekViewProps?: WeekViewDashProps;
    /** Props passed to the month view */
    monthViewProps?: MonthViewDashProps;
    /** Props passed to the year view */
    yearViewProps?: YearViewDashProps;
    /** Whether to display the agenda button */
    withAgenda?: boolean;
    /** Locale for date formatting */
    locale?: string;
    /** Labels override for i18n */
    labels?: ScheduleLabelsOverride;
    /** Layout mode */
    layout?: ScheduleLayout;
    /** Props passed to the mobile month view */
    mobileMonthViewProps?: MobileMonthViewDashProps;
    /** Border radius */
    radius?: string | number;
    /** Maximum number of generated recurring instances */
    recurrenceExpansionLimit?: number;
}

const Schedule = ({
    setProps,
    events = [],
    date,
    view,
    withAgenda,
    dayViewProps,
    weekViewProps,
    monthViewProps,
    yearViewProps,
    ...others
}: Props) => {
    return (
        <MantineSchedule
            {...others}
            dayViewProps={dayViewProps}
            weekViewProps={weekViewProps}
            monthViewProps={monthViewProps}
            yearViewProps={yearViewProps}
            events={events}
            date={date}
            view={view}
            withAgenda={withAgenda}
            onDateChange={(date) => setProps({ date })}
            onViewChange={(view) => setProps({ view })}
            onEventClick={(event) => setProps({ eventClickData: event })}
        />
    );
};

export default Schedule;
