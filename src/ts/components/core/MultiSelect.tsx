import React from "react";
import { DefaultProps, SelectSharedProps } from "../../props";
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
