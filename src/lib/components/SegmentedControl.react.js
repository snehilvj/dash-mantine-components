import React from "react";
import { SegmentedControl as MantineSegmentedControl } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Horizontal control made of multiple segments, alternative to RadioGroup. For more information, see: https://mantine.dev/core/segmented-control/
 */
const SegmentedControl = (props) => {
    const { setProps } = props;

    const updateProps = (value) => {
        setProps({ value });
    };

    return (
        <MantineSegmentedControl
            onChange={updateProps}
            {...omit(["setProps"], props)}
        />
    );
};

SegmentedControl.displayName = "SegmentedControl";

SegmentedControl.defaultProps = {};

SegmentedControl.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

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
    data: PropTypes.arrayOf(
        PropTypes.exact({
            /** The option's label */
            label: PropTypes.string.isRequired,
            /** option's value */
            value: PropTypes.string.isRequired,
        })
    ).isRequired,

    /**
     * True if component should have 100% width
     */
    fullWidth: PropTypes.bool,

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string,
    }),

    /**
     * Border-radius from theme or number to set border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Controls font-size, paddings and height
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Current selected value
     */
    value: PropTypes.string,
};

export default SegmentedControl;
