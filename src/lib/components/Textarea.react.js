import React from "react";
import { Textarea as MantineTextarea } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { renderDashComponents } from "dash-extensions-js";

/**
 * Renders textarea with optional autosize variant. For more information, see: https://mantine.dev/core/Textarea/
 */
const Textarea = (props) => {
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
        <MantineTextarea
            {...nProps}
            className={class_name}
            onChange={(ev) => updateProps(ev.currentTarget.value)}
        />
    );
};

Textarea.displayName = "Textarea";

Textarea.defaultProps = {
    value: "",
};

Textarea.propTypes = {
    /**
     * If true Textarea will grow with content until maxRows are reached
     */
    autosize: PropTypes.bool,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

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
     * Adds icon on the left side of input
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
     * Input label, displayed before input
     */
    label: PropTypes.any,

    /**
     * Defines maxRows in autosize variant, not applicable to regular variant
     */
    maxRows: PropTypes.number,

    /**
     * Defined minRows in autosize variant and rows in regular variant
     */
    minRows: PropTypes.number,

    /**
     * Placeholder, displayed when date is not selected
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
     * Right section of input, similar to icon but on the right
     */
    rightSection: PropTypes.any,

    /**
     * Width of right section, is used to calculate input padding-right
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
     * Input value
     */
    value: PropTypes.node,

    /**
     * Defines input appearance, defaults to default in light color scheme and filled in dark
     */
    variant: PropTypes.oneOf(["default", "filled", "unstyled", "headless"]),
};

export default Textarea;
