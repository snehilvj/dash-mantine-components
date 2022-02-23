import { useState, useEffect } from 'react';
import { Popover as MantinePopOver, Button } from '@mantine/core';
import PropTypes from "prop-types";
import { omit } from "ramda";

const Popover = (props) => {

    const { setProps, children, opened, class_name, target } = props
    const [isOpen, setIsOpened] = useState(opened);

    useEffect(() => {
        setProps({ opened: isOpen });
    }, [isOpen]);

    const clickResponse = () => {
        setIsOpened((open) => setIsOpened(!open));
    }

    const closeClick = () => {
        setIsOpened(false);
    }

    return (
        <MantinePopOver
            {...omit(["children", "setProps", "class_name", "target"], props)}
            onClose={closeClick}
            className={class_name}
            target={target ? target : (<Button id='button-click'
                style={{ background: 'green' }}
                onClick={clickResponse}>Test Button</Button>)}
        >
            {children}
        </MantinePopOver>
    );
}

Popover.displayName = "Popover";

Popover.defaultProps = {};

Popover.propTypes = {

    /**
     * Arrow distance to the left/right * arrowSize
     */
    arrowDistance: PropTypes.number,

    /**
     * Arrow size in px
     */
    arrowSize: PropTypes.number,

    /**
     * Content inside popover
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * 	Events that should trigger outside clicks
     */
    clickOutsideEvents: PropTypes.string,

    /**
     * aria-label for close button
     */
    closeButtonLabel: PropTypes.string,

    /**
     * True to disable popover
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
     * Disable closing by click outside
     */
    noClickOutside: PropTypes.bool,


    /**
     * Disables close on escape
     */
    noEscape: PropTypes.bool,

    /**
     * 	Disable focus trap (may impact close on escape feature)
     */
    noFocusTrap: PropTypes.bool,

    /**
     * True to display popover
     */
    opened: PropTypes.bool.isRequired,

    /**
    * Spacing from theme.radius, or number to set border-radius in px
    */
    placement: PropTypes.oneOf(["center", "end", "start"]),

    /**
     * Position relative to reference element
     */
    position: PropTypes.oneOf(["bottom", "left", "right", "top"]),

    /**
    * useEffect dependencies to force update tooltip position
    */
    positionDependencies: PropTypes.any,

    /**
     * Radius from theme.radius, or number to set border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
    * Tells dash if any prop has changed its value
    */
    setProps: PropTypes.func,

    /**
     * Popover shadow, value from theme.shadows 
     * or string to set box-shadow to any value
     */
    shadow: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Spacing from theme.radius, or number to set border-radius in px
     */
    spacing: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),


    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Element which is used to position popover
     */
    target: PropTypes.node,

    /**
     * Optional popover title
     */
    title: PropTypes.node,

    /**
     * Customize mount/unmount transition
     */
    transition: PropTypes.string,

    /**
    * Mount transition duration in ms
    */
    transitionDuration: PropTypes.number,

    /**
     * Mount/unmount transition timing function, 
     * defaults to theme.transitionTimingFunction
     */
    transitionTimingFunction: PropTypes.string,

    /**
     * Popover body width
     */
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * Renders arrow if true
     */
    withArrow: PropTypes.bool,

    /**
     * Adds close button
     */
    withCloseButton: PropTypes.bool,

    /**
     * 	Whether to render the popover in a Portal
     */
    withinPortal: PropTypes.bool,

    /**
     * 	Popper z-index
     */
    zIndex: PropTypes.number,

}

export default Popover;


