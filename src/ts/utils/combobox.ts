export const filterSelected = (options, values) => {
    if (options.length === 0 || values.length === 0) return [];

    if (typeof options[0] === "string") {
        return values.filter((value) => options.includes(value));
    } else if (typeof options[0] === "object") {
        const optionValues = options.map((option) => option.value);
        return values.filter((value) => optionValues.includes(value));
    }

    return [];
};

export const isInOption = (options, value) => {
    if (options.length === 0) return false;

    if (typeof options[0] === "string") {
        return options.includes(value);
    } else if (typeof options[0] === "object") {
        const optionValues = options.map((option) => option.value);
        return optionValues.includes(value);
    }
    return false;
};
