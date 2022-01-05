import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Modal as MantineModal } from "@mantine/core";
import { omit } from "ramda";

/**
 * Modal with optional header. For more information, see: https://mantine.dev/core/modal/
 */
const Modal = (props) => {
    const { opened, children, setProps, class_name } = props;
    const [open, setOpen] = useState(opened);

    useEffect(() => {
        setOpen(opened);
    }, [opened]);

    const onClose = () => {
        setOpen(false);
        setProps({ opened: false });
    };

    return (
        <MantineModal
            {...omit(["opened", "setProps", "children"], props)}
            className={class_name}
            opened={open}
            onClose={onClose}
        >
            {children}
        </MantineModal>
    );
};

Modal.displayName = "Modal";

Modal.defaultProps = {
    opened: false,
};

Modal.propTypes = {
    /**
     * Controls if modal should be centered
     */
    centered: PropTypes.bool,

    /**
     * Content that should be centered vertically and horizontally
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Should modal be closed when outside click was registered?
     */
    closeOnClickOutside: PropTypes.bool,

    /**
     * Hides close button, modal still can be closed with escape key and by clicking outside
     */
    hideCloseButton: PropTypes.bool,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Mounts modal if true
     */
    opened: PropTypes.bool,

    /**
     * Control vertical overflow behavior
     */
    overflow: PropTypes.oneOf(["inside", "outside"]),

    /**
     * Overlay below modal color, defaults to theme.black in light theme and to theme.colors.dark[9] in dark theme
     */
    overlayColor: PropTypes.string,

    /**
     * Overlay below modal opacity, defaults to 0.75 in light theme and to 0.85 in dark theme
     */
    overlayOpacity: PropTypes.number,

    /**
     * Modal padding from theme or number value for padding in px
     */
    padding: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Modal padding from theme or number value for padding in px
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
     * Modal body width
     */
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
        PropTypes.string,
    ]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Modal title, displayed in header before close button
     */
    title: PropTypes.string,

    /**
     * Popper zIndex
     */
    zIndex: PropTypes.number,
};

export default Modal;
