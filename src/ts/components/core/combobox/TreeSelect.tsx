import {
    MantineColor,
    TreeNodeData,
    TreeSelect as MantineTreeSelect,
} from '@mantine/core';
import {
    useDebouncedValue,
    useDidUpdate,
    useFocusWithin,
} from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { __ClearButtonProps } from 'props/button';
import { ComboboxLikeProps } from 'props/combobox';
import { DashBaseProps, DebounceProps, PersistenceProps } from 'props/dash';
import { __BaseInputProps, ClearSectionMode } from 'props/input';
import { ScrollAreaProps } from 'props/scrollarea';
import { StylesApiProps } from 'props/styles';
import { equals } from 'ramda';
import React, { useRef, useState } from 'react';
import { filterTreeSelected } from '../../../utils/combobox';
import { getLoadingState, setPersistence } from '../../../utils/dash3';
import { parseFuncProps, resolveProp } from '../../../utils/prop-functions';

interface Props
    extends
        BoxProps,
        __BaseInputProps,
        Pick<ComboboxLikeProps, 'comboboxProps' | 'maxDropdownHeight'>,
        StylesApiProps,
        DashBaseProps,
        DebounceProps,
        PersistenceProps {
    /** Tree data. Each node must have a unique string value and a label, and can have nested children. When `data` changes, values that no longer match any node are removed from `value`. */
    data: TreeNodeData[];
    /** Selection mode, `'single'` by default. Checkbox mode supports parent-child cascade. */
    mode?: 'single' | 'multiple' | 'checkbox';
    /** Controlled value. A string or null in single mode, a list of strings in multiple and checkbox modes. */
    value?: string | string[] | null;
    /** Disables parent-child cascade in checkbox mode, `false` by default. Use with `checkedStrategy='child'` so the value contains exactly the checked nodes; the `'all'` and `'parent'` strategies recompute the value from the tree hierarchy and may drop or add nodes. */
    checkStrictly?: boolean;
    /** Determines which checked nodes appear in the value and pills in checkbox mode, `'child'` by default. When `checkStrictly` is enabled, only `'child'` is reliable. */
    checkedStrategy?: 'all' | 'parent' | 'child';
    /** Controlled list of expanded node values. Updated when nodes are expanded or collapsed. */
    expandedValues?: string[];
    /** Expands all nodes on initial render when expandedValues is not set, `false` by default. */
    defaultExpandAll?: boolean;
    /** Also expands or collapses a parent when its label is clicked, `false` by default. In single and multiple modes, parent nodes cannot be selected. */
    expandOnClick?: boolean;
    /** Enables search filtering, `false` by default. */
    searchable?: boolean;
    /** Controlled search value. Updated when the search changes. */
    searchValue?: string;
    /** Message displayed when no nodes match the search. */
    nothingFoundMessage?: React.ReactNode;
    /** Allows deselecting the selected value in single mode, `true` by default. */
    allowDeselect?: boolean;
    /** Displays a clear button when the component has a value, `false` by default. */
    clearable?: boolean;
    /** Determines how the clear button and rightSection are rendered, `'both'` by default. */
    clearSectionMode?: ClearSectionMode;
    /** Props passed down to the clear button. */
    clearButtonProps?: __ClearButtonProps;
    /** Maximum number of selected values in multiple and checkbox modes, `Infinity` by default. */
    maxValues?: number;
    /** Maximum number of displayed pills before an overflow indicator is shown. */
    maxDisplayedValues?: number;
    /** Content displayed in the overflow indicator. Can be a component, or a function `(overflowCount) => ReactNode`, see https://www.dash-mantine-components.com/functions-as-props */
    maxDisplayedValuesContent?: any;
    /** Displays tree connection lines, `true` by default. */
    withLines?: boolean;
    /** Props passed down to the hidden input. */
    hiddenInputProps?: object;
    /** Divider used to separate values in the hidden input, `','` by default. */
    hiddenInputValuesDivider?: string;
    /** Props passed down to the dropdown ScrollArea. */
    scrollAreaProps?: ScrollAreaProps;
    /** Color of the expand and collapse chevron. */
    chevronColor?: MantineColor;
    /** Accessible labels for the expand and collapse chevron buttons. */
    chevronAriaLabels?: {
        /** Label for a collapsed node's expand button, `'Expand'` by default. */
        expand?: string;
        /** Label for an expanded node's collapse button, `'Collapse'` by default. */
        collapse?: string;
    };
    /** Controlled dropdown opened state. Updated when the dropdown opens or closes. */
    dropdownOpened?: boolean;
    /** Clears the search when the selection changes, `true` by default. */
    clearSearchOnChange?: boolean;
    /** Opens the dropdown on focus in searchable mode, `true` by default. */
    openOnFocus?: boolean;
    /** Clears the search value when the dropdown is opened. Ignored if `searchable` is not set, `false` by default. */
    clearSearchOnFocus?: boolean;
    /** A function `(query, node) => boolean` that decides whether a node matches the search. Unlike `Select`/`MultiSelect`, it is called once per node and returns a boolean. Parents of matching nodes are kept. See https://www.dash-mantine-components.com/functions-as-props */
    filter?: any;
    /** A function to render the content of a node in the dropdown. Receives `{node, level, expanded, hasChildren, selected, checked, indeterminate, expand}`. See https://www.dash-mantine-components.com/functions-as-props */
    renderNode?: any;
    /** A function to render a pill in multiple and checkbox modes. Receives `{node, value, onRemove, disabled}`. See https://www.dash-mantine-components.com/functions-as-props */
    renderPill?: any;
}

