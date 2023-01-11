import React, { useState, useEffect } from "react";
import {
    DefaultProps,
    PersistenceProps,
    SelectSharedProps,
} from "../../../props";
import { MultiSelect as MantineMultiSelect } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";

type Props = {
    /** Clear search value when item is selected */
    clearSearchOnChange?: boolean;
    /** Clear search field value on blur */
    clearSearchOnBlur?: boolean;
    /** Limit amount of items selected */
    maxSelectedValues?: number;
    /** Controlled input value */
    value?: string[];
    /** State of the dropdown */
    isOpen?: boolean;
} & SelectSharedProps &
    PersistenceProps &
    DefaultProps;

/**
 * Custom searchable MultiSelect. For more information, see: https://mantine.dev/core/multi-select/
 */
const MultiSelect = (props: Props) => {
    const {
        setProps,
        data,
        persistence,
        persisted_props,
        persistence_type,
        searchValue,
        ...other
    } = props;
    
    const [isOpen, setIsOpen] = useState(null);
    const [options, setOptions] = useState(data);
    const [searchVal, onSearchValChange] = useState(searchValue);
    
    useEffect(() => {
        setIsOpen(() => true);
    }, []);
    
    useDidUpdate(() => {
        setOptions(data);
    }, [data]);

    const onChange = (value: string[]) => {
        setProps({ value });
    };

    const onSearchChange = (value: string) => {
        setProps({ searchValue: value });
        onSearchValChange(value);
    };

    return (
        <MantineMultiSelect
            onChange={onChange}
            onClose={() => {
                setIsOpen(false);
            }}
            isOpen={isOpen}
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => {
                const item = { value: query, label: query };
                setOptions((current) => [...current, item]);
                return item;
            }}
            data={options}
            wrapperProps={{ autoComplete: "off" }}
            searchValue={searchVal}
            onSearchChange={onSearchChange}
            {...other}
        />
    );
};

MultiSelect.defaultProps = {
    data: [],
    persisted_props: ["value"],
    persistence_type: "local",
    isOpen: false
};

export default MultiSelect;
