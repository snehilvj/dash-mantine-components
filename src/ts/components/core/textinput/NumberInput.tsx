import React, { useState, useEffect } from "react";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import {
    DefaultProps,
    PersistenceProps,
    InputComponentProps,
} from "../../../props";
import { NumberInput as MantineNumberInput } from "@mantine/core";

type Props = {
    /** Input value for controlled variant */
    value?: number;
    /** The decimal separator */
    decimalSeparator?: string;
    /** Maximum possible value */
    max?: number;
    /** Minimal possible value */
    min?: number;
    /** First value if no initial value was set and increment/decrement is triggered using controls or up/down arrows */
    startValue?: number;
    /** Number by which value will be incremented/decremented with controls and up/down arrows */
    step?: number;
    /** Delay before stepping the value. Can be a number of milliseconds or a function that receives the current step count and returns the delay in milliseconds. */
    stepHoldInterval?: number;
    /** Initial delay in milliseconds before stepping the value. */
    stepHoldDelay?: number;
    /** Removes increment/decrement controls */
    hideControls?: boolean;
    /** Amount of digits after the decimal point  */
    precision?: number;
    /** Prevent value clamp on blur */
    noClampOnBlur?: boolean;
    /** Input type, defaults to text */
    type?: "text" | "number";
} & InputComponentProps &
    PersistenceProps &
    DefaultProps;

/**
 * Capture number input from user. For more information, see: https://mantine.dev/core/number-input/
 */
const NumberInput = (props: Props) => {
    const {
        setProps,
        value,
        debounce,
        persistence,
        persisted_props,
        persistence_type,
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

    return (
        <MantineNumberInput
            {...other}
            value={val}
            wrapperProps={{ autoComplete: "off" }}
            onChange={setVal}
        />
    );
};

NumberInput.defaultProps = {
    value: "",
    debounce: 0,
    persisted_props: ["value"],
    persistence_type: "local",
};

export default NumberInput;
