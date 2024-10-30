import { CalendarLevel, DateInput as MantineDateInput } from "@mantine/dates";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps, DebounceProps } from "props/dash";
import {
    CalendarBaseProps,
    DecadeLevelSettings,
    MonthLevelSettings,
    YearLevelSettings,
} from "props/dates";
import { __BaseInputProps } from "props/input";
import { PopoverProps } from "props/popover";
import { StylesApiProps } from "props/styles";
import React, { useState } from "react";
import { dateToString, isDisabled, stringToDate } from "../../utils/dates";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

interface Props
    extends DashBaseProps,
        PersistenceProps,
        DebounceProps,
        BoxProps,
        Omit<__BaseInputProps, "size">,
        CalendarBaseProps,
        DecadeLevelSettings,
        YearLevelSettings,
        MonthLevelSettings,
        StylesApiProps {
    /** Value for controlled component */
    value?: string;
    /** Props added to Popover component */
    popoverProps?: Partial<Omit<PopoverProps, "children">>;
    /** Determines whether input value can be cleared, adds clear button to right section, false by default */
    clearable?: boolean;
    /** Props added to clear button */
    clearButtonProps?: object;
    /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
    valueFormat?: string;
    /** Determines whether input value should be reverted to last known valid value on blur, true by default */
    fixOnBlur?: boolean;
    /** Determines whether value can be deselected when the user clicks on the selected date in the calendar (only when clearable prop is set), defaults to true if clearable prop is set, false otherwise */
    allowDeselect?: boolean;
    /** Determines whether time (hours, minutes, seconds and milliseconds) should be preserved when new date is picked, true by default */
    preserveTime?: boolean;
    /** Max level that user can go up to (decade, year, month), defaults to decade */
    maxLevel?: CalendarLevel;
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: CalendarLevel;
    /** Specifies days that should be disabled */
    disabledDates?: string[];
}

/** DateInput */
const DateInput = (props: Props) => {
    const {
        setProps,
        loading_state,
        n_submit,
        n_blur,
        value,
        debounce,
        minDate,
        maxDate,
        disabledDates,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const [date, setDate] = useState(stringToDate(value));

    const debounceValue = typeof debounce === 'number' ? debounce : 0;
    const [debounced] = useDebouncedValue(date, debounceValue);

    useDidUpdate(() => {
        if (typeof debounce === 'number' || debounce === false) {
            setProps({ value: dateToString(date) });
        }
    }, [debounced]);

    useDidUpdate(() => {
        setDate(stringToDate(value));
    }, [value]);

    const handleKeyDown = (ev) => {
        if (ev.key === "Enter" && debounce === true) {
            setProps({ n_submit: n_submit + 1, value: dateToString(date) });
        }
    };

    const handleBlur = () => {
        if (debounce === true) {
            setProps({ n_blur: n_blur + 1, value: dateToString(date) });
        }
    };

    const isExcluded = (date: Date) => {
        return isDisabled(date, disabledDates || []);
    };

    return (
        <MantineDateInput
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onChange={setDate}
            value={date}
            minDate={stringToDate(minDate)}
            maxDate={stringToDate(maxDate)}
            excludeDate={isExcluded}
            {...others}
        />
    );
};

DateInput.defaultProps = {
    debounce: false,
    persisted_props: ["value"],
    persistence_type: "local",
    n_submit: 0,
    n_blur: 0,
    autoComplete: "off"
};

export default DateInput;
