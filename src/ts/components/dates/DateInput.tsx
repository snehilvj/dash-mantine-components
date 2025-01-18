import { CalendarLevel, DateInput as MantineDateInput } from "@mantine/dates";
import { useDebouncedValue, useDidUpdate, useFocusWithin } from "@mantine/hooks";
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
    /** Determines whether today should be highlighted with a border, false by default */
    highlightToday?: boolean;
}

/** DateInput */
const DateInput = (props: Props) => {
    const {
        setProps,
        n_submit = 0,
        n_blur = 0,
        value,
        debounce = false,
        minDate,
        maxDate,
        disabledDates,
        persistence,
        persisted_props = ['value'],
        persistence_type = 'local',
        ...others
    } = props;

    const [date, setDate] = useState(stringToDate(value));

    const debounceValue = typeof debounce === 'number' ? debounce : 0;
    const [debounced] = useDebouncedValue(date, debounceValue);

    const { ref, focused } = useFocusWithin();

    useDidUpdate(() => {
        if (typeof debounce === 'number' || debounce === false) {
            setProps({ value: dateToString(date) });
        }

        // Ensure the value prop is updated when the date is cleared by clicking the "X" button,
        // even if the input does not have focus.
        if (!focused && debounce === true) {
            setProps({ value: dateToString(date)})
        }
    }, [debounced]);


    useDidUpdate(() => {
        setDate(stringToDate(value));
    }, [value]);

    const handleKeyDown = (ev) => {
        if (ev.key === "Enter") {
            setProps({
                n_submit: n_submit + 1,
                ...(debounce === true && { value: dateToString(date) }),
            });
        }
    };

    const handleBlur = () => {
        setProps({
            n_blur: n_blur + 1,
            ...(debounce === true && { value: dateToString(date) })
        });
    };


    const isExcluded = (date: Date) => {
        return isDisabled(date, disabledDates || []);
    };

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <div ref={ref}>
            <MantineDateInput
                data-dash-is-loading={loading || undefined }
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                onChange={setDate}
                value={date}
                minDate={stringToDate(minDate)}
                maxDate={stringToDate(maxDate)}
                excludeDate={isExcluded}
                {...others}
            />
        </div>
    );
};

export default DateInput;
