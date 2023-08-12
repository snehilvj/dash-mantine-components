import { MultiSelect as MantineMultiSelect } from "@mantine/core";
import { SelectItem } from "@mantine/core/lib/Select/";
import { useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    InputComponentProps,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
    SelectSharedProps,
} from "props/mantine";
import React, { useState } from "react";

export type Props = {
    /** Controlled input value */
    value?: string[];
    /** suggestion data */
    data: (string | SelectItem)[];
    /** Maximum dropdown height */
    maxDropdownHeight?: number | string;
    /** Enable items searching */
    searchable?: boolean;
    /** Clear search value when item is selected */
    clearSearchOnChange?: boolean;
    /** Allow to clear item */
    clearable?: boolean;
    /** Disable removing selected items from the list */
    disableSelectedItemFiltering?: boolean;
    /** Clear search field value on blur */
    clearSearchOnBlur?: boolean;
    /** Controlled search input value */
    searchValue?: string;
    /** Hovers the first result when search query changes */
    hoverOnSearchChange?: boolean;
    /** Allow creatable option  */
    creatable?: boolean;
    /** Change dropdown component, can be used to add custom scrollbars */
    dropdownComponent?: any;
    /** Limit amount of items selected */
    maxSelectedValues?: number;
    /** Select highlighted item on blur */
    selectOnBlur?: boolean;
    /** Props added to clear button */
    clearButtonProps?: object;
} & DashBaseProps &
    PersistenceProps &
    InputComponentProps &
    SelectSharedProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Custom searchable multi select */
const MultiSelect = (props: Props) => {
    const { setProps, data, searchValue, value, ...other } = props;

    const [selected, setSelected] = useState(value);
    const [options, setOptions] = useState(data);
    const [searchVal, setSearchVal] = useState(searchValue);

    useDidUpdate(() => {
        setOptions(data);
    }, [data]);

    useDidUpdate(() => {
        setProps({ data: options });
    }, [options]);

    useDidUpdate(() => {
        setProps({ value: selected });
    }, [selected]);

    useDidUpdate(() => {
        setSelected(value);
    }, [value]);

    useDidUpdate(() => {
        setProps({ searchValue: searchVal });
    }, [searchVal]);

    return (
        <MantineMultiSelect
            wrapperProps={{ autoComplete: "off" }}
            data={options}
            getCreateLabel={(query) => `+ Create ${query}`}
            onChange={setSelected}
            value={selected}
            searchValue={searchVal}
            onSearchChange={setSearchVal}
            onCreate={(query) => {
                const item = { value: query, label: query };
                setOptions((current) => [...current, item]);
                return item;
            }}
            {...other}
        />
    );
};

MultiSelect.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
    data: [],
};

export default MultiSelect;