const isValidValue = (mode: Props['mode'], value: unknown) =>
    mode === 'single'
        ? typeof value === 'string'
        : Array.isArray(value) &&
          value.every((item) => typeof item === 'string');

/** Select values from a tree with single, multiple, or cascading checkbox selection. */
const TreeSelect = ({
    setProps,
    persistence,
    persisted_props,
    persistence_type,
    loading_state,
    debounce = false,
    n_submit = 0,
    n_blur = 0,
    mode = 'single',
    data,
    value,
    searchValue,
    clearSearchOnFocus = false,
    maxDisplayedValuesContent,
    ...others
}: Props) => {
    if (value != null && !isValidValue(mode, value)) {
        throw new Error(
            'TreeSelect: `value` must be a string or null in single mode, or a list of strings in multiple and checkbox modes'
        );
    }

    const emptyValue = mode === 'single' ? null : [];
    const [selected, setSelected] = useState(value ?? emptyValue);
    const [options, setOptions] = useState(data ?? []);
    const [searchVal, setSearchVal] = useState(searchValue);
    const publishedSearch = useRef(searchValue);
    const { ref, focused } = useFocusWithin();

    const debounceValue = typeof debounce === 'number' ? debounce : 0;
    const [debounced] = useDebouncedValue(selected, debounceValue);

    useDidUpdate(() => {
        if (typeof debounce === 'number' || debounce === false) {
            setProps({ value: debounced });
        }

        // Publish pill removal and clearing even when the input is not focused
        if (!focused && debounce === true) {
            setProps({ value: debounced });
        }
    }, [debounced]);

    const handleKeyDown = (ev: React.KeyboardEvent) => {
        if (ev.key === 'Enter') {
            setProps({
                n_submit: n_submit + 1,
                ...(debounce === true && { value: selected }),
            });
        }
    };

    const handleBlur = () => {
        setProps({
            n_blur: n_blur + 1,
            ...(debounce === true && { value: selected }),
        });
    };

    // Dash passes a new `data` reference on every render because the nodes have
    // `children` keys, so only react to actual changes.
    const prevData = useRef(data);
    useDidUpdate(() => {
        if (equals(prevData.current, data)) {
            return;
        }
        prevData.current = data;
        const newOptions = Array.isArray(data) ? data : [];
        const newSelected = filterTreeSelected(newOptions, value) ?? emptyValue;

        setOptions(newOptions);
        setSelected(newSelected);
        setProps({ value: newSelected });
    }, [data]);

    useDidUpdate(() => {
        if (value !== debounced) {
            setSelected(value ?? emptyValue);
        }
    }, [value]);

    // Only apply searchValue changes made by Dash callbacks, not echoes of our
    // own updates, which could arrive after the user has typed further.
    useDidUpdate(() => {
        if (searchValue !== publishedSearch.current) {
            publishedSearch.current = searchValue;
            setSearchVal(searchValue);
        }
    }, [searchValue]);

    useDidUpdate(() => {
        publishedSearch.current = searchVal;
        setProps({ searchValue: searchVal });
    }, [searchVal]);

    return (
        <div ref={ref}>
            <MantineTreeSelect
                data-dash-is-loading={
                    getLoadingState(loading_state) || undefined
                }
                {...parseFuncProps('TreeSelect', others)}
                maxDisplayedValuesContent={resolveProp(
                    maxDisplayedValuesContent
                )}
                mode={mode}
                data={options}
                // Guards against a stale value shape when `mode` changes
                value={isValidValue(mode, selected) ? selected : emptyValue}
                // Mantine 9.7 still lets Backspace remove values when readOnly
                onChange={(newValue) =>
                    !others.readOnly && setSelected(newValue)
                }
                searchValue={searchVal}
                onSearchChange={setSearchVal}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                // Mantine focuses the input after clearing, which would hold back
                // the value until blur when debounce is true
                onClear={() =>
                    debounce === true && setProps({ value: emptyValue })
                }
                onExpandedChange={(expandedValues) =>
                    setProps({ expandedValues })
                }
                onDropdownOpen={() => {
                    if (clearSearchOnFocus && others.searchable) {
                        setSearchVal('');
                    }
                    setProps({ dropdownOpened: true });
                }}
                onDropdownClose={() => setProps({ dropdownOpened: false })}
            />
        </div>
    );
};

setPersistence(TreeSelect);

export default TreeSelect;
