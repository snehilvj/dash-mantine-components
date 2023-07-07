import { PasswordInput as MantinePasswordInput } from "@mantine/core";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    InputComponentProps,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
    TextInputProps,
} from "props/mantine";
import React, { useState } from "react";

export type Props = {
    /** Toggle button tabIndex, set to 0 to make button focusable with tab key */
    toggleTabIndex?: -1 | 0;
    /** aria-label for visibility toggle button */
    visibilityToggleLabel?: string;
    /** Determines whether input content should be visible (controlled) */
    visible?: boolean;
    /** Input value for controlled component */
    value?: string;
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** Debounce time in ms */
    debounce?: number;
} & TextInputProps &
    InputComponentProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps &
    DashBaseProps &
    PersistenceProps;

/** Capture password from user with option to toggle visibility */
const PasswordInput = (props: Props) => {
    const { setProps, value, n_submit, debounce, ...other } = props;

    const [val, setVal] = useState(value);
    const [debounced] = useDebouncedValue(val, debounce);

    useDidUpdate(() => {
        setProps({ value: debounced });
    }, [debounced]);

    useDidUpdate(() => {
        setVal(value);
    }, [value]);

    const handleKeyDown = (ev) => {
        if (ev.key === "Enter") {
            setProps({ n_submit: n_submit + 1 });
        }
    };

    return (
        <MantinePasswordInput
            wrapperProps={{ autoComplete: "off" }}
            onChange={(ev) => setVal(ev.currentTarget.value)}
            value={val}
            onKeyDown={handleKeyDown}
            {...other}
        />
    );
};

PasswordInput.defaultProps = {
    debounce: 0,
    value: "",
    persisted_props: ["value"],
    persistence_type: "local",
    n_submit: 0,
};

export default PasswordInput;
