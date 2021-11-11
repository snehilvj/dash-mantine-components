import React from "react";
import { TextInput as MantineTextInput } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { NumberSizes, Sizes } from "../propTypes";

/** Custom input with label and description. For more information, see: https://mantine.dev/core/text-input/ */
const TextInput = (props) => {
    const { setProps } = props;

    const updateProps = (value) => {
        setProps({ value });
    };

    return (
        <MantineTextInput
            {...omit(["setProps"], props)}
            onChange={(ev) => updateProps(ev.currentTarget.value)}
        />
    );
};

TextInput.displayName = "TextInput";

TextInput.defaultProps = {
    value: "",
};

TextInput.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Input description, displayed after label */
    description: PropTypes.string,

    /** The component can show it is currently unable to be interacted with */
    disabled: PropTypes.bool,

    /** Displays error message after input */
    error: PropTypes.string,

    /** Input label, displayed before input */
    label: PropTypes.string,

    /** Will input have multiple lines? */
    multiline: PropTypes.bool,

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

    /** The type of control to render. */
    type: PropTypes.string,

    /** Input value */
    value: PropTypes.node,
};

export default TextInput;
