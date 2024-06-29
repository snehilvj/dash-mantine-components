import { NumberInput as MantineNumberInput } from "@mantine/core";
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
    /** Controlled component value */
    value?: number | string;
    /** Determines whether leading zeros are allowed. If not set, leading zeros are removed when the input is blurred. `false` by default */
    allowLeadingZeros?: boolean;
    /** Determines whether negative values are allowed, `true` by default */
    allowNegative?: boolean;
    /** Characters which when pressed result in a decimal separator, `['.']` by default */
    allowedDecimalSeparators?: string[];
    /** Limits the number of digits that can be entered after the decimal point */
    decimalScale?: number;
    /** Character used as a decimal separator, `'.'` by default */
    decimalSeparator?: string;
    /** If set, 0s are added after `decimalSeparator` to match given `decimalScale`. `false` by default */
    fixedDecimalScale?: boolean;
    /** Prefix added before the input value */
    prefix?: string;
    /** Suffix added after the input value */
    suffix?: string;
    /** Defines the thousand grouping style. */
    thousandsGroupStyle?: "thousand" | "lakh" | "wan" | "none";
    /** If value is passed as string representation of numbers (unformatted) and number is used in any format props like in prefix or suffix in numeric format and format prop in pattern format then this should be passed as `true`. `false` by default. */
    valueIsNumericString?: boolean;
    /** Controls input `type` attribute, `'text'` by default */
    type?: "text" | "tel" | "password";
    /** A character used to separate thousands */
    thousandSeparator?: string | boolean;
    /** Minimum possible value */
    min?: number;
    /** Maximum possible value */
    max?: number;
    /** Number by which value will be incremented/decremented with up/down controls and keyboard arrows, `1` by default */
    step?: number;
    /** Determines whether the up/down controls should be hidden, `false` by default */
    hideControls?: boolean;
    /** Controls how value is clamped, `strict` – user is not allowed to enter values that are not in `[min, max]` range, `blur` – user is allowed to enter any values, but the value is clamped when the input loses focus (default behavior), `none` – lifts all restrictions, `[min, max]` range is applied only for controls and up/down keys */
    clampBehavior?: "strict" | "blur" | "none";
    /** Determines whether decimal values are allowed, `true` by default */
    allowDecimal?: boolean;
    /** Value set to the input when increment/decrement buttons are clicked or up/down arrows pressed if the input is empty, `0` by default */
    startValue?: number;
    /** Delay before stepping the value. Can be a number of milliseconds or a function that receives the current step count and returns the delay in milliseconds. */
    stepHoldInterval?: number | ((stepCount: number) => number);
    /** Initial delay in milliseconds before stepping the value. */
    stepHoldDelay?: number;
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** Debounce time in ms */
    debounce?: number;
}

/** NumberInput */
const NumberInput = (props: Props) => {
    const { setProps, value, n_submit, debounce, ...others } = props;

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
            {...others}
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
