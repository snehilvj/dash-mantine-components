import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { JsonInput as MantineJsonInput } from "@mantine/core";
import { renderDashComponents } from "dash-extensions-js";

/**
 * Capture json data from user. For more information, see: https://mantine.dev/core/json-input/
 */
const JsonInput = (props) => {
    const { class_name, setProps } = props;
    let nProps = omit(["setProps", "class_name"], props);
    nProps = renderDashComponents(nProps, [
        "icon",
        "rightSection",
        "validationError",
        "description",
        "error",
        "label",
    ]);

    const onChange = (value) => setProps({ value });

    return (
        <MantineJsonInput
            {...nProps}
            className={class_name}
            onChange={onChange}
        />
    );
};

JsonInput.displayName = "JsonInput";

JsonInput.defaultProps = {};

JsonInput.propTypes = {
    /**
     * If true textarea will grow with content until maxRows are reached
     */
    autosize: PropTypes.bool,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

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
     * Format json on blur
     */
    formatOnBlur: PropTypes.bool,

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
     * Input label, displayed before input [PropTypes.node]
     */
    label: PropTypes.any,

    /**
     * Defines maxRows in autosize variant, not applicable to regular variant
     */
    maxRows: PropTypes.number,

    /**
     * Defines minRows in autosize variant, not applicable to regular variant
     */
    minRows: PropTypes.number,

    /**
     * Placeholder
     */
    placeholder: PropTypes.string,

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
     * Error message shown when json is not valid [PropTypes.node]
     */
    validationError: PropTypes.any,

    /**
     * Value for controlled input
     */
    value: PropTypes.string,

    /**
     * Defines input appearance, defaults to default in light color scheme and filled in dark
     */
    variant: PropTypes.oneOf(["default", "filled", "unstyled", "headless"]),
};

export default JsonInput;
