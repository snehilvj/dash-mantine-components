import React from "react";
import PropTypes from "prop-types";
import { Loader as MantineLoader } from "@mantine/core";
import { omit } from "ramda";

/**
 * Indicate loading state. For more information, see: https://mantine.dev/core/loader/
 */
const Loader = (props) => {
    const { class_name } = props;

    return (
        <MantineLoader
            {...omit(["setProps", "class_name"], props)}
            className={class_name}
        />
    );
};

Loader.displayName = "Loader";

Loader.defaultProps = {};

Loader.propTypes = {
    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */

    id: PropTypes.string,

    /**
     * Loader color from theme
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
     * Defines width of loader
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
     * 	Loader appearance
     */
    variant: PropTypes.oneOf(["bars", "oval", "dots"]),
};

export default Loader;
