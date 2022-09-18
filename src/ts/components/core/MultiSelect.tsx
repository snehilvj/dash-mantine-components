import React from "react";
import {
    DashComponentProps,
    InputSharedProps,
    InputWrapperBaseProps,
    MantineTransition,
} from "../../props";
import { MultiSelect as MantineMultiSelect } from "@mantine/core";
import { MantineSize } from "@mantine/styles";
import { SelectItem } from "@mantine/core/lib/Select/";

type Props = {
    /** Maximum dropdown height in px */
    maxDropdownHeight?: number;
    /** Enable items searching */
    searchable?: boolean;
    /** Clear search value when item is selected */
    clearSearchOnChange?: boolean;
    /** Allow to clear item */
    clearable?: boolean;
    /** aria-label for clear button */
    clearButtonLabel?: string;
    /** Clear search field value on blur */
    clearSearchOnBlur?: boolean;
    /** Allow creatable option  */
    creatable?: boolean;
    /** Change dropdown component, can be used to add custom scrollbars */
    dropdownComponent?: any;
    /** Limit amount of items selected */
    maxSelectedValues?: number;
    /** Select highlighted item on blur */
    selectOnBlur?: boolean;
    /** Set the clear button tab index to disabled or default after input field */
    clearButtonTabIndex?: -1 | 0;
    /** Select data used to renderer items in dropdown */
    data: (string | SelectItem)[];
    /** Controlled input value */
    value?: string[];
    /** Input size */
    size?: MantineSize;
    /** Dropdown body appear/disappear transition */
    transition?: MantineTransition;
    /** Dropdown body transition duration */
    transitionDuration?: number;
    /** Dropdown body transition timing function, defaults to theme.transitionTimingFunction */
    transitionTimingFunction?: string;
    /** Dropdown shadow from theme or any value to set box-shadow */
    shadow?: MantineSize;
    /** Initial dropdown opened state */
    initiallyOpened?: boolean;
    /** Change item renderer */
    itemComponent?: React.FC<any>;
    /** Whether to render the dropdown in a Portal */
    withinPortal?: boolean;
    /** Limit amount of items displayed at a time for searchable select */
    limit?: number;
    /** Nothing found label */
    nothingFound?: React.ReactNode;
    /** Dropdown z-index */
    zIndex?: number;
    /** Dropdown positioning behavior */
    dropdownPosition?: "bottom" | "top" | "flip";
    /** Whether to switch item order and keyboard navigation on dropdown position flip */
    switchDirectionOnFlip?: boolean;
    /** Placeholder */
    placeholder?: string;
    /** Whether the input is disabled */
    disabled?: boolean;
} & InputSharedProps &
    InputWrapperBaseProps &
    DashComponentProps;

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
