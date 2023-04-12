import React, { useState, useEffect } from "react";
import {
    DefaultProps,
    PersistenceProps,
    InputComponentProps,
} from "../../../props";
import { TextInput as MantineTextInput } from "@mantine/core";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";

type Props = {
    /** Input element type */
    type?: "number" | "search" | "text" | "tel" | "url" | "email" | "password";
    /** Value for controlled input */
    value?: string;
    /** Spell check property */
    spellCheck?: boolean;
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
} & InputComponentProps &
    PersistenceProps &
    DefaultProps;

/**
 * Capture string input from user. For more information, see: https://mantine.dev/core/text-input/
 */
const TextInput = (props: Props) => {
    const {
        setProps,
        value,
        debounce,
        persistence,
        persisted_props,
        persistence_type,
        disabled,
        n_submit,
        ...other
    } = props;

    const [val, setVal] = useState(value);
    const [debounced] = useDebouncedValue(val, debounce);

    useEffect(() => {
        setProps({ value: debounced });
    }, [debounced]);

    useDidUpdate(() => {
        setVal(value);
    }, [value]);
    
    const handleKeyDown = (ev) => {
        if (ev.key === 'Enter') {
            setProps({ n_submit: n_submit + 1 });
        }
    };

    return (
        <MantineTextInput
            {...other}
            value={val}
            wrapperProps={{ autoComplete: "off" }}
            onChange={(ev) => setVal(ev.currentTarget.value)}
            onKeyDown={handleKeyDown}
        />
    );
};

TextInput.defaultProps = {
    value: "",
    debounce: 0,
    persisted_props: ["value"],
    persistence_type: "local",
    n_submit: 0,
};

export default TextInput;
