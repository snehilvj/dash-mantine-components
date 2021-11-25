import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Anchor as MantineAnchor } from "@mantine/core";
import {
    FontWeights,
    GradientType,
    MantineColors,
    Sizes,
    TextAlignProperty,
    TextVariants,
    TransformTypes,
} from "../propTypes";

/** Display links with theme styles. For more information, see: https://mantine.dev/core/anchor/ */
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
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Primary content */
    children: PropTypes.node,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Sets text-align css property */
    align: TextAlignProperty,

    /** Text color from theme */
    color: MantineColors,

    /** Controls gradient settings in gradient variant only */
    gradient: GradientType,

    /** href */
    href: PropTypes.string,

    /**	Inherit font properties from parent element */
    inherit: PropTypes.bool,

    /** Sets line-height to 1 for centering */
    inline: PropTypes.bool,

    /** CSS -webkit-line-clamp property */
    lineClamp: PropTypes.number,

    /** Predefined font-size from theme.fontSizes */
    size: Sizes,

    /** Target */
    target: PropTypes.oneOf(["_blank", "_self"]),

    /** Sets text-transform css property */
    transform: TransformTypes,

    /** Link or text variant */
    variant: TextVariants,

    /**	Sets font-weight css property */
    weight: FontWeights,

    /** Inline style override */
    style: PropTypes.object,
};

export default Anchor;
