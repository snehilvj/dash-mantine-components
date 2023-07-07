import { JsonInput as MantineJsonInput } from "@mantine/core";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    InputComponentProps,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
    TextareaProps,
} from "props/mantine";
import React, { useState } from "react";

type Props = {
    /** Value for controlled input */
    value?: string;
    /** Format JSON on blur */
    formatOnBlur?: boolean;
    /** Error message shown when JSON is not valid */
    validationError?: React.ReactNode;
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** Debounce time in ms */
    debounce?: number;
} & TextareaProps &
    InputComponentProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps &
    DashBaseProps &
    PersistenceProps;

/** Capture json data from user */
const JsonInput = (props: Props) => {
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
        <MantineJsonInput
            wrapperProps={{ autoComplete: "off" }}
            onChange={setVal}
            value={val}
            onKeyDown={handleKeyDown}
            {...other}
        />
    );
};

JsonInput.defaultProps = {
    debounce: 0,
    value: "",
    persisted_props: ["value"],
    persistence_type: "local",
    n_submit: 0,
};

export default JsonInput;
