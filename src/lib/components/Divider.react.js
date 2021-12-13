import React from "react";
import { Divider as MantineDivider } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";

/**
 * Horizontal line with optional label or vertical divider. For more information, see: https://mantine.dev/core/divider/
 */
const Divider = (props) => {
    return <MantineDivider {...omit(["setProps"], props)} />;
};

Divider.displayName = "Divider";

Divider.defaultProps = {};

Divider.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Line color from theme, defaults to gray in light color scheme and to dark in dark color scheme
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
     * Adds text after line in horizontal orientation
     */
    label: PropTypes.string,

    /**
     * Label position
     */
    labelPosition: PropTypes.oneOf(["right", "left", "center"]),

    /**
     * Line orientation
     */
    orientation: PropTypes.oneOf(["horizontal", "vertical"]),

    /**
     * Sets height in horizontal orientation and width in vertical
     */
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Divider borderStyle
     */
    variant: PropTypes.oneOf(["dashed", "dotted", "solid"]),
};

export default Divider;
