import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Modal as MantineModal } from "@mantine/core";
import { omit } from "ramda";
import { NumberSizes, Sizes } from "../propTypes";

/** Centers content vertically and horizontally. For more information, see: https://mantine.dev/core/modal/ */
const Modal = (props) => {
    const { opened, children, setProps } = props;
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
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Tells dash if any prop has changed its value */
    setProps: PropTypes.func,

    /**	Content that should be centered vertically and horizontally */
    children: PropTypes.node,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /** Hides close button, modal still can be closed with escape key and by clicking outside */
    hideCloseButton: PropTypes.bool,

    /**	Mounts modal if true */
    opened: PropTypes.bool,

    /** Control vertical overflow behavior */
    overflow: PropTypes.oneOf(["inside", "outside"]),

    /** Modal padding from theme or number value for padding in px */
    padding: NumberSizes,

    /** Modal body width */
    size: PropTypes.oneOfType([Sizes, PropTypes.number, PropTypes.string]),

    /** Modal title, displayed in header before close button */
    title: PropTypes.string,

    /** Inline style override */
    style: PropTypes.object,
};

export default Modal;
