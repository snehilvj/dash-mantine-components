import { CalendarLevel, DateInput as MantineDateInput } from "@mantine/dates";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
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
import { dayjsToString, isDisabled, stringToDayjs } from "../../utils/dates";

interface Props
    extends DashBaseProps,
        PersistenceProps,
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
    /** An integer that represents the number of times that this element has been submitted */
    n_submit?: number;
    /** Debounce time in ms */
    debounce?: number;
}

/** DateInput */
const DateInput = (props: Props) => {
    const {
        setProps,
        n_submit,
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

    const [date, setDate] = useState(stringToDayjs(value));
    const [debounced] = useDebouncedValue(date, debounce);

    useDidUpdate(() => {
        setProps({ value: dayjsToString(date) });
    }, [debounced]);

    useDidUpdate(() => {
        setDate(stringToDayjs(value));
    }, [value]);

    const handleKeyDown = (ev) => {
        if (ev.key === "Enter") {
            setProps({ n_submit: n_submit + 1 });
        }
    };

    const isExcluded = (date: Date) => {
        return isDisabled(date, disabledDates || []);
    };

    return (
        <MantineDateInput
            wrapperProps={{ autoComplete: "off" }}
            onKeyDown={handleKeyDown}
            onChange={setDate}
            value={date}
            minDate={stringToDayjs(minDate)}
            maxDate={stringToDayjs(maxDate)}
            excludeDate={isExcluded}
            {...others}
        />
    );
};

DateInput.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
    debounce: 0,
    n_submit: 0,
};

export default DateInput;
