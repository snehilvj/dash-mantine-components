// checks for a date against a list of dates
export const isDateInList = (value: Date, array: Date[]) => {
    return !!array.find((item) => {
        return item.getTime() === value.getTime();
    });
};
