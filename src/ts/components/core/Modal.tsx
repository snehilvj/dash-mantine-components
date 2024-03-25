import { Modal as MantineModal, MantineRadius } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import {
    ModalBaseCloseButtonProps,
    ModalBaseOverlayProps,
    ModalBaseProps,
} from "props/modal";
import { StylesApiProps } from "props/styles";
import React, { useEffect, useState } from "react";

interface Props extends ModalBaseProps, StylesApiProps, DashBaseProps {
    /** Modal title */
    title?: React.ReactNode;
    /** Determines whether the overlay should be rendered, `true` by default */
    withOverlay?: boolean;
    /** Props passed down to the `Overlay` component, use to configure opacity, `background-color`, styles and other properties */
    overlayProps?: ModalBaseOverlayProps;
    /** Modal content */
    children?: React.ReactNode;
    /** Determines whether the close button should be rendered, `true` by default */
    withCloseButton?: boolean;
    /** Props passed down to the close button */
    closeButtonProps?: ModalBaseCloseButtonProps;
    /** Top/bottom modal offset, `5dvh` by default */
    yOffset?: React.CSSProperties["marginTop"];
    /** Left/right modal offset, `5vw` by default */
    xOffset?: React.CSSProperties["marginLeft"];
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Determines whether the modal should be centered vertically, `false` by default */
    centered?: boolean;
    /** Determines whether the modal should take the entire screen, `false` by default */
    fullScreen?: boolean;
}

/** Modal */
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
