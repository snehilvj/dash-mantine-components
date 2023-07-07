import { NumberInput as MantineNumberInput } from "@mantine/core";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    InputComponentProps,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React, { useState } from "react";

export type Props = {
    /** Input value for controlled component */
    value?: number | "";
    /** The decimal separator */
    decimalSeparator?: string;
    /** The thousands separator */
    thousandsSeparator?: string;
    /** Maximum possible value */
    max?: number;
    /** Minimal possible value */
    min?: number;
    /** First value if no initial value was set and increment/decrement is triggered using controls or up/down arrows */
    startValue?: number;
    /** Number by which value will be incremented/decremented with controls and up/down arrows */
    step?: number;
    /** Delay before stepping the value in milliseconds. */
    stepHoldInterval?: number;
    /** Initial delay in milliseconds before stepping the value. */
    stepHoldDelay?: number;
    /** Removes increment/decrement controls */
    hideControls?: boolean;
    /** Amount of digits after the decimal point  */
    precision?: number;
    /** Only works if a precision is given, removes the trailing zeros, false by default */
    removeTrailingZeros?: boolean;
    /** Prevent value clamp on blur */
    noClampOnBlur?: boolean;
    /** Input type, defaults to text */
    type?: "text" | "number";
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** Debounce time in ms */
    debounce?: number;
} & InputComponentProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps &
    DashBaseProps &
    PersistenceProps;

/** Capture number input from user */
const NumberInput = (props: Props) => {
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
        <MantineNumberInput
            wrapperProps={{ autoComplete: "off" }}
            onChange={setVal}
            value={val}
            onKeyDown={handleKeyDown}
            {...other}
        />
    );
};

NumberInput.defaultProps = {
    debounce: 0,
    value: "",
    persisted_props: ["value"],
    persistence_type: "local",
    n_submit: 0,
};

export default NumberInput;
