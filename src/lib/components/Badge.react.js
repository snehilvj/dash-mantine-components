import { Badge as MantineBadge } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import React from "react";
import { GradientType, MantineColors, NumberSizes, Sizes } from "../propTypes";

/** Display badge, pill or tag. For more information, see: https://mantine.dev/core/badge/ */
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
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Primary content */
    children: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Badge color from theme */
    color: MantineColors,

    /** Sets badge width to 100% of parent element, hides overflow text with text-overflow: ellipsis */
    fullWidth: PropTypes.bool,

    /** Controls gradient settings in gradient variant only */
    gradient: GradientType,

    /** Predefined border-radius value from theme.radius or number for border-radius in px */
    radius: NumberSizes,

    /** Predefined badge size */
    size: Sizes,

    /** Controls badge background, color and border styles */
    variant: PropTypes.oneOf(["light", "filled", "outline", "dot", "gradient"]),

    /** Inline style override */
    style: PropTypes.object,
};

export default Badge;
