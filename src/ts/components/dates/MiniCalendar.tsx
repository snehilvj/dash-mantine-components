import { MantineSize } from '@mantine/core';
import { MiniCalendar as MantineMiniCalendar } from '@mantine/dates';
import { useDidUpdate } from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { useState } from 'react';
import { setPersistence } from '../../utils/dash3';
import { resolveProp, parseFuncProps } from '../../utils/prop-functions';

interface Props
    extends DashBaseProps,
        PersistenceProps,
        BoxProps,
        StylesApiProps {
    /** Controlled component date value, start date of the interval */
    date?: string;

    /** Uncontrolled component default value, start date of the interval */
    defaultDate?: string;

    /** Selected date, controlled value */
    value?: string | null;

    /** Maximum date that can be selected, date object or date string in `YYYY-MM-DD` format */
    maxDate?: string;

    /** Minimum date that can be selected, date object or date string in `YYYY-MM-DD` format */
    minDate?: string;

    /** Number of days to display in the calendar default 7 */
    numberOfDays?: number;

    /** Dayjs format string for month label default `MMM` */
    monthLabelFormat?: string;

    /** A function that passes props down Day component  based on date. (See https://www.dash-mantine-components.com/functions-as-props) */
    getDayProps?: any;

    /** Component size default 'sm' */
    size?: MantineSize;

    /** dayjs locale used for formatting */
    locale?: string;
}

/** Compact calendar to display a small number of days in a row */
const MiniCalendar = ({
    setProps,
    value,
    persistence,
    persisted_props,
    persistence_type,
    ...others
}: Props) => {
    const [date, setDate] = useState(value);

    useDidUpdate(() => {
        setDate(value);
    }, [value]);

    useDidUpdate(() => {
        setProps({ value: date });
    }, [date]);

    return (
        <MantineMiniCalendar
            onChange={setDate}
            value={date}
            //  {...others}
            {...parseFuncProps('MiniCalendar', others)}
        />
    );
};

setPersistence(MiniCalendar);

export default MiniCalendar;
