
import {
    Schedule as MantineSchedule,
    ScheduleEventData,
} from '@mantine/schedule';
import { DashBaseProps } from 'props/dash';
import React from 'react';

export interface Props extends DashBaseProps {
    /** Meetings to display in the calendar */
    events?: ScheduleEventData[];
    /** Date to display */
    date?: string;
    /** Calendar view */
    view?: 'day' | 'week' | 'month' | 'year';
    /** Data for the event most recently clicked */
    eventClickData?: any;
    /** CSS styles for the calendar */
    style?: React.CSSProperties;
    /** Props passed to the day view */
    dayViewProps?: any;
    /** Props passed to the week view */
    weekViewProps?: any;
    /** Props passed to the month view */
    monthViewProps?: any;
    /** Props passed to the year view */
    yearViewProps?: any;
    /** Whether to display the agenda button */
    withAgenda?: boolean;
}

const Schedule = ({
    setProps,
    events = [],
    date,
    view,
    style,
    withAgenda = false,
    dayViewProps,
    weekViewProps,
    monthViewProps,
    yearViewProps,
    ...others
}: Props) => {
    return (
        <MantineSchedule
            {...others}
            style={style}
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
