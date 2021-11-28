import React from "react";
import { DatePicker as MantineDatePicker } from "@mantine/dates";
import PropTypes from "prop-types";
import { omit } from "ramda";
import dayjs from "dayjs";
import { NumberSizes, Sizes } from "../propTypes";

/** Capture date input from user */
const DatePicker = (props) => {
    const { setProps, date, format, minDate, maxDate, initialMonth } = props;

    const updateProps = (d) => {
        setProps({ date: d ? dayjs(d).format("YYYY-MM-DD") : null });
    };

    return (
        <MantineDatePicker
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
            {...(date ? { defaultValue: new Date(date) } : {})}
            {...(minDate ? { minDate: new Date(minDate) } : {})}
            {...(maxDate ? { maxDate: new Date(maxDate) } : {})}
            {...(initialMonth ? { initialMonth: new Date(initialMonth) } : {})}
            inputFormat={format}
        />
    );
};

DatePicker.displayName = "DatePicker";

DatePicker.defaultProps = {
    placeholder: "Select a date",
    style: { width: "200px" },
};

DatePicker.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Allow free input */
    allowFreeInput: PropTypes.bool,

    /** Amount of displayed months */
    amountOfMonths: PropTypes.number,

    /** Allow to clear value */
    clearable: PropTypes.bool,

    /** Input description, displayed after label */
    description: PropTypes.string,

    // /** When true dates that are outside of given month are not styled */
    // disableOutsideDayStyle: PropTypes.bool,

    /** When true dates that are outside of given month cannot be clicked or focused */
    disableOutsideEvents: PropTypes.bool,

    /** A Datepicker can show it is currently unable to be interacted with */
    disabled: PropTypes.bool,

    /** Where to show calendar in modal or popover */
    dropdownType: PropTypes.oneOf(["modal", "popover"]),

    /** Set first day of the week */
    firstDayOfWeek: PropTypes.oneOf(["sunday", "monday"]),

    /** DatePicker display format */
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

    /** Will input have multiple lines? */
    multiline: PropTypes.bool,

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
    date: PropTypes.string,
};

export default DatePicker;
