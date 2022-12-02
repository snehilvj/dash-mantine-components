import React, { useState } from "react";
import {
    DefaultProps,
    PersistenceProps,
    SelectSharedProps,
} from "../../../props";
import { Select as MantineSelect } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";

type Props = {
    /** Allow deselecting items on click */
    allowDeselect?: boolean;
    /** Should data be filtered when search value exactly matches selected item */
    filterDataOnExactSearchMatch?: boolean;
    /** Controlled input value */
    value?: string;
} & PersistenceProps &
    SelectSharedProps &
    DefaultProps;

/**
 * Custom searchable select. For more information, see: https://mantine.dev/core/select/
 */
const Select = (props: Props) => {
    const {
        setProps,
        data,
        persistence,
        persisted_props,
        persistence_type,
        searchValue,
        ...other
    } = props;

    const [options, setOptions] = useState(data);
    const [searchVal, onSearchValChange] = useState(searchValue);

    const onChange = (value: string) => {
        setProps({ value });
    };

    const onSearchChange = (value: string) => {
        setProps({ searchValue: value });
        onSearchValChange(value);
    };

    useDidUpdate(() => {
        setOptions(data);
    }, [data]);

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
            searchValue={searchVal}
            onSearchChange={onSearchChange}
            wrapperProps={{ autoComplete: "off" }}
            {...other}
        />
    );
};

Select.defaultProps = {
    data: [],
    persisted_props: ["value"],
    persistence_type: "local",
};

export default Select;
