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
    /** Specifies days that should be disabled */
    disabledDates?: string[];
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** Debounce time in ms */
    debounce?: number;
}

/** DateTimePicker */
const DateTimePicker = (props: Props) => {
    const {
        setProps,
        loading_state,
        value,
        debounce,
        n_submit,
        minDate,
        maxDate,
        disabledDates,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

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
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            onChange={setDate}
            value={date}
            onKeyDown={handleKeyDown}
            minDate={stringToDate(minDate)}
            maxDate={stringToDate(maxDate)}
            excludeDate={isExcluded}
            {...others}
        />
    );
};

DateTimePicker.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
    debounce: 0,
    n_submit: 0,
};

export default DateTimePicker;
