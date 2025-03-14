import {
    ComboboxStringData,
    TagsInput as MantineTagsInput,
} from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { ComboboxLikeProps } from "props/combobox";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { __ClearButtonProps } from "props/button";
import { __BaseInputProps } from "props/input";
import { ScrollAreaProps } from "props/scrollarea";
import { StylesApiProps } from "props/styles";
import React, { useState } from "react";
import { filterSelected } from "../../../utils/combobox";
import { setPersistence, getLoadingState } from "../../../utils/dash3";

interface Props
    extends BoxProps,
        __BaseInputProps,
        Omit<ComboboxLikeProps, "data">,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Data displayed in the dropdown */
    data?: ComboboxStringData;
    /** Controlled component value */
    value?: string[];
    /** Controlled search value */
    searchValue?: string;
    /** Maximum number of tags, `Infinity` by default */
    maxTags?: number;
    /** Determines whether duplicate tags are allowed, `false` by default */
    allowDuplicates?: boolean;
    /** Characters that should trigger tags split, `[',']` by default */
    splitChars?: string[];
    /** Determines whether the clear button should be displayed in the right section when the component has value, `false` by default */
    clearable?: boolean;
    /** Props passed down to the clear button */
    clearButtonProps?: __ClearButtonProps;
    /** Props passed down to the hidden input */
    hiddenInputProps?: object;
    /** Divider used to separate values in the hidden input `value` attribute, `','` by default */
    hiddenInputValuesDivider?: string;
    /** Props passed down to the underlying `ScrollArea` component in the dropdown */
    scrollAreaProps?: ScrollAreaProps;
    /** Determines whether the value typed in by the user but not submitted should be accepted when the input is blurred, true by default */
    acceptValueOnBlur?: boolean;
}

/** TagsInput captures a list of values from user with free input and suggestions */
const TagsInput = ({
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        loading_state,
        data,
        searchValue,
        value,
        ...others
    }: Props) => {

    const [selected, setSelected] = useState(value ?? []);
    const [options, setOptions] = useState(data ?? []);
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
        <MantineTagsInput
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            data={options}
            onChange={setSelected}
            value={selected}
            searchValue={searchVal}
            onSearchChange={setSearchVal}
            {...others}
        />
    );
};

setPersistence(TagsInput)

export default TagsInput;
