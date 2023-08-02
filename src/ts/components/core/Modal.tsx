import React, { useEffect, useState } from "react";
import { Modal as MantineModal } from "@mantine/core";
import {
    MantineStylesAPIProps,
    MantineStyleSystemProps,
    ModalProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = ModalProps &
    DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Modal with optional header */
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
