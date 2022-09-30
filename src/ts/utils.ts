// checks for a date against a list of dates
export const isDateInList = (value: Date, array: Date[]) => {
    return !!array.find((item) => {
        return item.getTime() === value.getTime();
    });
};

// check if all the elements in the array are string
export const isStringsArray = (arr: any[]) =>
    arr.every((i) => typeof i === "string");
