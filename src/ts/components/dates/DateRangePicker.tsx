import { DefaultProps, DatePickerSharedProps } from "../../props";
import {
    DateRangePicker as MantineDateRangePicker,
    DateRangePickerValue,
} from "@mantine/dates";
import { isDateInList, stringToDayjs, dayjsToString } from "../../utils";
import { useDidUpdate } from "@mantine/hooks";
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";

type Props = {
    /** Selected date, required with controlled input */
    value?: any;
    /** Allow one date to be selected as range */
    allowSingleDateInRange?: boolean;
    /** Separator between dates */
    labelSeparator?: string;
} & DefaultProps &
    DatePickerSharedProps;

/**
 * Capture date input from user. For more information, see: https://mantine.dev/dates/date-picker/
 */
const DateRangePicker = (props: Props) => {
    const {
        setProps,
        value,
        minDate,
        maxDate,
        initialMonth,
        locale,
        disabledDates,
        ...other
    } = props;

    const convertToDateArray = (
        val: [string, string]
    ): DateRangePickerValue => {
        const [start, end] = val;
        return [stringToDayjs(start), stringToDayjs(end)];
    };

    const [dates, setDates] = useState<DateRangePickerValue>(
        value && convertToDateArray(value)
    );
    const excludedDates = [];

    const onChange = (d: DateRangePickerValue) => {
        const [start, end] = d;
        if (start && end) {
            setProps({ value: [dayjsToString(start), dayjsToString(end)] });
        } else if (start || end) {
            setDates([start, end]);
        } else {
            setProps({ value: null });
        }
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
    }, [disabledDates]);

    useDidUpdate(() => {
        setDates(value ? convertToDateArray(value) : [null, null]);
    }, [value]);

    const isExcluded = (date: Date) => isDateInList(date, excludedDates);

    const cleanUp = () => {
        setDates(value ? convertToDateArray(value) : [null, null]);
    };

    return (
        <MantineDateRangePicker
            onChange={onChange}
            onDropdownClose={cleanUp}
            locale={locale}
            value={dates}
            minDate={stringToDayjs(minDate)}
            maxDate={stringToDayjs(maxDate)}
            initialMonth={stringToDayjs(initialMonth)}
            excludeDate={isExcluded}
            {...other}
        />
    );
};

DateRangePicker.defaultProps = {};

export default DateRangePicker;
