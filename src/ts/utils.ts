import dayjs from "dayjs";

// checks for a date against a list of dates
export const isDateInList = (value: Date, array: Date[]) => {
    return !!array.find((item) => {
        return item.getTime() === value.getTime();
    });
};

// check if all the elements in the array are string
export const isStringsArray = (arr: any[]) =>
    arr.every((i) => typeof i === "string");

// convert to dayjs Date
export const stringToDayjs = (d: string | null) => {
    return d ? dayjs(d).toDate() : undefined;
};

// convert to date string for dash
export const dayjsToString = (d: Date | null) => {
    return d ? dayjs(d).format("YYYY-MM-DD") : undefined;
};
