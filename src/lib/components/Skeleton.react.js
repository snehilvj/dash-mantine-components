import { Skeleton as MantineSkeleton } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import React from "react";
import { NumberSizes, NumberString } from "../propTypes";

/** Indicate content loading state. For more information, see: https://mantine.dev/core/skeleton/ */
const Skeleton = (props) => {
    const { children } = props;
    return (
        <MantineSkeleton {...omit(["setProps", "children"], props)}>
            {children}
        </MantineSkeleton>
    );
};

Skeleton.displayName = "Skeleton";

Skeleton.defaultProps = {};

Skeleton.propTypes = {
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Primary content */
    children: PropTypes.node,

    /** If Skeleton is a circle, it's width and border-radius will be equal to height */
    circle: PropTypes.bool,

    /**	Skeleton height */
    height: NumberString,

    /** Radius from theme.radius or number to set border-radius in px */
    radius: NumberSizes,

    /** Should skeleton overlay be displayed */
    visible: PropTypes.bool,

    /** Skeleton width */
    width: NumberString,
};

export default Skeleton;
