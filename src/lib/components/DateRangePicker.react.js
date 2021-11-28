import React from "react";
import { DateRangePicker as MantineDateRangePicker } from "@mantine/dates";
import PropTypes from "prop-types";
import { omit } from "ramda";
import dayjs from "dayjs";
import { NumberSizes, Sizes } from "../propTypes";

/** Capture date input from user. For more information, see: https://mantine.dev/dates/date-range-picker/ */
const DateRangePicker = (props) => {
    const { setProps, dates, format, minDate, maxDate, initialMonth } = props;

    const updateProps = (d) => {
        if (d.some((ele) => ele !== null)) {
            setProps({
                dates: Array.from(d, (d) => dayjs(d).format("YYYY-MM-DD")),
            });
        }
    };

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
                ],
                props
            )}
            onChange={updateProps}
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
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Allow one date to be selected as range */
    allowSingleDateInRange: PropTypes.bool,

    /** Amount of displayed months */
    amountOfMonths: PropTypes.number,

    /** Allow to clear value */
    clearable: PropTypes.bool,

    /** Set to false to force dropdown to stay open after date was selected */
    closeCalendarOnChange: PropTypes.bool,

    /** Set to true to disable dropdown closing on scroll */
    closeDropdownOnScroll: PropTypes.bool,

    /** Input description, displayed after label */
    description: PropTypes.string,

    /** When true dates that are outside of given month cannot be clicked or focused */
    disableOutsideEvents: PropTypes.bool,

    /** A DateRangePicker can show it is currently unable to be interacted with */
    disabled: PropTypes.bool,

    /** Where to show calendar in modal or popover */
    dropdownType: PropTypes.oneOf(["modal", "popover"]),

    /** Set first day of the week */
    firstDayOfWeek: PropTypes.oneOf(["sunday", "monday"]),

    /** DateRangePicker display format */
    format: PropTypes.string,

    /** Initial selected month */
    initialMonth: PropTypes.string,

    /** Control initial dropdown opened state */
    initiallyOpened: PropTypes.bool,

    /** Input label, displayed before input */
    label: PropTypes.string,

    /** Maximum possible date */
    maxDate: PropTypes.string,

    /** Minimum possible date */
    minDate: PropTypes.string,

    /** Placeholder, displayed when date is not selected */
    placeholder: PropTypes.string,

    /** Prevent focusing upon clicking */
    preventFocus: PropTypes.bool,

    /**	Input border-radius from theme or number to set border-radius in px */
    radius: NumberSizes,

    /** Adds red asterisk on the right side of label */
    required: PropTypes.bool,

    /**	Input size */
    size: Sizes,

    /** Inline style override */
    style: PropTypes.object,

    /** Replace calendar label with month and year selects */
    withSelect: PropTypes.bool,

    /** Years range for year select */
    yearsRange: PropTypes.shape({
        from: PropTypes.number,
        to: PropTypes.number,
    }),

    /**	Popper zIndex */
    zIndex: PropTypes.number,

    /** Selected date */
    dates: PropTypes.arrayOf(PropTypes.string),
};

export default DateRangePicker;
