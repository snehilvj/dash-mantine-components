import React from "react";
import { Progress as MantineProgress } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Give user feedback for status of the task. For more information, see: https://mantine.dev/core/progress/
 */
const Progress = (props) => {
    const { class_name } = props;

    return (
        <MantineProgress
            {...omit(["setProps", "class_name"], props)}
            className={class_name}
        />
    );
};

Progress.displayName = "Progress";

Progress.defaultProps = {};

Progress.propTypes = {
    /**
     * Whether to animate striped progress bars
     */
    animate: PropTypes.bool,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

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
     * Text to be placed inside the progress bar
     */
    label: PropTypes.string,

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
            label: PropTypes.string,
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
