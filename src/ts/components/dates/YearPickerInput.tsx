import { YearPickerInput as MantineYearPickerInput } from '@mantine/dates';
import { useDebouncedValue, useDidUpdate } from '@mantine/hooks';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { DateInputSharedProps, YearPickerBaseProps } from 'props/dates';
import { StylesApiProps } from 'props/styles';
import React, { useState } from 'react';
import { setPersistence, getLoadingState } from '../../utils/dash3';
import { parseFuncProps } from '../../utils/prop-functions';

interface Props
    extends DashBaseProps,
        PersistenceProps,
        BoxProps,
        DateInputSharedProps,
        YearPickerBaseProps,
        StylesApiProps {
    /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
    valueFormat?: string;
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** Debounce time in ms */
    debounce?: number;
}

/** YearPickerInput */
const YearPickerInput = ({
    setProps,
    loading_state,
    n_submit = 0,
    value,
    type,
    debounce = 0,
    minDate,
    maxDate,
    persistence,
    persisted_props,
    persistence_type,
    ...others
}: Props) => {
    const [date, setDate] = useState(value);
    const [debounced] = useDebouncedValue(date, debounce);

    useDidUpdate(() => {
        setProps({ value: date });
    }, [debounced]);

    useDidUpdate(() => {
        if (value !== debounced) {
            setDate(value);
        }
    }, [value]);

    const handleKeyDown = (ev) => {
        if (ev.key === 'Enter') {
            setProps({ n_submit: n_submit + 1 });
        }
    };

    return (
        <MantineYearPickerInput
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            onKeyDown={handleKeyDown}
            onChange={setDate}
            value={date}
            type={type}
            minDate={minDate}
            maxDate={maxDate}
            {...parseFuncProps('YearPickerInput', others)}
        />
    );
};

setPersistence(YearPickerInput);

export default YearPickerInput;
