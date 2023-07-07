import { Autocomplete as MantineAutocomplete } from "@mantine/core";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    InputComponentProps,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
    SelectSharedProps,
} from "props/mantine";
import React, { useState } from "react";

type Props = {
    /** Controlled input value */
    value?: string;
    /** suggestion data */
    data: string[];
    /** Maximum dropdown height */
    maxDropdownHeight?: number | string;
    /** Hovers the first result when input changes */
    hoverOnSearchChange?: boolean;
    /** Spell check property */
    spellCheck?: boolean;
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** Debounce time in ms */
    debounce?: number;
} & DashBaseProps &
    PersistenceProps &
    InputComponentProps &
    SelectSharedProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Autocomplete user input with any list of options */
const Autocomplete = (props: Props) => {
    const { setProps, data, n_submit, value, debounce, ...other } = props;

    const [selected, setSelected] = useState(value);
    const [debounced] = useDebouncedValue(selected, debounce);
    const [options, setOptions] = useState(data);

    useDidUpdate(() => {
        setOptions(data);
    }, [data]);

    useDidUpdate(() => {
        setProps({ value: debounced });
    }, [debounced]);

    useDidUpdate(() => {
        setSelected(value);
    }, [value]);

    const handleKeyDown = (ev) => {
        if (ev.key === "Enter") {
            setProps({ n_submit: n_submit + 1 });
        }
    };

    return (
        <MantineAutocomplete
            wrapperProps={{ autoComplete: "off" }}
            data={options}
            onChange={setSelected}
            value={selected}
            onKeyDown={handleKeyDown}
            {...other}
        />
    );
};

Autocomplete.defaultProps = {
    debounce: 0,
    value: "",
    persisted_props: ["value"],
    persistence_type: "local",
    n_submit: 0,
};

export default Autocomplete;
