import React, { useEffect, useState } from "react";
import { DashComponentProps, MantineTransition } from "../../props";
import { Modal as MantineModal } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** Content */
    children?: React.ReactNode;
    /** Mounts modal if true */
    opened: boolean;
    /** Modal title, displayed in header before close button */
    title?: React.ReactNode;
    /** Modal z-index property */
    zIndex?: number;
    /** Control vertical overflow behavior */
    overflow?: "outside" | "inside";
    /** Hides close button if set to false, modal still can be closed with escape key and by clicking outside */
    withCloseButton?: boolean;
    /** Overlay opacity */
    overlayOpacity?: number;
    /** Overlay color */
    overlayColor?: string;
    /** Overlay blur in px */
    overlayBlur?: number;
    /** Determines whether the modal should take the entire screen */
    fullScreen?: boolean;
    /** Modal radius */
    radius?: MantineSize;
    /** Modal body width */
    size?: string | number;
    /** Modal body transition */
    transition?: MantineTransition;
    /** Duration in ms of modal transitions, set to 0 to disable all animations */
    transitionDuration?: number;
    /** Modal body transitionTimingFunction, defaults to theme.transitionTimingFunction */
    transitionTimingFunction?: string;
    /** Close button aria-label */
    closeButtonLabel?: string;
    /** Modal shadow from theme or css value */
    shadow?: MantineSize;
    /** Modal padding from theme or number value for padding in px */
    padding?: MantineSize;
    /** Should modal be closed when outside click was registered? */
    closeOnClickOutside?: boolean;
    /** Should modal be closed when escape is pressed? */
    closeOnEscape?: boolean;
    /** Disables focus trap */
    trapFocus?: boolean;
    /** Controls if modal should be centered */
    centered?: boolean;
    /** Determines whether scroll should be locked when modal is opened, defaults to true */
    lockScroll?: boolean;
    /** Determines whether modal should be rendered within Portal, defaults to true */
    withinPortal?: boolean;
    /** Determines whether focus should be returned to the last active element when drawer is closed */
    withFocusReturn?: boolean;
} & DashComponentProps;

/**
 * Modal with optional header. For more information, see: https://mantine.dev/core/modal/
 */
const Modal = (props: Props) => {
    const { children, setProps, opened, ...other } = props;
    const [open, setOpen] = useState(opened);

    useEffect(() => {
        setOpen(opened);
    }, [opened]);

    const onClose = () => {
        setOpen(false);
        setProps({ opened: false });
    };

    return (
        <MantineModal opened={open} onClose={onClose} {...other}>
            {children}
        </MantineModal>
    );
};

Modal.defaultProps = { opened: false };

export default Modal;
