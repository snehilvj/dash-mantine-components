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
    clearable: false,
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

    /** Allow to clear value */
    clearable: PropTypes.bool,

    /** Input description, displayed after label */
    description: PropTypes.string,

    /** A Datepicker can show it is currently unable to be interacted with */
    disabled: PropTypes.bool,

    /** Where to show calendar in modal or popover */
    dropdownType: PropTypes.oneOf(["modal", "popover"]),

    /** DatePicker display format */
    format: PropTypes.string,

    /** Initial selected month */
    initialMonth: PropTypes.string,

    /** Input label, displayed before input */
    label: PropTypes.string,

    /** Maximum possible date */
    maxDate: PropTypes.string,

    /** Minimum possible date */
    minDate: PropTypes.string,

    /** Placeholder, displayed when date is not selected */
    placeholder: PropTypes.string,

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
