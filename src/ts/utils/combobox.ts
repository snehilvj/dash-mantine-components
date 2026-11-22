export const filterSelected = (options, values) => {
    if (
        !options ||
        options.length === 0 ||
        values === null ||
        values === undefined
    ) {
        return null;
    }

    const extractValues = (optionList) => {
        let extractedValues = [];

        for (const option of optionList) {
            if (typeof option === 'string') {
                extractedValues.push(option);
            } else if ('value' in option && 'label' in option) {
                extractedValues.push(option.value);
            } else if ('group' in option && 'items' in option) {
                extractedValues = extractedValues.concat(
                    extractValues(option.items)
                );
            }
        }

        return extractedValues;
    };

    // Extract all valid option values
    const optionValues = extractValues(options);

    if (Array.isArray(values)) {
        // Return filtered array if values is an array (for MultiSelect and TagsInput)
        return values.filter((value) => optionValues.includes(value));
    } else {
        // Return a single value if values is not an array (for Select)
        return optionValues.includes(values) ? values : null;
    }
};

const collectTreeValues = (nodes, acc: Set<string> = new Set()) => {
    for (const node of Array.isArray(nodes) ? nodes : []) {
        if (node && typeof node === 'object' && 'value' in node) {
            acc.add(node.value);
            collectTreeValues(node.children, acc);
        }
    }
    return acc;
};

/** Tree-aware version of `filterSelected`: keeps values that match any node, parents included. */
export const filterTreeSelected = (data, values) => {
    if (values === null || values === undefined) {
        return values;
    }
    const treeValues = collectTreeValues(data);
    if (Array.isArray(values)) {
        return values.filter((value) => treeValues.has(value));
    }
    return treeValues.has(values) ? values : null;
};
