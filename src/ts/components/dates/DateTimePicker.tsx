import { DateTimePicker as MantineDateTimePicker } from "@mantine/dates";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { ActionIconProps } from "props/actionicon";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    CalendarBaseProps,
    CalendarSettings,
    DateInputSharedProps,
    TimeInputProps,
} from "props/dates";
import { StylesApiProps } from "props/styles";
import React, { useState } from "react";
import { datetimeToString, isDisabled, stringToDate } from "../../utils/dates";
import { setPersistence, getLoadingState } from "../../utils/dash3";
import { resolveProp } from "../../utils/prop-functions"

interface Props
    extends DashBaseProps,
        PersistenceProps,
        BoxProps,
        Omit<
            DateInputSharedProps,
            "classNames" | "styles" | "closeOnChange" | "size"
        >,
        CalendarBaseProps,
        CalendarSettings,
        StylesApiProps {
    /** Dayjs format to display input value, "DD/MM/YYYY HH:mm" by default  */
    valueFormat?: string;
    /** Controlled component value */
    value?: string;
    /** TimeInput component props */
    timeInputProps?: TimeInputProps;
    /** Props passed down to the submit button */
    submitButtonProps?: Omit<ActionIconProps, "n_click"> & any;
    /** Determines whether seconds input should be rendered */
    withSeconds?: boolean;
    /** Specifies days that should be disabled.  Either a list of dates or a function. See https://www.dash-mantine-components.com/functions-as-props */
    disabledDates?: any;
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** Debounce time in ms */
    debounce?: number;
    /** Determines whether today should be highlighted with a border, false by default */
    highlightToday?: boolean;
}

/** DateTimePicker */
const DateTimePicker = ({
    setProps,
    loading_state,
    value,
    debounce = 0,
    n_submit = 0,
    minDate,
    maxDate,
    disabledDates,
    persistence,
    persisted_props,
    persistence_type,
    ...others
}: Props) => {

    const [date, setDate] = useState(stringToDate(value));
    const [debounced] = useDebouncedValue(date, debounce);

    useDidUpdate(() => {
        setProps({ value: datetimeToString(date) });
    }, [debounced]);

    useDidUpdate(() => {
        setDate(stringToDate(value));
    }, [value]);

    const isExcluded = (date: Date) => {
        return isDisabled(date, disabledDates || []);
    };

    const handleKeyDown = (ev) => {
        if (ev.key === "Enter") {
            setProps({ n_submit: n_submit + 1 });
        }
    };

    return (
        <MantineDateTimePicker
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            onChange={setDate}
            value={date}
            onKeyDown={handleKeyDown}
            minDate={stringToDate(minDate)}
            maxDate={stringToDate(maxDate)}
            excludeDate={Array.isArray(disabledDates)? isExcluded : resolveProp(disabledDates)}
            {...others}
        />
    );
};

setPersistence(DateTimePicker)

export default DateTimePicker;
