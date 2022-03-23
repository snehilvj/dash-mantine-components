import React, { useState, useEffect } from "react";
import { Drawer as MantineDrawer } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { renderDashComponent } from "dash-extensions-js";

/**
 * Display overlay area at any side of the screen. For more information, see: https://mantine.dev/core/drawer/
 */
const Drawer = (props) => {
    const { opened, children, setProps, class_name, title } = props;
    const [open, setOpen] = useState(opened);

    useEffect(() => {
        setOpen(opened);
    }, [opened]);

    const onClose = () => {
        setOpen(false);
        setProps({ opened: false });
    };

    return (
        <MantineDrawer
            {...omit(
                ["opened", "setProps", "children", "class_name", "title"],
                props
            )}
            opened={open}
            onClose={onClose}
            className={class_name}
            title={renderDashComponent(title)}
        >
            {children}
        </MantineDrawer>
    );
};

Drawer.displayName = "Drawer";

Drawer.defaultProps = {
    opened: false,
};

Drawer.propTypes = {
    /**
     * Drawer children components
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Disable onClick trigger for outside events
     */
    closeOnClickOutside: PropTypes.bool,

    /**
     * Disable onClick trigger for escape key press
     */
    closeOnEscape: PropTypes.bool,

    /**
     * Hides close button, modal still can be closed with escape key and by clicking outside
     */
    hideCloseButton: PropTypes.bool,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Disables scroll lock
     */
    lockScroll: PropTypes.bool,

    /**
     * If true drawer is mounted to the dom
     */
    opened: PropTypes.bool,

    /**
     * Sets overlay color, defaults to theme.black in light theme and to theme.colors.dark[9] in dark theme
     */
    overlayColor: PropTypes.string,

    /**
     * Sets overlay opacity, defaults to 0.75 in light theme and to 0.85 in dark theme
     */
    overlayOpacity: PropTypes.number,

    /**
     * Drawer body padding from theme or number for padding in px
     */
    padding: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Drawer body position
     */
    position: PropTypes.oneOf(["left", "right", "top", "bottom"]),

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Drawer body shadow from theme or any css shadow value
     */
    shadow: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Drawer body width (right | left position) or height (top | bottom position), cannot exceed 100vh for height and 100% for width
     */
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.string,
        PropTypes.number,
    ]),

    /**
     * Drawer title, displayed in header before close button
     */
    title: PropTypes.any,

    /**
     * Drawer appear and disappear transition, see Transition component for full documentation
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
     * Transition duration in ms
     */
    transitionDuration: PropTypes.number,

    /**
     * Drawer transitionTimingFunction css property
     */
    transitionTimingFunction: PropTypes.string,

    /**
     * Disables focus trap
     */
    trapFocus: PropTypes.bool,

    /**
     * Hides close button if set to false, drawer still can be closed with escape key and by clicking outside
     */
    withCloseButton: PropTypes.bool,

    /**
     * Removes overlay entirely
     */
    withOverlay: PropTypes.bool,

    /**
     * Popper zIndex
     */
    zIndex: PropTypes.number,
};

export default Drawer;
