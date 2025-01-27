import { Select as MantineSelect } from "@mantine/core";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { ComboboxLikeProps } from "props/combobox";
import { DashBaseProps, PersistenceProps, DebounceProps } from "props/dash";
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
        DebounceProps,
        PersistenceProps {
    /** Controlled component value */
    value?: string | null;
    /** Determines whether the select should be searchable, `false` by default */
    searchable?: boolean;
    /** Determines whether check icon should be displayed near the selected option label, `true` by default */
    withCheckIcon?: boolean;
    /** Position of the check icon relative to the option label, `'left'` by default */
    checkIconPosition?: "left" | "right";
    /** Message displayed when no option matched current search query, only applicable when `searchable` prop is set */
    nothingFoundMessage?: React.ReactNode;
    /** Controlled search value */
    searchValue?: string;
    /** Determines whether it should be possible to deselect value by clicking on the selected option, `true` by default */
    allowDeselect?: boolean;
    /** Determines whether the clear button should be displayed in the right section when the component has value, `false` by default */
    clearable?: boolean;
    /** Props passed down to the clear button */
    clearButtonProps?: object;
    /** Props passed down to the hidden input */
    hiddenInputProps?: object;
    /** Props passed down to the underlying `ScrollArea` component in the dropdown */
    scrollAreaProps?: ScrollAreaProps;
}

/** Select */
const Select = (props: Props) => {
    const {
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        loading_state,
        debounce,
        n_submit,
        n_blur,
        data,
        searchValue,
        value,
        ...others
    } = props;

    const [selected, setSelected] = useState(value);
    const [options, setOptions] = useState(data);
    const [searchVal, setSearchVal] = useState(searchValue);

    const debounceValue = typeof debounce === 'number' ? debounce : 0;
    const [debounced] = useDebouncedValue(selected, debounceValue);

    useDidUpdate(() => {
        if (typeof debounce === 'number' || debounce === false) {
            setProps({ value: debounced });
        }
    }, [debounced]);


    const handleKeyDown = (ev) => {
        if (ev.key === "Enter") {
            setProps({
                n_submit: n_submit + 1,
                ...(debounce === true && { value: selected }),
            });
        }
    };

    const handleBlur = () => {
        setProps({
            n_blur: n_blur + 1,
            ...(debounce === true && { value: selected })
        });
    };


    useDidUpdate(() => {
        setOptions(data);
        const filteredSelected = filterSelected(data, selected);
        setSelected(filteredSelected);
    }, [data]);

    useDidUpdate(() => {
        setSelected(value);
    }, [value]);

    useDidUpdate(() => {
        setProps({ data: options });
    }, [options]);

    useDidUpdate(() => {
        setProps({ searchValue: searchVal });
    }, [searchVal]);

    return (
        <MantineSelect
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            data={options}
            onChange={setSelected}
            value={selected}
            searchValue={searchVal}
            onSearchChange={setSearchVal}
            {...others}
        />
    );
};

Select.defaultProps = {
    debounce: false,
    persisted_props: ["value"],
    persistence_type: "local",
    n_submit: 0,
    n_blur: 0,
    data: [],
};

export default Select;
