import React, { useState } from "react";
import { DefaultProps, SelectSharedProps } from "../../../props";
import { MultiSelect as MantineMultiSelect } from "@mantine/core";

type Props = {
    /** Clear search value when item is selected */
    clearSearchOnChange?: boolean;
    /** Clear search field value on blur */
    clearSearchOnBlur?: boolean;
    /** Limit amount of items selected */
    maxSelectedValues?: number;
    /** Controlled input value */
    value?: string[];
} & SelectSharedProps &
    DefaultProps;

/**
 * Custom searchable MultiSelect. For more information, see: https://mantine.dev/core/multi-select/
 */
const MultiSelect = (props: Props) => {
    const { setProps, data, ...other } = props;

    const [options, setOptions] = useState(data);

    const onChange = (value: string[]) => {
        setProps({ value });
    };

    return (
        <MantineMultiSelect
            onChange={onChange}
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => {
                const item = { value: query, label: query };
                setOptions((current) => [...current, item]);
                return item;
            }}
            data={options}
            {...other}
        />
    );
};

MultiSelect.defaultProps = {
    data: [],
};

export default MultiSelect;
