import React, { useState } from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { TimeInput as MantineTimeInput } from "@mantine/dates";
import { renderDashComponents } from "dash-extensions-js";
import dayjs from "dayjs";
import { useDidUpdate } from "@mantine/hooks";

/**
 * Capture time input from user. For more information, see: https://mantine.dev/dates/time-input/
 */
const TimeInput = (props) => {
    const { class_name, value, setProps } = props;

    const [time, setTime] = useState(value && new Date(value));

    const updateProps = (t) => {
        setProps({ value: t && dayjs(t).format("YYYY-MM-DDTHH:mm:ss") });
    };

    useDidUpdate(() => {
        setTime(value && new Date(value));
    }, [value]);

    let nProps = omit(["setProps", "class_name"], props);
    nProps = renderDashComponents(nProps, [
        "icon",
        "rightSection",
        "description",
        "error",
        "label",
    ]);

    return (
        <MantineTimeInput
            {...nProps}
            className={class_name}
            onChange={updateProps}
            value={time}
        ></MantineTimeInput>
    );
};

TimeInput.displayName = "TimeInput";

TimeInput.defaultProps = {};

TimeInput.propTypes = {
    /**
     * Placeholder for am/pm input
     */
    amPmPlaceholder: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * aria-label for clear button
     */
    clearButtonLabel: PropTypes.string,

    /**
     * Allow to clear item
     */
    clearable: PropTypes.bool,

    /**
     * Input description, displayed after label [PropTypes.node]
     */
    description: PropTypes.any,

    /**
     * Disabled input state
     */
    disabled: PropTypes.bool,

    /**
     * Displays error message after input [PropTypes.node]
     */
    error: PropTypes.any,

    /**
     * Time format
     */
    format: PropTypes.oneOf(["12", "24"]),

    /**
     * Adds icon on the left side of input [PropTypes.node]
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
     * Sets border color to red and aria-invalid=true on input element
     */
    invalid: PropTypes.bool,

    /**
     * Input label, displayed before input [PropTypes.node]
     */
    label: PropTypes.any,

    /**
     * Will input have multiple lines?
     */
    multiline: PropTypes.bool,

    /**
     * Uncontrolled input name
     */
    name: PropTypes.string,

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
     * Right section of input, similar to icon but on the right [PropTypes.node]
     */
    rightSection: PropTypes.any,

    /**
     * 	Width of right section, is used to calculate input padding-right
     */
    rightSectionWidth: PropTypes.number,

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
     * Placeholder for hours/minutes/seconds inputs
     */
    timePlaceholder: PropTypes.string,

    /**
     * Value for controlled input
     */
    value: PropTypes.string,

    /**
     * Defines input appearance, defaults to default in light color scheme and filled in dark
     */
    variant: PropTypes.oneOf(["default", "filled", "unstyled", "headless"]),

    /**
     * Display seconds input
     */
    withSeconds: PropTypes.bool,
};

export default TimeInput;
