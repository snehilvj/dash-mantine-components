import { useState, useEffect } from 'react';
import { Popover as MantinePopOver, Button } from '@mantine/core';
import PropTypes from "prop-types";
import { omit } from "ramda";

const Popover = (props) => {

    const { setProps, children, opened } = props
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
            {...omit(["children", "setProps"], props)}
            onClose={closeClick}
            target={props.target ? props.target : (<Button id='button-click' style={{ background: 'green' }}
                onClick={clickResponse}>Button</Button>)}
        >
            {children}
        </MantinePopOver>
    );
}

Popover.displayName = "Popover";

Popover.defaultProps = {};

Popover.propTypes = {

    /**
     * Content inside popover
     */
    children: PropTypes.node,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * True to display popover
     */
    opened: PropTypes.bool.isRequired,

    /**
     * Arrow distance to the left/right * arrowSize
     */
    arrowDistance: PropTypes.number,

    /**
     * Arrow size in px
     */
    arrowSize: PropTypes.number,

    /**
     * True to disable popover
     */
    disabled: PropTypes.bool,

    /**
     * Spacing between element and popper in px
     */
    gutter: PropTypes.number,

    /**
     * Disable closing by click outside
     */
    noClickOutside: PropTypes.bool,

    /**
     * aria-label for close button
     */
    closeButtonLabel: PropTypes.string,

    /**
     * Disables close on escape
     */
    noEscape: PropTypes.bool,

    /**
     * 	Disable focus trap (may impact close on escape feature)
     */
    noFocusTrap: PropTypes.bool,

    /**
     * Optional popover title
     */
    title: PropTypes.node,

    /**
     * Optional popover title
     */
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * Radius from theme.radius, or number to set border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Spacing from theme.radius, or number to set border-radius in px
     */
    spacing: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Customize mount/unmount transition
     */
    transition: PropTypes.string,

    /**
     * Mount transition duration in ms
     */
    transitionDuration: PropTypes.number,

    /**
     * Unmount transition duration in ms
     */
    exitTransitionDuration: PropTypes.number,

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
     * Spacing from theme.radius, or number to set border-radius in px
     */
    placement: PropTypes.oneOf(["center", "end", "start"]),

    /**
     * Position relative to reference element
     */
    position: PropTypes.oneOf(["bottom", "left", "right", "top"]),

    /**
     * Popover shadow, value from theme.shadows 
     * or string to set box-shadow to any value
     */
    shadow: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Element which is used to position popover
     */
    target: PropTypes.node,

    /**
     * Mount/unmount transition timing function, 
     * defaults to theme.transitionTimingFunction
     */
    transitionTimingFunction: PropTypes.string,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,
}

export default Popover;

