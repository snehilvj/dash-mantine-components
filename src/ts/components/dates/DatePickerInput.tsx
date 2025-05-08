import { DatePickerInput as MantineDatePickerInput } from '@mantine/dates';
import { useDebouncedValue, useDidUpdate, useFocusWithin } from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { DateInputSharedProps, DatePickerBaseProps } from 'props/dates';
import { StylesApiProps } from 'props/styles';
import React, { useState } from 'react';
import { isDisabled } from '../../utils/dates';
import { setPersistence, getLoadingState } from "../../utils/dash3";

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
const DatePickerInput = ({
    setProps,
    loading_state,
    n_submit = 0,
    type = 'default',
    value,
    debounce = false,
    minDate,
    maxDate,
    disabledDates,
    popoverProps,
    persistence,
    persisted_props,
    persistence_type,
    ...others
}: Props) => {

    const [date, setDate] = useState(value);

    const debounceValue = typeof debounce === 'number' ? debounce : 0;
    const [debounced] = useDebouncedValue(date, debounceValue);
    const { ref, focused } = useFocusWithin();

    useDidUpdate(() => {
        if (typeof debounce === 'number' || debounce === false) {
            setProps({ value: date });
        }
    }, [debounced]);

    useDidUpdate(() => {
        // Clears value when X is clicked
        if (focused) {
            setProps({ value: date });
        }
    }, [date]);

    useDidUpdate(() => {
        // If type is multiple or range, sets default value to a list
        setDate(type !== 'default' && !value ? [] : value);
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
            setProps({ value: date });
        }
    };

    const isExcluded = (date: string) => isDisabled(date, disabledDates || []);

    return (
        <div ref={ref}>
            <MantineDatePickerInput
                data-dash-is-loading={getLoadingState(loading_state) || undefined}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                onChange={setDate}
                value={date}
                type={type}
                minDate={minDate}
                maxDate={maxDate}
                excludeDate={isExcluded}
                popoverProps={{returnFocus: true, ...popoverProps}}
                {...others}
            />
        </div>
    );
};

setPersistence(DatePickerInput)

export default DatePickerInput;
