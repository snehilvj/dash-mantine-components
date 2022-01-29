import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { TimeInput as MantineTimenInput } from "@mantine/core";
import {renderDashComponents} from "dash-extensions-js"

/**
 * JsonInput. For more information, see: https://mantine.dev/core/json-input/
 */
const TimeInput = (props) => {
    const { class_name, children, setProps } = props;
    let nProps = omit(["setProps", "children", "class_name"], props);
    // Render react nodes.
    nProps = renderDashComponents(nProps, ["icon", "rightSection", "description", "error", "label"]);
    // Bind OnChange event.
    nProps.onChange = value => setProps({ value });
    // Render component
    return (
        <MantineTimenInput
            {...nProps}
            className={class_name}
        >
            {children}
        </MantineTimenInput>
    );
};

TimeInput.displayName = "TimeInput";

TimeInput.defaultProps = {};

TimeInput.propTypes = {

    /**
    * aria-label for am/pm input
    */
    amPmLabel: PropTypes.string,

    /**
    * Placeholder for am/pm input
    */
    amPmPlaceholder: PropTypes.string,

    /**
    * aria-label for clear button
    */
    clearButtonLabel: PropTypes.string,

    /**
    * Allow to clear item
    */
    clearable: PropTypes.bool,

    /**
    * Time format
    */
    format: PropTypes.oneOf(["12", "24"]),

    /**
    * aria-label for hours input
    */
    hoursLabel: PropTypes.string,

    /**
    * Width of icon section in px
    */
    iconWidth: PropTypes.number,

    /**
    * aria-label for minutes input
    */
    minutesLabel: PropTypes.string,

    /**
    * Uncontrolled input name
    */
    name: PropTypes.string,

    /**
    * aria-label for seconds input
    */
    secondsLabel: PropTypes.string,

    /**
    * Placeholder for hours/minutes/seconds inputs
    */
    timePlaceholder: PropTypes.string,

    /**
    * Value for controlled input
    */
    value: PropTypes.string,  // TODO: Parse data?

    /**
    * Display seconds input
    */
    withSeconds: PropTypes.bool,

    /**
    * Default value for uncontrolled input
    */
    defaultValue: PropTypes.string,  // TODO: Parse date?  //X

    // Input props

    /**
    * Disabled input state
    */
    disabled: PropTypes.bool,

    /**
    * Adds icon on the left side of input [PropTypes.node]
    */
    icon: PropTypes.any,

    /**
    * Sets border color to red and aria-invalid=true on input element
    */
    invalid: PropTypes.bool,

    /**
    * Will input have multiple lines?
    */
    multiline: PropTypes.bool,

    /**
    * Input border-radius from theme or number to set border-radius in px
    */
     radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
    * Right section of input, similar to icon but on the right [PropTypes.node]
    */
    rightSection: PropTypes.any,

    /**
    * 	Width of right section, is used to calculate input padding-right
    */
    rightSectionWidth: PropTypes.number,

    /**
    * Defines input appearance, defaults to default in light color scheme and filled in dark
    */
    variant: PropTypes.oneOf(["default", "filled", "unstyled", "headless"]),

    /**
    * Properties spread to root element
    */
    wrapperProps: PropTypes.any,

    // InputWrapper props

    /**
    * Input description, displayed after label [PropTypes.node]
    */
    description: PropTypes.any,

    /**
    * Displays error message after input [PropTypes.node]
    */
    error: PropTypes.any,

    /**
    * Input label, displayed before input [PropTypes.node]
    */
    label: PropTypes.any,

    /**
    * Adds red asterisk on the right side of label
    */
    required: PropTypes.bool,

    /**
    * Input size
    */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    // Dash props

    /**
    * Input that should be wrapped
    */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
    * The ID of this component, used to identify dash components in callbacks
    */
    id: PropTypes.string,

    /**
    * Tells dash if any prop has changed its value
    */
    setProps: PropTypes.func,

    /**
    * Inline style override
    */
    style: PropTypes.object,
};


export default TimeInput;