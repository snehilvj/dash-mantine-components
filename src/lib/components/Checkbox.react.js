import React from "react";
import { Checkbox as MantineCheckbox } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Capture boolean input from user. For more information, see: https://mantine.dev/core/checkbox/
 */
const Checkbox = (props) => {
    const { setProps } = props;

    const updateProps = (checked) => {
        setProps({ checked });
    };

    return (
        <MantineCheckbox
            onChange={(ev) => updateProps(ev.currentTarget.checked)}
            {...omit(["setProps"], props)}
        />
    );
};

Checkbox.displayName = "Checkbox";

Checkbox.defaultProps = {
    checked: false,
};

Checkbox.propTypes = {
    /**
     * State of check box
     */
    checked: PropTypes.bool,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Checkbox color
     */
    color: PropTypes.oneOf([
        "dark",
        "gray",
        "red",
        "pink",
        "grape",
        "violet",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "green",
        "lime",
        "yellow",
        "orange",
    ]),

    /**
     * A checkbox can show it is currently unable to be interacted with
     */
    disabled: PropTypes.bool,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Checkbox label
     */
    label: PropTypes.string,

    /**
     * Predefined label font-size and checkbox width and height in px
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Check/uncheck transition duration, set to 0 to disable all transitions
     */
    transitionDuration: PropTypes.number,
};

export default Checkbox;
