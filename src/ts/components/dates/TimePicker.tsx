import { TimePicker as MantineTimePicker } from "@mantine/dates";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps, DebounceProps } from "props/dash";
import { TimePickerProps } from "props/dates";
import { __BaseInputProps } from "props/input";
import { StylesApiProps } from "props/styles";
import React, { useState } from "react";
import { setPersistence, getLoadingState } from "../../utils/dash3";

interface Props
    extends DashBaseProps,
        PersistenceProps,
        TimePickerProps {
    /** Value for controlled component */
    value?: string;
}

/** TimePicker */
const TimePicker = ({
    setProps,
    loading_state,
    value = '',
    persistence,
    persisted_props,
    persistence_type,
    ...others
}: Props) => {

    const [time, setTime] = useState(value);

    useDidUpdate(() => {
        setProps({ value: time });
    }, [time]);

    useDidUpdate(() => {
        setTime(value);
    }, [value]);

    return (
        <MantineTimePicker
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            onChange={setTime}
            value={time}
            {...others}
        />
    );
};

setPersistence(TimePicker)

export default TimePicker;
