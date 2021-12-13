import { Badge as MantineBadge } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import React from "react";

/**
 * Display badge, pill or tag. For more information, see: https://mantine.dev/core/badge/
 */
const Badge = (props) => {
    const { children } = props;

    return (
        <MantineBadge {...omit(["setProps", "children"], props)}>
            {children}
        </MantineBadge>
    );
};

Badge.displayName = "Badge";

Badge.defaultProps = {};

Badge.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Primary content
     */
    children: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Badge color from theme
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
     * Sets badge width to 100% of parent element, hides overflow text with text-overflow: ellipsis
     */
    fullWidth: PropTypes.bool,

    /**
     * Controls gradient settings in gradient variant only
     */
    gradient: PropTypes.exact({
        from: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        deg: PropTypes.number,
    }),

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
     * Predefined border-radius value from theme.radius or number for border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Predefined badge size
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Controls badge background, color and border styles
     */
    variant: PropTypes.oneOf(["light", "filled", "outline", "dot", "gradient"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Badge;
