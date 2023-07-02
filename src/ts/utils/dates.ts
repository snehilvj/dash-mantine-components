import dayjs from "dayjs";
import { map } from "ramda";
import { DateValueType } from "../props/dates";
import { DateValue } from "@mantine/dates";
import { useState } from "react";

// convert to dayjs Date
export const stringToDayjs = (d: string | null): DateValue => {
    return d && dayjs(d).toDate();
};

// convert to date string for dash
export const dayjsToString = (d: DateValue) => {
    return d ? dayjs(d).format("YYYY-MM-DD") : undefined;
};

// is the date in the list of disabled dates
export const isDisabled = (date: Date, disabledDates: string[]) => {
    return disabledDates.includes(dayjsToString(date));
};

// date string(s) to DateValueType
export const toDates = (value: string | string[] | null): DateValueType => {
    if (Array.isArray(value)) {
        return map(stringToDayjs, value);
    } else {
        return stringToDayjs(value);
    }
};

// DateValueType to date string(s)
export const toStrings = (value: DateValueType) => {
    if (Array.isArray(value)) {
        return map(dayjsToString, value);
    } else {
        return dayjsToString(value);
    }
};
