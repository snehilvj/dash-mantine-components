import React, { useState, useEffect } from "react";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { DefaultProps, PersistenceProps, InputComponentProps } from "../../../props";
import { Textarea as MantineTextarea } from "@mantine/core";

type Props = {
    /** If true textarea will grow with content until maxRows are reached  */
    autosize?: boolean;
    /** Defines maxRows in autosize variant, not applicable to regular variant */
    maxRows?: number;
    /** Defined minRows in autosize variant and rows in regular variant */
    minRows?: number;
    /** Value for controlled input */
    value?: string;
} & InputComponentProps & PersistenceProps &
    DefaultProps;

/**
 * Capture string input from user. For more information, see: https://mantine.dev/core/text-input/
 */
const Textarea = (props: Props) => {
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
    return (
        <MantineTextarea
            {...other}
            value={val}
            onChange={(ev) => setVal(ev.currentTarget.value)}
        />
    );
};

Textarea.defaultProps = {
    value: "", debounce: 0, persisted_props: ["value"],
    persistence_type: "local",
};

export default Textarea;
