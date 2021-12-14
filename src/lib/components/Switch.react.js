import React from "react";
import { Switch as MantineSwitch } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Capture user feedback limited to small set of options. For more information, see: https://mantine.dev/core/switch/
 */
const Switch = (props) => {
    const { setProps } = props;

    const updateProps = (checked) => {
        setProps({ checked });
    };

    return (
        <MantineSwitch
            onChange={(ev) => updateProps(ev.currentTarget.checked)}
            {...omit(["setProps"], props)}
        />
    );
};

Switch.displayName = "Switch";

Switch.defaultProps = {
    checked: false,
};

Switch.propTypes = {
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
     * Predefined border-radius value from theme.radius or number for border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Predefined label font-size and checkbox width and height in px
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * State of check box
     */
    checked: PropTypes.bool,
};

export default Switch;
