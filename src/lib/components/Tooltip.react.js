import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Tooltip as MantineTooltip } from "@mantine/core";
import { renderDashComponent } from "dash-extensions-js";

/**
 * Renders tooltip at given element on mouse over or any other event. For more information, see: https://mantine.dev/core/tooltip/
 */
const Tooltip = (props) => {
    const { class_name, label } = props;

    return (
        <MantineTooltip
            {...omit(["setProps", "class_name", "label"], props)}
            className={class_name}
            label={renderDashComponent(label)}
        >
            {props.children}
        </MantineTooltip>
    );
};

Tooltip.displayName = "Tooltip";

Tooltip.defaultProps = {};

Tooltip.propTypes = {
    /**
     * Arrow distance to the left/right * arrowSize
     */
    arrowDistance: PropTypes.number,

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
    class_name: PropTypes.string,

    /**
     * Close delay in ms, 0 to disable delay
     */
    closeDelay: PropTypes.number,

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
     * True to disable tooltip
     */
    disabled: PropTypes.bool,

    /**
     * Unmount transition duration in ms
     */
    exitTransitionDuration: PropTypes.number,

    /**
     * Spacing between element and popper in px
     */
    gutter: PropTypes.number,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Tooltip content
     */
    label: PropTypes.any.isRequired,

    /**
     * Open delay in ms, 0 to disable delay
     */
    openDelay: PropTypes.number,

    /**
     * Tooltip opened state for controlled variant
     */
    opened: PropTypes.bool,

    /**
     * Placement relative to reference element
     */
    placement: PropTypes.oneOf(["center", "end", "start"]),

    /**
     * Position relative to reference element
     */
    position: PropTypes.oneOf(["bottom", "left", "right", "top"]),

    /**
     * Radius from theme.radius, or number to set border-radius in px
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
     * Customize mount/unmount transition
     */
    transition: PropTypes.oneOf([
        "fade",
        "skew-up",
        "skew-down",
        "rotate-right",
        "rotate-left",
        "slide-down",
        "slide-up",
        "slide-right",
        "slide-left",
        "scale-y",
        "scale-x",
        "scale",
        "pop",
        "pop-top-left",
        "pop-top-right",
        "pop-bottom-left",
        "pop-bottom-right",
    ]),

    /**
     * Mount transition duration in ms
     */
    transitionDuration: PropTypes.number,

    /**
     * Mount/unmount transition timing function, defaults to theme.transitionTimingFunction
     */
    transitionTimingFunction: PropTypes.string,

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
     * Popper z-index
     */
    zIndex: PropTypes.number,
};

export default Tooltip;
