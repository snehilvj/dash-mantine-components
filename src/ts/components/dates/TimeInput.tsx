import React, { useState, useEffect } from "react";
import { TimeInput as MantineTimeInput } from "@mantine/dates";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    MantineStyleSystemProps,
    MantineStylesAPIProps,
    TextInputProps,
    InputComponentProps,
} from "props/mantine";

type Props = {
    /** Controlled input value */
    value?: string;
    /** Display seconds input */
    withSeconds?: boolean;
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** Debounce time in ms */
    debounce?: number;
} & TextInputProps &
    InputComponentProps &
    PersistenceProps &
    DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Capture time input from user */
const TimeInput = (props: Props) => {
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
        <MantineTimeInput
            onChange={(ev) => setVal(ev.currentTarget.value)}
            value={val}
            {...other}
        />
    );
};

TimeInput.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
    debounce: 0,
    n_submit: 0,
};

export default TimeInput;
