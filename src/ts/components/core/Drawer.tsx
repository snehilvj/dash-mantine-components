import React, { useState, useEffect } from "react";
import { DashComponentProps, MantineTransition } from "../../props";
import { Drawer as MantineDrawer, DrawerPosition } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** If true drawer is mounted to the dom */
    opened: boolean;
    /** Drawer body position */
    position?: DrawerPosition;
    /** Drawer body width (right | left position) or height (top | bottom position), cannot exceed 100vh for height and 100% for width */
    size?: string | number;
    /** Drawer body shadow from theme or any css shadow value */
    shadow?: MantineSize;
    /** Drawer body padding from theme or number for padding in px */
    padding?: MantineSize;
    /** Drawer z-index property */
    zIndex?: number;
    /** Disables focus trap */
    trapFocus?: boolean;
    /** Disables scroll lock */
    lockScroll?: boolean;
    /** Disable onMouseDown trigger for outside events */
    closeOnClickOutside?: boolean;
    /** Disable onKeyDownCapture trigger for escape key press */
    closeOnEscape?: boolean;
    /** Drawer appear and disappear transition, see Transition component for full documentation */
    transition?: MantineTransition;
    /** Transition duration in ms */
    transitionDuration?: number;
    /** Drawer transitionTimingFunction css property */
    transitionTimingFunction?: string;
    /** Removes overlay entirely */
    withOverlay?: boolean;
    /** Overlay opacity, number from 0 to 1 */
    overlayOpacity?: number;
    /** Overlay color, for example, #000 */
    overlayColor?: string;
    /** Overlay blur in px */
    overlayBlur?: number;
    /** Drawer title, displayed in header before close button */
    title?: React.ReactNode;
    /** Hides close button if set to false, drawer still can be closed with escape key and by clicking outside */
    withCloseButton?: boolean;
    /** Close button aria-label */
    closeButtonLabel?: string;
    /** Determines whether drawer should be rendered within Portal, defaults to true */
    withinPortal?: boolean;
    /** Determines whether focus should be returned to the last active element when drawer is closed */
    withFocusReturn?: boolean;
    /** Drawer Content **/
    children?: React.ReactNode;
} & DashComponentProps;

/**
 * Display overlay area at any side of the screen. For more information, see: https://mantine.dev/core/drawer/
 */
const Drawer = (props: Props) => {
    const { setProps, opened, children, ...other } = props;
    const [open, setOpen] = useState(opened);

    useEffect(() => {
        setOpen(opened);
    }, [opened]);

    const onClose = () => {
        setOpen(false);
        setProps({ opened: false });
    };

    return (
        <MantineDrawer opened={open} onClose={onClose} {...other}>
            {children}
        </MantineDrawer>
    );
};

Drawer.defaultProps = { opened: false };

export default Drawer;
