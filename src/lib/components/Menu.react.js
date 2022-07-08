/* eslint-disable no-undefined */
import { Menu as MantineMenu } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import React from "react";

/**
 * Combine a list of secondary actions into single interactive area. For more information, see: https://mantine.dev/core/menu/
 */
const Menu = (props) => {
    const { children, class_name, control, wrappingDivClassName, wrappingDivStyle } = props;

    return (
        <MantineMenu
            {...omit(["children", "setProps", "class_name", "control"], props)}
            className={class_name}
            control={<div {...{wrappingDivClassName, wrappingDivStyle}}>{control}</div>}
        >
            {children}
        </MantineMenu>
    );
};

Menu.displayName = "Menu";

Menu.defaultProps = {};

Menu.propTypes = {
    /**
     * 	Arrow distance to the left/right * arrowSize
     */
    arrowDistance: PropTypes.number,

    /**
     * Arrow size in px
     */
    arrowSize: PropTypes.number,

    /**
     * dmc.MenuItem, dmc.MenuLabel, and dmc.Divider components only, children are passed to MenuBody component
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Should menu close on item click
     */
    closeOnItemClick: PropTypes.bool,

    /**
     * Close menu on scroll
     */
    closeOnScroll: PropTypes.bool,

    /**
     * Menu button component
     */
    control: PropTypes.node,

    /**
     * Close delay for hover trigger
     */
    delay: PropTypes.number,

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
     * Placement relative to reference element
     */
    placement: PropTypes.oneOf(["center", "end", "start"]),

    /**
     * Position relative to reference element
     */
    position: PropTypes.oneOf(["bottom", "left", "right", "top"]),

    /**
     * Menu body and items border-radius
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Predefined shadow from theme or box-shadow value
     */
    shadow: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.string,
    ]),

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Predefined menu width or number for width in px
     */
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["auto", "xs", "sm", "md", "lg", "xl"]),
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
     * 	Should focus be trapped when menu is opened
     */
    trapFocus: PropTypes.bool,

    /**
     * Event which should open menu
     */
    trigger: PropTypes.oneOf(["hover", "click"]),

    /**
     * Renders arrow if true
     */
    withArrow: PropTypes.bool,

    /**
     * Wrapping target div class
     */
    wrappingDivClassName: PropTypes.string,

    /**
     * Wrapping target div style
     */
    wrappingDivStyle: PropTypes.object,

    /**
     * 	Menu body z-index
     */
    zIndex: PropTypes.number,
};

export default Menu;
