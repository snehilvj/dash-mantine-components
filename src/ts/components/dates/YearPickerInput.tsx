import { YearPickerInput as MantineYearPickerInput } from "@mantine/dates";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { DateInputSharedProps, YearPickerBaseProps } from "props/dates";
import { StylesApiProps } from "props/styles";
import React, { useState } from "react";
import {
    isDisabled,
    stringToDate,
    toDates,
    toStrings,
} from "../../utils/dates";

interface Props
    extends DashBaseProps,
        PersistenceProps,
        BoxProps,
        DateInputSharedProps,
        YearPickerBaseProps,
        StylesApiProps {
    /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
    valueFormat?: string;
    /** Specifies days that should be disabled */
    disabledDates?: string[];
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** Debounce time in ms */
    debounce?: number;
}

/** YearPickerInput */
const YearPickerInput = (props: Props) => {
    const {
        setProps,
        n_submit = 0,
        value,
        type,
        debounce = 0,
        minDate,
        maxDate,
        disabledDates,
        persistence,
        persisted_props = ['value'],
        persistence_type = 'local',
        ...others
    } = props;

    const [date, setDate] = useState(toDates(value));
    const [debounced] = useDebouncedValue(date, debounce);

    useDidUpdate(() => {
        setProps({ value: toStrings(date) });
    }, [debounced]);

    useDidUpdate(() => {
        setDate(toDates(value));
    }, [value]);

    const handleKeyDown = (ev) => {
        if (ev.key === "Enter") {
            setProps({ n_submit: n_submit + 1 });
        }
    };

    const isExcluded = (date: Date) => {
        return isDisabled(date, disabledDates || []);
    };

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineYearPickerInput
            data-dash-is-loading={loading || undefined}
            wrapperProps={{ autoComplete: "off" }}
            onKeyDown={handleKeyDown}
            onChange={setDate}
            value={date}
            type={type}
            minDate={stringToDate(minDate)}
            maxDate={stringToDate(maxDate)}
            {...others}
        />
    );
};


export default YearPickerInput;
