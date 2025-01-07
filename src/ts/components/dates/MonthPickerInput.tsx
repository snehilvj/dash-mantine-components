import { MonthPickerInput as MantineMonthPickerInput } from "@mantine/dates";
import { useDebouncedValue, useDidUpdate, useFocusWithin } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { DateInputSharedProps, MonthPickerBaseProps } from "props/dates";
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
    MonthPickerBaseProps,
    StylesApiProps {
    /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
    valueFormat?: string;
    /** Specifies days that should be disabled */
    disabledDates?: string[];
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** Debounce time in ms */
    debounce?: boolean | number;
}

/** MonthPickerInput */
const MonthPickerInput = (props: Props) => {
    const {
        setProps,
        loading_state,
        n_submit,
        value,
        type,
        debounce,
        minDate,
        maxDate,
        disabledDates,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const [date, setDate] = useState(toDates(value));
    const debounceValue = typeof debounce === 'number' ? debounce : 0;
    const [debounced] = useDebouncedValue(date, debounceValue);
    const { ref, focused } = useFocusWithin();

    useDidUpdate(() => {
        if (typeof debounce === 'number' || debounce === false) {
            setProps({ value: toStrings(date) })
        };
    }, [debounced]);

    useDidUpdate(() => {
        // Clears value when X is clicked
        if (focused) {
            setProps({ value: toStrings(date) });
        }
    }, [date]);

    useDidUpdate(() => {
        setDate(type !== 'default' && !value ? [] : toDates(value));
    }, [value]);

    const handleKeyDown = (ev) => {
        if (ev.key === "Enter") {
            setProps({ n_submit: n_submit + 1 });
        }
    };

    const handleBlur = () => {
        // Don't include n_blur counter because onBlur is called when the calendar is opened
        if (debounce === true) {
            setProps({ value: toStrings(date) });
        }
    };

    const isExcluded = (date: Date) => {
        return isDisabled(date, disabledDates || []);
    };

    return (
        <div ref={ref}>
            <MantineMonthPickerInput
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                onChange={setDate}
                value={date}
                type={type}
                minDate={stringToDate(minDate)}
                maxDate={stringToDate(maxDate)}
                {...others}
            />
        </div>
    );
};

MonthPickerInput.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
    debounce: 0,
    n_submit: 0,
};

export default MonthPickerInput;
