import { DateValue } from "@mantine/dates";
import dayjs from "dayjs";

// convert to dayjs Date
export const stringToDayjs = (d: string | null): DateValue => {
    return d && dayjs(d).toDate();
};

// convert to date string for dash
export const dayjsToString = (d: DateValue) => {
    return d ? dayjs(d).format("YYYY-MM-DD") : null;
};

// is the date in the list of disabled dates
export const isDisabled = (date: Date, disabledDates: string[]) => {
    return disabledDates.includes(dayjsToString(date));
};
