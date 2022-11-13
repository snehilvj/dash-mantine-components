import React, { useState, useEffect } from "react";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { DefaultProps, InputComponentProps } from "../../../props";
import { PasswordInput as MantinePasswordInput } from "@mantine/core";

type Props = {
    /** Toggle button tabIndex, set to 0 to make button focusable with tab key */
    toggleTabIndex?: -1 | 0;
    /** Determines whether input content should be visible (controlled) */
    visible?: boolean;
    /** Value for controlled input */
    value?: string;
} & InputComponentProps &
    DefaultProps;

/**
 * Capture password from user with option to toggle visibility. For more information, see: https://mantine.dev/core/password-input/
 */
const PasswordInput = (props: Props) => {
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
        <MantinePasswordInput
            {...other}
            value={val}
            onChange={(ev) => setVal(ev.currentTarget.value)}
        />
    );
};

PasswordInput.defaultProps = { value: "", debounce: 0 };

export default PasswordInput;
