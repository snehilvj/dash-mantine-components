import React, { useEffect, useState } from "react";
import { DatePicker as MantineDatePicker } from "@mantine/dates";
import PropTypes from "prop-types";
import { omit } from "ramda";
import dayjs from "dayjs";
import { useDidUpdate } from "@mantine/hooks";
import { renderDashComponents } from "dash-extensions-js";

/**
 * Capture date input from user. For more information, see: https://mantine.dev/dates/date-picker/
 */
const DatePicker = (props) => {
    const {
        setProps,
        value,
        minDate,
        maxDate,
        initialMonth,
        locale,
        class_name,
    } = props;

    // eslint-disable-next-line no-undefined
    const [date, setDate] = useState(value ? new Date(value) : undefined);

    const updateProps = (d) => {
        setProps({ value: d ? dayjs(d).format("YYYY-MM-DD") : null });
    };

    useEffect(() => {
        if ("dayjs" in window) {
            dayjs.Ls[locale] = window.dayjs.Ls[locale];
        }
    }, []);

    useDidUpdate(() => {
        setDate(new Date(value));
    }, [value]);

    let nProps = omit(
        [
            "setProps",
            "defaultValue",
            "minDate",
            "maxDate",
            "initialMonth",
            "class_name",
            "value",
        ],
        props
    );
    nProps = renderDashComponents(nProps, [
        "description",
        "icon",
        "rightSection",
        "error",
        "label",
    ]);

    return (
        <MantineDatePicker
            {...nProps}
            onChange={updateProps}
            className={class_name}
            value={date}
            minDate={minDate && new Date(minDate)}
            maxDate={maxDate && new Date(maxDate)}
            initialMonth={initialMonth && new Date(initialMonth)}
        />
    );
};

DatePicker.displayName = "DatePicker";

DatePicker.defaultProps = {
    style: { width: "200px" },
};

DatePicker.propTypes = {
    /**
     * Allow free input
     */
    allowFreeInput: PropTypes.bool,

    /**
     * Allow to change level (date – month – year)
     */
    allowLevelChange: PropTypes.bool,

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
     * Input description, displayed after label
     */
    description: PropTypes.any,

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
    error: PropTypes.any,

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
     * Adds icon on the left side of input
     */
    icon: PropTypes.any,

    /**
     * Width of icon section in px
     */
    iconWidth: PropTypes.number,

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
     * dayjs input format
     */
    inputFormat: PropTypes.string,

    /**
     * Sets border color to red and aria-invalid=true on input element
     */
    invalid: PropTypes.bool,

    /**
     * Input label, displayed before input
     */
    label: PropTypes.any,

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
     * Right section of input, similar to icon but on the right
     */
    rightSection: PropTypes.any,

    /**
     * Width of right section, is used to calculate input padding-right
     */
    rightSectionWidth: PropTypes.number,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Dropdown shadow from theme or css value for custom box-shadow
     */
    shadow: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Input size
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Dropdown appear/disappear transition
     */
    transition: PropTypes.oneOf([
        "fade",
        "skew-up",
        "skew-down",
        "rotate-right",
        "rotate-left",
        "slide-down",
        "slide-up",
        "slide-right",
        "slide-left",
        "scale-y",
        "scale-x",
        "scale",
        "pop",
        "pop-top-left",
        "pop-top-right",
        "pop-bottom-left",
        "pop-bottom-right",
    ]),

    /**
     * Dropdown appear/disappear transition duration
     */
    transitionDuration: PropTypes.number,

    /**
     * Selected date
     */
    value: PropTypes.string,

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

export default DatePicker;
