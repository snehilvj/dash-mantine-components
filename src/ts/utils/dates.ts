
// is the date in the list of disabled dates
export const isDisabled = (date: string, disabledDates: string[]) => {
    return disabledDates.includes(date);
};
