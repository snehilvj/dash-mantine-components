import { DateInput as MantineDateInput } from "@mantine/dates";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { DateInputProps, DateInputSharedProps } from "props/dates";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React, { useState } from "react";
import { dayjsToString, isDisabled, stringToDayjs } from "../../utils/dates";

type Props = {
    /** Specifies days that should be disabled */
    disabledDates?: string[];
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** Debounce time in ms */
    debounce?: number;
} & DateInputProps &
    DateInputSharedProps &
    DashBaseProps &
    MantineStylesAPIProps &
    PersistenceProps &
    MantineStyleSystemProps;

/** Date, multiple dates and dates range picker input. */
const DateInput = (props: Props) => {
    const {
        setProps,
        n_submit,
        value,
        debounce,
        minDate,
        maxDate,
        disabledDates,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    const [date, setDate] = useState(stringToDayjs(value));
    const [debounced] = useDebouncedValue(date, debounce);

    useDidUpdate(() => {
        setProps({ value: dayjsToString(date) });
    }, [debounced]);

    useDidUpdate(() => {
        setDate(stringToDayjs(value));
    }, [value]);

    const handleKeyDown = (ev) => {
        if (ev.key === "Enter") {
            setProps({ n_submit: n_submit + 1 });
        }
    };

    const isExcluded = (date: Date) => {
        return isDisabled(date, disabledDates || []);
    };

    return (
        <MantineDateInput
            wrapperProps={{ autoComplete: "off" }}
            onKeyDown={handleKeyDown}
            onChange={setDate}
            value={date}
            minDate={stringToDayjs(minDate)}
            maxDate={stringToDayjs(maxDate)}
            excludeDate={isExcluded}
            {...other}
        />
    );
};

DateInput.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
    debounce: 0,
    n_submit: 0,
};

export default DateInput;
