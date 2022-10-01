import React, { useState } from "react";
import { DefaultProps, SelectSharedProps } from "../../../props";
import { Select as MantineSelect } from "@mantine/core";

type Props = {
    /** Allow deselecting items on click */
    allowDeselect?: boolean;
    /** Should data be filtered when search value exactly matches selected item */
    filterDataOnExactSearchMatch?: boolean;
    /** Controlled input value */
    value?: string;
} & SelectSharedProps &
    DefaultProps;

/**
 * Custom searchable select. For more information, see: https://mantine.dev/core/select/
 */
const Select = (props: Props) => {
    const { setProps, data, ...other } = props;

    const [options, setOptions] = useState(data);

    const onChange = (value: string) => {
        setProps({ value });
    };

    return (
        <MantineSelect
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

Select.defaultProps = {
    data: [],
};

export default Select;
