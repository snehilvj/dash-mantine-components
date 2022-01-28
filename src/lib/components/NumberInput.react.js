import React from "react";
import { NumberInput as MantineNumberInput } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { renderDashComponents } from "dash-extensions-js";

/**
 * Capture number input from user. For more information, see: https://mantine.dev/core/number-input/
 */
const NumberInput = (props) => {
    const { setProps, class_name } = props;
    let nProps = omit(["setProps", "class_name"], props);
    nProps = renderDashComponents(nProps, [
        "label",
        "description",
        "rightSection",
        "icon",
        "error",
    ]);

    const updateProps = (value) => {
        setProps({ value });
    };

    return (
        <MantineNumberInput
            {...nProps}
            className={class_name}
            onChange={(value) => updateProps(value)}
        />
    );
};

NumberInput.displayName = "NumberInput";

NumberInput.defaultProps = {
    value: "",
};

NumberInput.propTypes = {

    /**
     * The decimal separator
     */
    decimalSeparator: PropTypes.string,

    /**
     * Default value for uncontrolled variant only
     */
    defaultValue: PropTypes.number,

    /**
     * Input description, displayed after label
     */
    description: PropTypes.any,

    /**
     * The component can show it is currently unable to be interacted with
     */
    disabled: PropTypes.bool,

    /**
     * Displays error message after input
     */
    error: PropTypes.any,

    /**
     * Removes increment/decrement controls
     */
    hideControls: PropTypes.bool,

    /**
     * Adds icon on the left side of input
     */
    icon: PropTypes.any,

    /**
     * Width of icon section in px
     */
    iconWidth: PropTypes.number,

    /**
     * Sets border color to red and aria-invalid=true on input element
     */
    invalid: PropTypes.bool,

    /**
     * Input label, displayed before input
     */
    label: PropTypes.any,

    /**
     * Maximum possible value
     */
    max: PropTypes.number,

    /**
     * Minimal possible value
     */
    min: PropTypes.number,

    /**
     * Will input have multiple lines?
     */
    multiline: PropTypes.bool,

    /**
     * Prevent value clamp on blur
     */
    noClampOnBlur: PropTypes.bool,

    /**
     * Amount of digits after the decimal point
     */
    precision: PropTypes.number,

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
     * Input size
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Number by which value will be incremented/decremented with controls and up/down arrows
     */
    step: PropTypes.number,

    /**
     * Initial delay in milliseconds before stepping the value
     */
    stepHoldDelay: PropTypes.number,

    /**
     * The type of control to render.
     */
    type: PropTypes.oneOf(["number", "search", "text", "tel", "url", "email", "password"]),

    /**
     * Input value
     */
    value: PropTypes.node,

    /**
     * Defines input appearance, defaults to default in light color scheme and filled in dark
     */
    variant: PropTypes.oneOf(["default", "filled", "unstyled", "headless"]),

    // Dash related props.

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

export default NumberInput;
