import { TimeInput as MantineTimeInput } from "@mantine/dates";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { TimeInputProps } from "props/dates";
import { __BaseInputProps } from "props/input";
import { StylesApiProps } from "props/styles";
import React, { useState } from "react";

interface Props
    extends DashBaseProps,
        PersistenceProps,
        TimeInputProps,
        BoxProps,
        Omit<__BaseInputProps, "size">,
        StylesApiProps {
    /** Value for controlled component */
    value?: string;
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** Debounce time in ms */
    debounce?: number;
}

/** TimeInput */
const TimeInput = (props: Props) => {
    const {
        setProps,
        n_submit,
        value,
        debounce,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const [time, setTime] = useState(value);
    const [debounced] = useDebouncedValue(time, debounce);

    useDidUpdate(() => {
        setProps({ value: debounced });
    }, [debounced]);

    useDidUpdate(() => {
        setTime(value);
    }, [value]);

    const handleKeyDown = (ev) => {
        if (ev.key === "Enter") {
            setProps({ n_submit: n_submit + 1 });
        }
    };

    return (
        <MantineTimeInput
            wrapperProps={{ autoComplete: "off" }}
            onKeyDown={handleKeyDown}
            onChange={(ev) => setTime(ev.currentTarget.value)}
            value={time}
            {...others}
        />
    );
};

TimeInput.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
    debounce: 0,
    n_submit: 0,
    value: "",
};

export default TimeInput;
