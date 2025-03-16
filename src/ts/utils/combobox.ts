export const filterSelected = (options, values) => {
    if (!options || options.length === 0 || values === null || values === undefined) {
        return  null;
    }

    const extractValues = (optionList) => {
        let extractedValues = [];

        for (const option of optionList) {
            if (typeof option === "string") {
                extractedValues.push(option);
            } else if ('value' in option && 'label' in option) {
                extractedValues.push(option.value);
            } else if ('group' in option && 'items' in option) {
                extractedValues = extractedValues.concat(extractValues(option.items));
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

// Generic function to convert a string filter to a function
export const stringToFunction = (code: string) => {
    try {
      return new Function('params', `
        try {
          const { options, search } = params;
          if (!search || !options) return options;
          
          return options.filter(item => {
            ${code}
          });
        } catch (error) {
          console.error('Error executing filter function:', error);
          return params.options;
        }
      `);
    } catch (error) {
      console.error('Error creating filter function:', error);
      return ({ options }) => options;
    }
};