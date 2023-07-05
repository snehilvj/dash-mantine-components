import { DateValue, DateInput as MantineDateInput } from "@mantine/dates";
import { useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { DateInputProps, DateInputSharedProps } from "props/dates";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React, { useState } from "react";
import { dayjsToString, isDisabled, stringToDayjs } from "../../utils/dates";

type Props = {
    /** Specifies days that should be disabled */
    disabledDates?: string[];
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
        value,
        minDate,
        maxDate,
        disabledDates,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    const [date, setDate] = useState(stringToDayjs(value));

    useDidUpdate(() => {
        setProps({ value: dayjsToString(date) });
    }, [date]);

    useDidUpdate(() => {
        setDate(stringToDayjs(value));
    }, [value]);

    const isExcluded = (date: Date) => {
        return isDisabled(date, disabledDates || []);
    };

    return (
        <MantineDateInput
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
};

export default DateInput;
