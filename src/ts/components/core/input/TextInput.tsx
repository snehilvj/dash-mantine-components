import { TextInput as MantineTextInput } from "@mantine/core";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { __BaseInputProps } from "props/input";
import { StylesApiProps } from "props/styles";
import React, { useEffect, useState } from "react";

interface Props
    extends BoxProps,
        StylesApiProps,
        __BaseInputProps,
        DashBaseProps,
        PersistenceProps {
    /** Value for controlled input */
    value?: string;
    /** Spell check property */
    spellCheck?: boolean;
    /** Debounce time in ms */
    debounce?: number;
}

/** TextInput */
const TextInput = (props: Props) => {
    const {
        setProps,
        value,
        debounce,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

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
            {...others}
            value={val}
            wrapperProps={{ autoComplete: "off" }}
            onChange={(ev) => setVal(ev.currentTarget.value)}
        />
    );
};

TextInput.defaultProps = {
    value: "",
    debounce: 0,
    persisted_props: ["value"],
    persistence_type: "local",
};

export default TextInput;
