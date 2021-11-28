import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Text as MantineText } from "@mantine/core";
import {
    FontWeights,
    GradientType,
    MantineColors,
    Sizes,
    TextAlignProperty,
    TextVariants,
    TransformTypes,
} from "../propTypes";

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
    children: PropTypes.node,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Sets text-align css property */
    align: TextAlignProperty,

    /** Text color from theme */
    color: PropTypes.oneOfType([MantineColors, PropTypes.oneOf(["dimmed"])]),

    /** Controls gradient settings in gradient variant only */
    gradient: GradientType,

    /**	Inherit font properties from parent element */
    inherit: PropTypes.bool,

    /** Sets line-height to 1 for centering */
    inline: PropTypes.bool,

    /** CSS -webkit-line-clamp property */
    lineClamp: PropTypes.number,

    /** Predefined font-size from theme.fontSizes */
    size: Sizes,

    /** Sets text-transform css property */
    transform: TransformTypes,

    /** Link or text variant */
    variant: TextVariants,

    /**	Sets font-weight css property */
    weight: FontWeights,

    /** Inline style override */
    style: PropTypes.object,
};

export default Text;
