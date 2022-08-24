import { DashComponentProps } from "../../props";
import { DatePicker as MantineDatePicker } from "@mantine/dates";
import { FirstDayOfWeek } from "@mantine/dates/lib/types";
import { MantineTransition, MantineSize } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import dayjs from "dayjs";
import React, { useState, useCallback, useEffect } from "react";
import { isDateInList } from "../../utils";

type Props = {
    /** Placeholder, displayed when date is not selected */
    placeholder?: string;
    /** Dropdown appear/disappear transition */
    transition?: MantineTransition;
    /** Dropdown appear/disappear transition duration */
    transitionDuration?: number;
    /** Dropdown appear/disappear transition timing function, defaults to theme.transitionTimingFunction */
    transitionTimingFunction?: string;
    /** Dropdown shadow from theme or css value for custom box-shadow */
    shadow?: MantineSize;
    /** Input size */
    size?: MantineSize;
    /** Where to show calendar in modal or popover */
    dropdownType?: "popover" | "modal";
    /** Dropdown positioning behavior */
    dropdownPosition?: "bottom-start" | "top-start" | "flip";
    /** Allow to clear value */
    clearable?: boolean;
    /** aria-label for clear button */
    clearButtonLabel?: string;
    /** Dropdown zIndex */
    zIndex?: number;
    /** call onChange with last valid value onBlur */
    fixOnBlur?: boolean;
    /** Whether to render the dropdown in a Portal */
    withinPortal?: boolean;
    /** Events that should trigger outside clicks */
    clickOutsideEvents?: string[];
    /** Modal z-index */
    modalZIndex?: number;
    /** Set the clear button tab index to disabled or default after input field */
    clearButtonTabIndex?: -1 | 0;
    /** Selected date, required with controlled input */
    value?: string;
    /** Set to false to force dropdown to stay open after date was selected */
    closeCalendarOnChange?: boolean;
    /** Set to true to open dropdown on clear */
    openDropdownOnClear?: boolean;
    /** dayjs input format */
    inputFormat?: string;
    /** Control initial dropdown opened state */
    initiallyOpened?: boolean;
    /** Set first day of the week */
    firstDayOfWeek?: FirstDayOfWeek;
    /** Internal prop to set input label */
    inputLabel?: string;
    /** Allow free input */
    allowFreeInput?: boolean;
    /** Maximum possible date */
    maxDate?: string;
    /** Minimum possible date */
    minDate?: string;
    /** Initial month for uncontrolled calendar */
    initialMonth?: string;
    /** Locale used for labels formatting, defaults to theme.datesLocale */
    locale?: string;
    /** Amount of months */
    amountOfMonths?: number;
    /** Paginate by amount of months */
    paginateBy?: number;
    /** Allow to change level (date – month – year) */
    allowLevelChange?: boolean;
    /** Initial date selection level */
    initialLevel?: "date" | "month" | "year";
    /** Next month control aria-label */
    nextMonthLabel?: string;
    /** Previous month control aria-label */
    previousMonthLabel?: string;
    /** Next year control aria-label */
    nextYearLabel?: string;
    /** Previous year control aria-label */
    previousYearLabel?: string;
    /** Next decade control aria-label */
    nextDecadeLabel?: string;
    /** Previous decade control aria-label */
    previousDecadeLabel?: string;
    /** dayjs Calendar month label format */
    labelFormat?: string;
    /** dayjs Calendar year label format */
    yearLabelFormat?: string;
    /** dayjs label format for weekday heading */
    weekdayLabelFormat?: string;
    /** Input label, displayed before input */
    label?: React.ReactNode;
    /** Input description, displayed after label */
    description?: React.ReactNode;
    /** Displays error message after input */
    error?: React.ReactNode;
    /** Adds required attribute to the input and red asterisk on the right side of label */
    required?: boolean;
    /** Determines whether required asterisk should be rendered, overrides required prop, does not add required attribute to the input */
    withAsterisk?: boolean;
    /** Specifies additional days between min_date_allowed and max_date_allowed that should be disabled */
    disabledDates?: string[];
    /** Adds styledDatesClassName to provided dates */
    styledDates?: string[];
    /** className to be added to dates to be styled */
    styledDatesClassName?: string;
} & DashComponentProps;

/**
 * Capture date input from user. For more information, see: https://mantine.dev/dates/date-picker/
 */
const DatePicker = (props: Props) => {
    const {
        setProps,
        value,
        minDate,
        maxDate,
        initialMonth,
        locale,
        disabledDates,
        styledDates,
        styledDatesClassName,
        ...other
    } = props;

    const [date, setDate] = useState(value && dayjs(value).toDate());
    const excludedDates = [];
    const stylizedDates = [];

    const onChange = useCallback(
        (value) => {
            setProps({ value: value && dayjs(value).format("YYYY-MM-DD") });
        },
        [value]
    );

    // add locale support
    useEffect(() => {
        if ("dayjs" in window) {
            dayjs.Ls[locale] = window["dayjs"].Ls[locale];
        }
    }, []);

    // add disabled dates support
    useEffect(() => {
        if (disabledDates) {
            for (let date of disabledDates) {
                excludedDates.push(dayjs(date).toDate());
            }
        }
    }, []);

    // add styling to certain dates
    useEffect(() => {
        if (styledDates) {
            for (let date of styledDates) {
                stylizedDates.push(dayjs(date).toDate());
            }
        }
    }, []);

    useDidUpdate(() => {
        setDate(value && dayjs(value).toDate());
    }, [value]);

    const isExcluded = useCallback(
        (date: Date) => isDateInList(date, excludedDates),
        []
    );

    const isStyled = useCallback(
        (date: Date) =>
            isDateInList(date, stylizedDates) ? styledDatesClassName : null,
        []
    );

    return (
        <MantineDatePicker
            onChange={onChange}
            locale={locale}
            minDate={minDate && new Date(minDate)}
            maxDate={maxDate && new Date(maxDate)}
            initialMonth={initialMonth && new Date(initialMonth)}
            excludeDate={isExcluded}
            dayClassName={isStyled}
            {...other}
        />
    );
};

DatePicker.defaultProps = {};

export default DatePicker;
