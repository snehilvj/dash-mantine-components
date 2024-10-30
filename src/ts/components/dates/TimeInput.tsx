import { TimeInput as MantineTimeInput } from "@mantine/dates";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps, DebounceProps } from "props/dash";
import { TimeInputProps } from "props/dates";
import { __BaseInputProps } from "props/input";
import { StylesApiProps } from "props/styles";
import React, { useState } from "react";

interface Props
    extends DashBaseProps,
        PersistenceProps,
        DebounceProps,
        TimeInputProps,
        BoxProps,
        Omit<__BaseInputProps, "size">,
        StylesApiProps {
    /** Value for controlled component */
    value?: string;

}

/** TimeInput */
const TimeInput = (props: Props) => {
    const {
        setProps,
        loading_state,
        n_submit,
        n_blur,
        value,
        debounce,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const [time, setTime] = useState(value);

    const debounceValue = typeof debounce === 'number' ? debounce : 0;
    const [debounced] = useDebouncedValue(time, debounceValue);

    useDidUpdate(() => {
        if (typeof debounce === 'number' || debounce === false) {
            setProps({ value: debounced });
        }
    }, [debounced]);

    useDidUpdate(() => {
        setTime(value);
    }, [value]);

    const handleKeyDown = (ev) => {
        if (ev.key === "Enter" && debounce === true) {
            setProps({ n_submit: n_submit + 1, value: time });
        }
    };

    const handleBlur = () => {
        if (debounce === true) {
            setProps({ n_blur: n_blur + 1, value: time });
        }
    };

    return (
        <MantineTimeInput
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onChange={(ev) => setTime(ev.currentTarget.value)}
            value={time}
            {...others}
        />
    );
};

TimeInput.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
    debounce: false,
    n_submit: 0,
    n_blur: 0,
    value: "",
    autoComplete: "off"
};

export default TimeInput;
