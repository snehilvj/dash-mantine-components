import React from "react";
import { SegmentedControl as MantineSegmentedControl } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Horizontal control made of multiple segments, alternative to RadioGroup. For more information, see: https://mantine.dev/core/segmented-control/
 */
const SegmentedControl = (props) => {
    const { setProps, class_name } = props;

    const updateProps = (value) => {
        setProps({ value });
    };

    return (
        <MantineSegmentedControl
            onChange={updateProps}
            {...omit(["setProps", "class_name"], props)}
            className={class_name}
        />
    );
};

SegmentedControl.displayName = "SegmentedControl";

SegmentedControl.defaultProps = {};

SegmentedControl.propTypes = {
    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Active control color from theme.colors, defaults to white in light color scheme and theme.colors.dark[9] in dark
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
     * Data based on which controls are rendered
     */
    data: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.exact({
                /**
                 * The option's label
                 */
                label: PropTypes.string.isRequired,
                /**
                 * Option's value
                 */
                value: PropTypes.string.isRequired,
            })
        ),
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,

    /**
     * Disabled input state
     */
    disabled: PropTypes.bool,

    /**
     * True if component should have 100% width
     */
    fullWidth: PropTypes.bool,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Display Vertically or horizontally
     */
    orientation: PropTypes.oneOf(["horizontal", "vertical"]),

    /**
     * Border-radius from theme or number to set border-radius in px
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
     * Controls font-size, paddings and height
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Transition duration in ms, set to 0 to turn off transitions
     */
    transitionDuration: PropTypes.number,

    /**
     * Transition timing function for all transitions, defaults to theme.transitionTimingFunction
     */
    transitionTimingFunction: PropTypes.string,

    /**
     * Current selected value
     */
    value: PropTypes.string,
};

export default SegmentedControl;
