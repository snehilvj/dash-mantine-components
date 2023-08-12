import { Select as MantineSelect } from "@mantine/core";
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
    value?: string;
    /** suggestion data */
    data: (string | SelectItem)[];
    /** Maximum dropdown height */
    maxDropdownHeight?: number;
    /** Set to true to enable search */
    searchable?: boolean;
    /** Allow to clear item */
    clearable?: boolean;
    /** Controlled search input value */
    searchValue?: string;
    /** Hovers the first result when search query changes */
    hoverOnSearchChange?: boolean;
    /** Allow creatable option  */
    creatable?: boolean;
    /** Change dropdown component, can be used to add native scrollbars */
    dropdownComponent?: any;
    /** Select highlighted item on blur */
    selectOnBlur?: boolean;
    /** Allow deselecting items on click */
    allowDeselect?: boolean;
    /** Should data be filtered when search value exactly matches selected item */
    filterDataOnExactSearchMatch?: boolean;
    /** Props added to clear button */
    clearButtonProps?: object;
} & DashBaseProps &
    PersistenceProps &
    InputComponentProps &
    SelectSharedProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Custom searchable select */
const Select = (props: Props) => {
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
        <MantineSelect
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

Select.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
    data: [],
};

export default Select;
