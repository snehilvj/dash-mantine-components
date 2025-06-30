import { DatePicker as MantineDatePicker } from '@mantine/dates';
import { useDidUpdate } from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { DatePickerBaseProps } from 'props/dates';
import { StylesApiProps } from 'props/styles';
import React, { useState } from 'react';
import { setPersistence } from '../../utils/dash3';
import { resolveProp, parseFuncProps } from '../../utils/prop-functions';
import { isDisabled } from '../../utils/dates';

interface Props
    extends DashBaseProps,
        PersistenceProps,
        BoxProps,
        DatePickerBaseProps,
        StylesApiProps {
    /** Specifies days that should be disabled */
    disabledDates?: string[];
}

/** Inline date, multiple dates and dates range picker */
const DatePicker = ({
    setProps,
    value,
    type,
    disabledDates,
    persistence,
    persisted_props,
    persistence_type,
    ...others
}: Props) => {
    const normalize = (val: any) => {
        if (type === 'multiple' || type === 'range')
            return Array.isArray(val) ? val : [];
        return val ?? null;
    };

    const [date, setDate] = useState(() => normalize(value));

    useDidUpdate(() => {
        setDate(normalize(value));
    }, [value]);

    useDidUpdate(() => {
        setProps({ value: date });
    }, [date]);

    const isExcluded = (date: string) => isDisabled(date, disabledDates || []);

    return (
        <MantineDatePicker
            onChange={setDate}
            value={date}
            type={type}
            excludeDate={
                Array.isArray(disabledDates)
                    ? isExcluded
                    : resolveProp(disabledDates)
            }
            {...parseFuncProps('DatePicker', others)}
        />
    );
};

setPersistence(DatePicker);

export default DatePicker;
