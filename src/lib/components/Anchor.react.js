import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Anchor as MantineAnchor } from "@mantine/core";

/**
 * Display links with theme styles. For more information, see: https://mantine.dev/core/anchor/
 */
const Anchor = (props) => {
    const { class_name } = props;

    return (
        <MantineAnchor
            {...omit(["setProps", "children", "class_name"], props)}
            className={class_name}
        >
            {props.children}
        </MantineAnchor>
    );
};

Anchor.displayName = "Anchor";

Anchor.defaultProps = {};

Anchor.propTypes = {
    /**
     * Sets text-align css property
     */
    align: PropTypes.oneOf(["left", "right", "center"]),

    /**
     * Primary content
     */
    children: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Text color from theme
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
     * Controls gradient settings in gradient variant only
     */
    gradient: PropTypes.exact({
        from: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        deg: PropTypes.number,
    }),

    /**
     * href
     */
    href: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Inherit font properties from parent element
     */
    inherit: PropTypes.bool,

    /**
     * Sets line-height to 1 for centering
     */
    inline: PropTypes.bool,

    /**
     * CSS -webkit-line-clamp property
     */
    lineClamp: PropTypes.number,

    /**
     * Predefined font-size from theme.fontSizes
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Target
     */
    target: PropTypes.oneOf(["_blank", "_self"]),

    /**
     * Sets text-transform css property
     */
    transform: PropTypes.oneOf(["capitalize", "uppercase", "lowercase"]),

    /**
     * Underline the text
     */
    underline: PropTypes.bool,

    /**
     * Link or text variant
     */
    variant: PropTypes.oneOf(["link", "gradient", "text"]),

    /**
     * Sets font-weight css property
     */
    weight: PropTypes.oneOfType([
        PropTypes.oneOf([
            "normal",
            "bold",
            "bolder",
            "lighter",
            "initial",
            "inherit",
        ]),
        PropTypes.number,
    ]),
};

export default Anchor;
