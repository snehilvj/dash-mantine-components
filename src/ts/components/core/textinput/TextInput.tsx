import React, { useState, useEffect } from "react";
import { DefaultProps, InputComponentProps } from "../../../props";
import { TextInput as MantineTextInput } from "@mantine/core";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";

type Props = {
    /** Input element type */
    type?: "number" | "search" | "text" | "tel" | "url" | "email" | "password";
    /** Value for controlled input */
    value?: string;
} & InputComponentProps &
    DefaultProps;

/**
 * Capture string input from user. For more information, see: https://mantine.dev/core/text-input/
 */
const TextInput = (props: Props) => {
    const { setProps, value, debounce, ...other } = props;

    const [val, setVal] = useState(value);
    const [debounced] = useDebouncedValue(val, debounce);

    useEffect(() => {
        setProps({ value: debounced });
    }, [debounced]);

    useDidUpdate(() => {
        setVal(value);
    }, [value]);

    return (
        <MantineTextInput
            {...other}
            value={val}
            onChange={(ev) => setVal(ev.currentTarget.value)}
        />
    );
};

TextInput.defaultProps = { value: "", debounce: 0 };

export default TextInput;
