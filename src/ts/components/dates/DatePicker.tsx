import {
    DefaultProps,
    PersistenceProps,
    DatePickerSharedProps,
} from "../../props";
import { DatePicker as MantineDatePicker } from "@mantine/dates";
import { isDateInList, stringToDayjs, dayjsToString } from "../../utils";
import { useDidUpdate } from "@mantine/hooks";
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";

type Props = {
    /** Selected date, required with controlled input */
    value?: string;
    /** Allow free input */
    allowFreeInput?: boolean;
} & DefaultProps &
    PersistenceProps &
    DatePickerSharedProps;

/**
 * Capture date input from user. For more information, see: https://mantine.dev/dates/date-picker/
 */
const DatePicker = (props: Props) => {
    const {
        setProps,
        value,
        minDate,
        maxDate,
        initialMonth,
        locale,
        disabledDates,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    const [date, setDate] = useState(stringToDayjs(value));
    const excludedDates = [];

    const onChange = (value: Date) => {
        setProps({ value: dayjsToString(value) });
    };

    // add locale support
    useEffect(() => {
        if ("dayjs" in window) {
            dayjs.Ls[locale] = window["dayjs"].Ls[locale];
        }
    }, []);

    // add disabled dates support
    useEffect(() => {
        if (disabledDates) {
            for (let date of disabledDates) {
                excludedDates.push(stringToDayjs(date));
            }
        }
    }, []);

    useDidUpdate(() => {
        setDate(stringToDayjs(value));
    }, [value]);

    const isExcluded = (date: Date) => isDateInList(date, excludedDates);

    return (
        <MantineDatePicker
            onChange={onChange}
            locale={locale}
            value={date}
            minDate={stringToDayjs(minDate)}
            maxDate={stringToDayjs(maxDate)}
            initialMonth={stringToDayjs(initialMonth)}
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
