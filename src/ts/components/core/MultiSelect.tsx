import React from "react";
import { DefaultProps, SelectSharedProps } from "../../props";
import { MultiSelect as MantineMultiSelect } from "@mantine/core";

type Props = {
    /** Maximum dropdown height in px */
    maxDropdownHeight?: number;
    /** Enable items searching */
    searchable?: boolean;
    /** Clear search value when item is selected */
    clearSearchOnChange?: boolean;
    /** Allow to clear item */
    clearable?: boolean;
    /** Clear search field value on blur */
    clearSearchOnBlur?: boolean;
    /** Allow creatable option  */
    creatable?: boolean;
    /** Limit amount of items selected */
    maxSelectedValues?: number;
    /** Select highlighted item on blur */
    selectOnBlur?: boolean;
    /** Set the clear button tab index to disabled or default after input field */
    clearButtonTabIndex?: -1 | 0;
    /** Controlled input value */
    value?: string[];
} & SelectSharedProps &
    DefaultProps;

/**
 * Custom searchable MultiSelect. For more information, see: https://mantine.dev/core/multi-select/
 */
const MultiSelect = (props: Props) => {
    const { setProps, ...other } = props;

    const onChange = (value: string[]) => {
        setProps({ value });
    };

    return <MantineMultiSelect onChange={onChange} {...other} />;
};

MultiSelect.defaultProps = {
    data: [],
};

export default MultiSelect;
