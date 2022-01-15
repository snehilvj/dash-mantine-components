import React from "react";
import { Divider as MantineDivider } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { renderDashComponent } from "dash-extensions-js";

/**
 * Horizontal line with optional label or vertical divider. For more information, see: https://mantine.dev/core/divider/
 */
const Divider = (props) => {
    const { class_name, label } = props;
    return (
        <MantineDivider
            {...omit(["setProps", "class_name", "label"], props)}
            className={class_name}
            label={renderDashComponent(label)}
        />
    );
};

Divider.displayName = "Divider";

Divider.defaultProps = {};

Divider.propTypes = {
    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

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
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Adds text after line in horizontal orientation
     */
    label: PropTypes.any,

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
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Divider borderStyle
     */
    variant: PropTypes.oneOf(["dashed", "dotted", "solid"]),
};

export default Divider;
