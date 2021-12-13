import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Anchor as MantineAnchor } from "@mantine/core";

/**
 * Display links with theme styles. For more information, see: https://mantine.dev/core/anchor/
 */
const Anchor = (props) => {
    return (
        <MantineAnchor {...omit(["setProps", "children"], props)}>
            {props.children}
        </MantineAnchor>
    );
};

Anchor.displayName = "Anchor";

Anchor.defaultProps = {};

Anchor.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Primary content
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Sets text-align css property
     */
    align: PropTypes.oneOf(["left", "right", "center"]),
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
     * Predefined font-size from theme.fontSizes
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Target
     */
    target: PropTypes.oneOf(["_blank", "_self"]),

    /**
     * Sets text-transform css property
     */
    transform: PropTypes.oneOf(["capitalize", "uppercase", "lowercase"]),

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

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Anchor;
