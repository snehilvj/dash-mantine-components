import { DateValue } from "@mantine/dates";
import dayjs from "dayjs";
import { map } from "ramda";

// convert to dayjs Date
export const stringToDate = (d: string | null): DateValue => {
    return d && dayjs(d).toDate();
};

// convert to date string for dash
export const dateToString = (d: DateValue) => {
    return d ? dayjs(d).format("YYYY-MM-DD") : null;
};

// convert to datetime string for dash
export const datetimeToString = (d: DateValue) => {
    return d ? dayjs(d).format("YYYY-MM-DD hh:mm:ss") : null;
};

// is the date in the list of disabled dates
export const isDisabled = (date: Date, disabledDates: string[]) => {
    return disabledDates.includes(dateToString(date));
};

// date string(s) to date
export const toDates = (value: string | string[] | null) => {
    if (Array.isArray(value)) {
        return map(stringToDate, value);
    } else {
        return stringToDate(value);
    }
};

// date to date string(s)
export const toStrings = (value: Date | Date[]) => {
    if (Array.isArray(value)) {
        return map(dateToString, value);
    } else {
        return dateToString(value);
    }
};
