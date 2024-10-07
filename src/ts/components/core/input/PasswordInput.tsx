import { PasswordInput as MantinePasswordInput } from "@mantine/core";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { __BaseInputProps } from "props/input";
import { StylesApiProps } from "props/styles";
import React, { useState } from "react";

interface Props
    extends BoxProps,
        __BaseInputProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Props passed down to the visibility toggle button */
    visibilityToggleButtonProps?: Record<string, any>;
    /** Determines whether input content should be visible */
    visible?: boolean;
    /** Input value for controlled component */
    value?: string;
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** Debounce time in ms */
    debounce?: number;
}

/** PasswordInput */
const PasswordInput = (props: Props) => {
    const { setProps, loading_state, value, n_submit, debounce, ...others } =
        props;

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
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            wrapperProps={{ autoComplete: "off" }}
            onChange={(ev) => setVal(ev.currentTarget.value)}
            value={val}
            onKeyDown={handleKeyDown}
            {...others}
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
