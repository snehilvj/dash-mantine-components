import React from "react";
import { Progress as MantineProgress } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Give user feedback for status of the task. For more information, see: https://mantine.dev/core/progress/
 */
const Progress = (props) => {
    return <MantineProgress {...omit(["setProps"], props)} />;
};

Progress.displayName = "Progress";

Progress.defaultProps = {};

Progress.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Progress color from theme
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
     * Predefined progress radius from theme.radius or number for height in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Predefined progress height or number for height in px
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Replaces value if present, renders multiple sections instead of single one
     */
    sections: PropTypes.arrayOf(
        PropTypes.exact({
            value: PropTypes.number,
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
        })
    ),

    /**
     * Adds stripes
     */
    striped: PropTypes.bool,

    /**
     * Current value for controlled slider
     */
    value: PropTypes.number,
};

export default Progress;
