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
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Predefined progress radius from theme.radius or number for height in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

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
     * Predefined progress height or number for height in px
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

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
