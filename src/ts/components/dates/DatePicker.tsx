import { DatePicker as MantineDatePicker } from "@mantine/dates";
import { useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { DatePickerBaseProps } from "props/dates";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React, { useState } from "react";
import {
    isDisabled,
    stringToDayjs,
    toDates,
    toStrings,
} from "../../utils/dates";

type Props = {} & DashBaseProps &
    PersistenceProps &
    DatePickerBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Inline date, multiple dates and dates range picker. */
const DatePicker = (props: Props) => {
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

    const [date, setDate] = useState(toDates(value));

    const onChange = (value: Date) => {
        setProps({ value: toStrings(value) });
    };

    useDidUpdate(() => {
        setDate(toDates(value));
    }, [value]);

    const isExcluded = (date: Date) => {
        return isDisabled(date, disabledDates || []);
    };

    return (
        <MantineDatePicker
            onChange={onChange}
            value={date}
            minDate={stringToDayjs(minDate)}
            maxDate={stringToDayjs(maxDate)}
            excludeDate={isExcluded}
            {...other}
        />
    );
};

DatePicker.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default DatePicker;
