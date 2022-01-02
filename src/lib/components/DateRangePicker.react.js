import React, { useEffect } from "react";
import { DateRangePicker as MantineDateRangePicker } from "@mantine/dates";
import PropTypes from "prop-types";
import { omit } from "ramda";
import dayjs from "dayjs";

/**
 * Capture date input from user. For more information, see: https://mantine.dev/dates/date-range-picker/
 */
const DateRangePicker = (props) => {
    const {
        setProps,
        dates,
        format,
        minDate,
        maxDate,
        initialMonth,
        locale,
        class_name,
    } = props;

    const updateProps = (d) => {
        if (d.some((ele) => ele !== null)) {
            setProps({
                dates: Array.from(d, (d) => dayjs(d).format("YYYY-MM-DD")),
            });
        }
    };

    useEffect(() => {
        if ("dayjs" in window) {
            dayjs.Ls[locale] = window.dayjs.Ls[locale];
        }
    }, []);

    return (
        <MantineDateRangePicker
            {...omit(
                [
                    "setProps",
                    "defaultValue",
                    "date",
                    "format",
                    "minDate",
                    "maxDate",
                    "initialMonth",
                    "class_name",
                ],
                props
            )}
            onChange={updateProps}
            className={class_name}
            {...(dates
                ? { defaultValue: Array.from(dates, (d) => new Date(d)) }
                : {})}
            {...(minDate ? { minDate: new Date(minDate) } : {})}
            {...(maxDate ? { maxDate: new Date(maxDate) } : {})}
            {...(initialMonth ? { initialMonth: new Date(initialMonth) } : {})}
            inputFormat={format}
        />
    );
};

DateRangePicker.displayName = "DateRangePicker";

DateRangePicker.defaultProps = {
    clearable: false,
    placeholder: "Select a date range",
    style: { width: "350px" },
};

DateRangePicker.propTypes = {
    /**
     * Allow to change level (date – month – year)
     */
    allowLevelChange: PropTypes.bool,

    /**
     * Allow one date to be selected as range
     */
    allowSingleDateInRange: PropTypes.bool,

    /**
     * Amount of displayed months
     */
    amountOfMonths: PropTypes.number,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Allow to clear value
     */
    clearable: PropTypes.bool,

    /**
     * Set to false to force dropdown to stay open after date was selected
     */
    closeCalendarOnChange: PropTypes.bool,

    /**
     * Set to true to disable dropdown closing on scroll
     */
    closeDropdownOnScroll: PropTypes.bool,

    /**
     * Selected date
     */
    dates: PropTypes.arrayOf(PropTypes.string),
    /**
     * Input description, displayed after label
     */
    description: PropTypes.string,

    /**
     * When true dates that are outside of given month cannot be clicked or focused
     */
    disableOutsideEvents: PropTypes.bool,

    /**
     * A Datepicker can show it is currently unable to be interacted with
     */
    disabled: PropTypes.bool,

    /**
     * Where to show calendar in modal or popover
     */
    dropdownType: PropTypes.oneOf(["modal", "popover"]),

    /**
     * Displays error message after input
     */
    error: PropTypes.string,

    /**
     * Set first day of the week
     */
    firstDayOfWeek: PropTypes.oneOf(["sunday", "monday"]),

    /**
     * call onChange with last valid value onBlur
     */
    fixOnBlur: PropTypes.bool,

    /**
     * Should focusable days have tabIndex={0}?
     */
    focusable: PropTypes.bool,

    /**
     * DatePicker display format
     */
    format: PropTypes.string,

    /**
     * Set to true to make calendar take 100% of container width
     */
    fullWidth: PropTypes.bool,

    /**
     * Remove outside dates
     */
    hideOutsideDates: PropTypes.bool,

    /**
     * Set to false to remove weekdays row
     */
    hideWeekdays: PropTypes.bool,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Initial date selection level
     */
    initialLevel: PropTypes.oneOf(["date", "month", "year"]),

    /**
     * Initial selected month
     */
    initialMonth: PropTypes.string,

    /**
     * Control initial dropdown opened state
     */
    initiallyOpened: PropTypes.bool,

    /**
     * Input label, displayed before input
     */
    label: PropTypes.string,

    /**
     * Separator between dates
     */
    labelSeparator: PropTypes.string,

    /**
     * Locale used for all labels formatting
     */
    locale: PropTypes.string,

    /**
     * Maximum possible date
     */
    maxDate: PropTypes.string,

    /**
     * Minimum possible date
     */
    minDate: PropTypes.string,

    /**
     * Will input have multiple lines?
     */
    multiline: PropTypes.bool,

    /**
     * Placeholder, displayed when date is not selected
     */
    placeholder: PropTypes.string,

    /**
     * Prevent focusing upon clicking
     */
    preventFocus: PropTypes.bool,

    /**
     * Input border-radius from theme or number to set border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Adds red asterisk on the right side of label
     */
    required: PropTypes.bool,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Input size
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Defines input appearance, defaults to default in light color scheme and filled in dark
     */
    variant: PropTypes.oneOf(["default", "filled", "unstyled", "headless"]),

    /**
     * Whether to render the dropdown in a Portal
     */
    withinPortal: PropTypes.bool,

    /**
     * Popper zIndex
     */
    zIndex: PropTypes.number,
};

export default DateRangePicker;
