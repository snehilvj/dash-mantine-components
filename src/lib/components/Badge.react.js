import { Badge as MantineBadge } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import React from "react";
import { renderDashComponents } from "dash-extensions-js";

/**
 * Display badge, pill or tag. For more information, see: https://mantine.dev/core/badge/
 */
const Badge = (props) => {
    const { children, class_name } = props;
    let nProps = omit(["setProps", "children", "class_name"], props);
    nProps = renderDashComponents(nProps, ["leftSection", "rightSection"]);

    return (
        <MantineBadge {...nProps} className={class_name}>
            {children}
        </MantineBadge>
    );
};

Badge.displayName = "Badge";

Badge.defaultProps = {};

Badge.propTypes = {
    /**
     * Primary content
     */
    children: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

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
     * Section rendered on the left side of label
     */
    leftSection: PropTypes.any,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Predefined border-radius value from theme.radius or number for border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Section rendered on the right side of label
     */
    rightSection: PropTypes.any,

    /**
     * Predefined badge size
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Controls badge background, color and border styles
     */
    variant: PropTypes.oneOf(["light", "filled", "outline", "dot", "gradient"]),
};

export default Badge;
