import { LoadingOverlay as MantineLoadingOverlay } from "@mantine/core";
import PropTypes from "prop-types";
import { omit, mergeRight } from "ramda";
import React from "react";

/**
 * Similar to dcc.Loading, overlay over given container with centered Loader from Mantine Theme. For more information, see: https://mantine.dev/core/loading-overlay/
 */
const LoadingOverlay = (props) => {
    const { loading_state, class_name, id, children, style } = props;
    const newStyle = mergeRight({ position: "relative" }, style);

    return (
        <div className={class_name} id={id} style={newStyle}>
            <MantineLoadingOverlay
                {...omit(["setProps", "id", "class_name", "children"], props)}
                visible={loading_state && loading_state.is_loading}
            />
            {children}
        </div>
    );
};

LoadingOverlay.displayName = "LoadingOverlay";

LoadingOverlay._dashprivate_isLoadingComponent = true;

LoadingOverlay.defaultProps = {};

LoadingOverlay.propTypes = {
    /**
     * Content
     */
    children: PropTypes.node,

    /**
     *  Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Provide custom loader
     */
    loader: PropTypes.node,

    /**
     * Loader component props
     */
    loaderProps: PropTypes.exact({
        /**
         * Loader color from theme
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
         * Defines width of loader
         */
        size: PropTypes.oneOfType([
            PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
            PropTypes.number,
        ]),

        /**
         * 	Loader appearance
         */
        variant: PropTypes.oneOf(["bars", "oval", "dots"]),
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
     * Sets overlay color, defaults to theme.white in light theme and to theme.colors.dark[5] in dark theme
     */
    overlayColor: PropTypes.string,

    /**
     * Sets overlay opacity
     */
    overlayOpacity: PropTypes.number,

    /**
     * Value from theme.radius or number to set border-radius in px
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
     * Appear and disappear animation duration
     */
    transitionDuration: PropTypes.number,

    /**
     * Loading overlay z-index
     */
    zIndex: PropTypes.number,
};

export default LoadingOverlay;
