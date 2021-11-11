import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Text as MantineText } from "@mantine/core";
import { GradientType, MantineColors, NumberSizes, Sizes } from "../propTypes";

/** Render text and links with theme styles. For more information, see: https://mantine.dev/core/text/ */
const Text = (props) => {
    return (
        <MantineText {...omit(["setProps", "children"], props)}>
            {props.children}
        </MantineText>
    );
};

Text.displayName = "Text";

Text.defaultProps = {};

Text.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Primary content */
    children: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Sets text-align css property */
    align: PropTypes.oneOf(["left", "right", "center"]),

    /** Text color from theme */
    color: MantineColors,

    /** Controls gradient settings in gradient variant only */
    gradient: GradientType,

    /**	Inherit font properties from parent element */
    inherit: PropTypes.bool,

    /** Sets line-height to 1 for centering */
    inline: PropTypes.bool,

    /** CSS -webkit-line-clamp property */
    lineClamp: PropTypes.number,

    /** Button border-radius from theme or number to set border-radius in px */
    radius: NumberSizes,

    /** Predefined font-size from theme.fontSizes */
    size: Sizes,

    /** Sets text-transform css property */
    transform: PropTypes.oneOf(["capitalize", "uppercase", "lowercase"]),

    /** Link or text variant */
    variant: PropTypes.oneOf(["link", "gradient", "text"]),

    /**	Sets font-weight css property */
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

    /** Inline style override */
    style: PropTypes.object,
};

export default Text;
