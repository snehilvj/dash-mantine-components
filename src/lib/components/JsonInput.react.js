import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { JsonInput as MantineJsonInput } from "@mantine/core";
import {renderDashComponents} from "dash-extensions-js"

/**
 * JsonInput. For more information, see: https://mantine.dev/core/json-input/
 */
const JsonInput = (props) => {
    const { class_name, setProps } = props;
    let nProps = omit(["setProps", "class_name"], props);
    // Render react nodes.
    nProps = renderDashComponents(nProps, ["icon", "rightSection", "validationError", "description", "error", "label"]);
    // Bind OnChange event.
    const onChange = value => setProps({ value });
    // Render component
    return (
        <MantineJsonInput
            {...nProps}
            className={class_name}
            onChange={onChange}
        >
        </MantineJsonInput>
    );
};

JsonInput.displayName = "JsonInput";

JsonInput.defaultProps = {};

JsonInput.propTypes = {
    /**
    * Value for controlled input
    */
    value: PropTypes.string,

    /**
    * Error message shown when json is not valid [PropTypes.node]
    */
    validationError: PropTypes.any,

    /**
    * Format json on blur
    */
    formatOnBlue: PropTypes.bool,

    /**
    * If true textarea will grow with content until maxRows are reached
    */
    autosize: PropTypes.bool,

    /**
    * Default value for uncontrolled input
    */
    defaultValue: PropTypes.string,

    /**
    * Defines maxRows in autosize variant, not applicable to regular variant
    */
    maxRows: PropTypes.number,

    /**
    * Defines minRows in autosize variant, not applicable to regular variant
    */
    minRows: PropTypes.number,

    // Input props

    /**
    * Tag or component that should be used as root element
    */
    component: PropTypes.any,

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


export default JsonInput;
