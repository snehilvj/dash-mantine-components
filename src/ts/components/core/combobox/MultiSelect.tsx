import { MultiSelect as MantineMultiSelect } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { __CloseButtonProps } from "props/button";
import { ComboboxLikeProps } from "props/combobox";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { __BaseInputProps } from "props/input";
import { ScrollAreaProps } from "props/scrollarea";
import { StylesApiProps } from "props/styles";
import React, { useState } from "react";
import { filterSelected } from "../../../utils/combobox";

interface Props
    extends BoxProps,
        __BaseInputProps,
        ComboboxLikeProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Controlled component value */
    value?: string[];
    /** Controlled search value */
    searchValue?: string;
    /** Maximum number of values, `Infinity` by default */
    maxValues?: number;
    /** Determines whether the select should be searchable, `false` by default */
    searchable?: boolean;
    /** Message displayed when no option matched current search query, only applicable when `searchable` prop is set */
    nothingFoundMessage?: React.ReactNode;
    /** Determines whether check icon should be displayed near the selected option label, `true` by default */
    withCheckIcon?: boolean;
    /** Position of the check icon relative to the option label, `'left'` by default */
    checkIconPosition?: "left" | "right";
    /** Determines whether picked options should be removed from the options list, `false` by default */
    hidePickedOptions?: boolean;
    /** Determines whether the clear button should be displayed in the right section when the component has value, `false` by default */
    clearable?: boolean;
    /** Props passed down to the clear button */
    clearButtonProps?: __CloseButtonProps;
    /** Props passed down to the hidden input */
    hiddenInputProps?: object;
    /** Divider used to separate values in the hidden input `value` attribute, `','` by default */
    hiddenInputValuesDivider?: string;
    /** Props passed down to the underlying `ScrollArea` component in the dropdown */
    scrollAreaProps?: ScrollAreaProps;
}

/** MultiSelect */
const MultiSelect = (props: Props) => {
    const { setProps, loading_state, data, searchValue, value, ...others } =
        props;

    const [selected, setSelected] = useState(value);
    const [options, setOptions] = useState(data);
    const [searchVal, setSearchVal] = useState(searchValue);

    useDidUpdate(() => {
        setOptions(data);
        const filteredSelected = filterSelected(data, selected);
        setSelected(filteredSelected ?? []);
    }, [data]);

    useDidUpdate(() => {
        setProps({ data: options });
    }, [options]);

    useDidUpdate(() => {
        setProps({ value: selected });
    }, [selected]);

    useDidUpdate(() => {
        setSelected(value ?? []);
    }, [value]);

    useDidUpdate(() => {
        setProps({ searchValue: searchVal });
    }, [searchVal]);

    return (
        <MantineMultiSelect
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            wrapperProps={{ autoComplete: "off" }}
            data={options}
            onChange={setSelected}
            value={selected}
            searchValue={searchVal}
            onSearchChange={setSearchVal}
            {...others}
        />
    );
};

MultiSelect.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
    data: [],
    value: [],
};

export default MultiSelect;
