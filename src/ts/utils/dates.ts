import { DateValue } from "@mantine/dates";
import dayjs from "dayjs";
import { map } from "ramda";

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

// date string(s) to DateValue
export const toDates = (
    value: string | string[] | null
): DateValue | DateValue[] => {
    if (Array.isArray(value)) {
        return map(stringToDayjs, value);
    } else {
        return stringToDayjs(value);
    }
};

// DateValue to date string(s)
export const toStrings = (
    value: DateValue | DateValue[]
): string | string[] | null => {
    if (Array.isArray(value)) {
        return map(dayjsToString, value);
    } else {
        return dayjsToString(value);
    }
};
