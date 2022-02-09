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

TimeInput.defaultProps = {
    persisted_props: ['value'],
    persistence_type: 'local',
};

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
     * Used to allow user interactions in this component to be persisted when
     * the component - or the page - is refreshed. If `persisted` is truthy and
     * hasn't changed from its previous value, a `value` that the user has
     * changed while using the app will keep that change, as long as
     * the new `value` also matches what was given originally.
     * Used in conjunction with `persistence_type`.
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number,
    ]),
            
    /**
     * Properties whose user interactions will persist after refreshing the
     * component or the page. 
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),
            
    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory']),    

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
