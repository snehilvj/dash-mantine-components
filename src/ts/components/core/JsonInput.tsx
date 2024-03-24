import { JsonInput as MantineJsonInput } from "@mantine/core";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { TextareaProps } from "props/text";
import React, { useState } from "react";

interface Props extends TextareaProps, DashBaseProps, PersistenceProps {
    /** Value for controlled component */
    value?: string;
    /** Determines whether the value should be formatted on blur, `false` by default */
    formatOnBlur?: boolean;
    /** Error message displayed when value is not valid JSON */
    validationError?: React.ReactNode;
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** Debounce time in ms */
    debounce?: number;
}

/** JsonInput */
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
