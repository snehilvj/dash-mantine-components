import React, { useState, useEffect } from "react";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { DefaultProps, PersistenceProps, InputComponentProps } from "../../../props";
import { JsonInput as MantineJsonInput } from "@mantine/core";

type Props = {
    /** Value for controlled input */
    value?: string;
    /** Format json on blur */
    formatOnBlur?: boolean;
    /** Error message shown when json is not valid */
    validationError?: React.ReactNode;
    /** If true textarea will grow with content until maxRows are reached  */
    autosize?: boolean;
    /** Defines maxRows in autosize variant, not applicable to regular variant */
    maxRows?: number;
    /** Defined minRows in autosize variant and rows in regular variant */
    minRows?: number;
} & InputComponentProps & PersistenceProps &
    DefaultProps;

/**
 * Capture json data from user. For more information, see: https://mantine.dev/core/json-input/
 */
const JsonInput = (props: Props) => {
    const { setProps, value, debounce, persistence,
        persisted_props,
        persistence_type,
        ...other } = props;

    const [val, setVal] = useState(value);
    const [debounced] = useDebouncedValue(val, debounce);

    useEffect(() => {
        setProps({ value: debounced });
    }, [debounced]);

    useDidUpdate(() => {
        setVal(value);
    }, [value]);

    return <MantineJsonInput {...other} value={val} onChange={setVal} />;
};

JsonInput.defaultProps = {
    value: "", debounce: 0, persisted_props: ["value"],
    persistence_type: "local",
};

export default JsonInput;
