import { Skeleton as MantineSkeleton } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import React from "react";

/**
 * Indicate content loading state. For more information, see: https://mantine.dev/core/skeleton/
 */
const Skeleton = (props) => {
    const { children, visible, loading_state } = props;

    return (
        <MantineSkeleton
            {...omit(["setProps", "children", "visible"], props)}
            visible={visible || (loading_state && loading_state.is_loading)}
        >
            {children}
        </MantineSkeleton>
    );
};

Skeleton.displayName = "Skeleton";

Skeleton.defaultProps = {};

Skeleton.propTypes = {
    /**
     * Whether to show the animation effect
     */
    animate: PropTypes.bool,

    /**
     * Primary content
     */
    children: PropTypes.node,

    /**
     * If Skeleton is a circle, it's width and border-radius will be equal to height
     */
    circle: PropTypes.bool,

    /**
     * Skeleton height
     */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

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
     * Radius from theme.radius or number to set border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Should skeleton overlay be displayed
     */
    visible: PropTypes.bool,

    /**
     * Skeleton width
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Skeleton;
