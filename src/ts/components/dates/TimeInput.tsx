import { TimeInput as MantineTimeInput } from "@mantine/dates";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps, DebounceProps } from "props/dash";
import { TimeInputProps } from "props/dates";
import { __BaseInputProps } from "props/input";
import { StylesApiProps } from "props/styles";
import React, { useState } from "react";
import { setPersistence, getLoadingState } from "../../utils/dash3";

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
const TimeInput = ({
    setProps,
    loading_state,
    n_submit = 0,
    n_blur = 0,
    value = '',
    debounce = false,
    persistence,
    persisted_props,
    persistence_type,
    ...others
}: Props) => {

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
        if (ev.key === "Enter") {
            setProps({
                n_submit: n_submit + 1,
                ...(debounce === true && { value: time }),
            });
        }
    };

    const handleBlur = () => {
        setProps({
            n_blur: n_blur + 1,
            ...(debounce === true && { value: time })
        });
    };

    return (
        <MantineTimeInput
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onChange={(ev) => setTime(ev.currentTarget.value)}
            value={time}
            {...others}
        />
    );
};

setPersistence(TimeInput)

export default TimeInput;
