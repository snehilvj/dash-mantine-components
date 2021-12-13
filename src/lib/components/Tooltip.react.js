import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Tooltip as MantineTooltip } from "@mantine/core";

/**
 * Renders tooltip at given element on mouse over or any other event. For more information, see: https://mantine.dev/core/tooltip/
 */
const Tooltip = (props) => {
    return (
        <MantineTooltip {...omit(["setProps"], props)}>
            {props.children}
        </MantineTooltip>
    );
};

Tooltip.displayName = "Tooltip";

Tooltip.defaultProps = {};

Tooltip.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Arrow size in px
     */
    arrowSize: PropTypes.number,

    /**
     * Any react node that should trigger tooltip
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Any color from theme.colors, defaults to gray in light color scheme and dark in dark colors scheme
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
     * Close delay in ms, 0 to disable delay
     */
    delay: PropTypes.number,

    /**
     * True to disable tooltip
     */
    disabled: PropTypes.bool,

    /**
     * Spacing between element and popper in px
     */
    gutter: PropTypes.number,

    /**
     * Tooltip content
     */
    label: PropTypes.string.isRequired,

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
     * Placement relative to reference element
     */
    placement: PropTypes.oneOf(["center", "end", "start"]),

    /**
     * Position relative to reference element
     */
    position: PropTypes.oneOf(["right", "center", "left", "apart"]),

    /**
     * Tooltip width in px or auto
     */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),

    /**
     * Renders arrow if true
     */
    withArrow: PropTypes.bool,

    /**
     * Allow multiline tooltip content
     */
    wrapLines: PropTypes.bool,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Popper z-index
     */
    zIndex: PropTypes.number,
};

export default Tooltip;
