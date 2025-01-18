import { DatePickerInput as MantineDatePickerInput } from '@mantine/dates';
import { useDebouncedValue, useDidUpdate, useFocusWithin } from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { DateInputSharedProps, DatePickerBaseProps } from 'props/dates';
import { StylesApiProps } from 'props/styles';
import React, { useState } from 'react';
import {
    isDisabled,
    stringToDate,
    toDates,
    toStrings,
} from '../../utils/dates';

interface Props extends DashBaseProps, PersistenceProps, BoxProps, DateInputSharedProps, DatePickerBaseProps, StylesApiProps {
    /** Dayjs format to display input value, "MMMM D, YYYY" by default */
    valueFormat?: string;
    /** Specifies days that should be disabled */
    disabledDates?: string[];
    /** Determines whether today should be highlighted with a border, false by default */
    highlightToday?: boolean;
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /**
     * (boolean | number; default False): If True, changes to input will be sent back to the Dash server only on enter or when losing focus.
     * If it's False, it will send the value back on every change. If a number, it will not send anything back to the Dash server until
     * the user has stopped typing for that number of milliseconds.
     */
    debounce?: boolean | number;
}

/** DatePickerInput */
const DatePickerInput = (props: Props) => {
    const {
        setProps,
        n_submit = 0,
        type = 'default',
        value,
        debounce = false,
        minDate,
        maxDate,
        disabledDates,
        persistence,
        persisted_props = ['value'],
        persistence_type = 'local',
        ...others
    } = props;

    const [date, setDate] = useState(toDates(value));

    const debounceValue = typeof debounce === 'number' ? debounce : 0;
    const [debounced] = useDebouncedValue(date, debounceValue);
    const { ref, focused } = useFocusWithin();

    useDidUpdate(() => {
        if (typeof debounce === 'number' || debounce === false) {
            setProps({ value: toStrings(date) });
        }
    }, [debounced]);

    useDidUpdate(() => {
        // Clears value when X is clicked
        if (focused) {
            setProps({ value: toStrings(date) });
        }
    }, [date]);

    useDidUpdate(() => {
        // If type is multiple or range, sets default value to a list
        setDate(type !== 'default' && !value ? [] : toDates(value));
    }, [value]);

    const handleKeyDown = (ev: React.KeyboardEvent) => {
        // Enter key opens calendar, so don't call setProps
        if (ev.key === 'Enter') {
            setProps({ n_submit: n_submit + 1 });
        }
    };

    const handleBlur = () => {
        // Don't include n_blur counter because onBlur is called when the calendar is opened
        if (debounce === true) {
            setProps({ value: toStrings(date) });
        }
    };

    const isExcluded = (date: Date) => isDisabled(date, disabledDates || []);

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <div ref={ref}>
            <MantineDatePickerInput
                data-dash-is-loading={loading || undefined}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                onChange={setDate}
                value={date}
                type={type}
                minDate={stringToDate(minDate)}
                maxDate={stringToDate(maxDate)}
                excludeDate={isExcluded}
                {...others}
            />
        </div>
    );
};

export default DatePickerInput;
