import { TimePicker as MantineTimePicker, getTimeRange } from '@mantine/dates';
import { useDebouncedValue, useDidUpdate } from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps, DebounceProps } from 'props/dash';
import { TimePickerProps } from 'props/dates';
import { __BaseInputProps } from 'props/input';
import { StylesApiProps } from 'props/styles';
import React, { useState } from 'react';
import { setPersistence, getLoadingState } from '../../utils/dash3';

interface Props
    extends DashBaseProps,
        PersistenceProps,
        DebounceProps,
        TimePickerProps {
    /** Value for controlled component */
    value?: string;
}

/** TimePicker */
const TimePicker = ({
    setProps,
    loading_state,
    n_submit = 0,
    n_blur = 0,
    value = '',
    timeRangePresets,
    presets,
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
        if (ev.key === 'Enter') {
            setProps({
                n_submit: n_submit + 1,
                ...(debounce === true && { value: time }),
            });
        }
    };

    const handleBlur = () => {
        setProps({
            n_blur: n_blur + 1,
            ...(debounce === true && { value: time }),
        });
    };

    return (
        <MantineTimePicker
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onChange={setTime}
            value={time}
            presets={
                timeRangePresets ? getTimeRange(timeRangePresets) : presets
            }
            {...others}
        />
    );
};

setPersistence(TimePicker);

export default TimePicker;
