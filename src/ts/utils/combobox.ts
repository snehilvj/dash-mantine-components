export const filterSelected = (options, values) => {
    if (!options || !values || options.length === 0 || values.length === 0) return [];

    const extractValues = (optionList) => {
        let extractedValues = [];

        for (const option of optionList) {
            if (typeof option === "string") {
                // Case 1: option is a string
                extractedValues.push(option);
            } else if ('value' in option && 'label' in option) {
                // Case 2: option is an object with label and value
                extractedValues.push(option.value);
            } else if ('group' in option && 'items' in option) {
                // Case 3: option is a group with nested items, recursively extract values
                extractedValues = extractedValues.concat(extractValues(option.items));
            }
        }

        return extractedValues;
    };

    // Extract all valid option values
    const optionValues = extractValues(options);

    // Return filtered values based on extracted option values
    return values.filter((value) => optionValues.includes(value));
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
