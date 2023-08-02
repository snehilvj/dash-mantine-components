import React, { useState, useEffect } from "react";
import { Drawer as MantineDrawer } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import {
    CloseButtonProps,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
    ModalBaseOverlayProps,
    ModalBaseSettings,
} from "props/mantine";

type Props = {
    /** Side of the screen where drawer will be opened, 'left' by default */
    position?: "bottom" | "left" | "right" | "top";
    /** Modal title */
    title?: React.ReactNode;
    /** Determines whether overlay should be rendered, true by default */
    withOverlay?: boolean;
    /** Props added to Overlay component, use configure opacity, background color, styles and other properties */
    overlayProps?: ModalBaseOverlayProps &
        DashBaseProps &
        MantineStylesAPIProps &
        MantineStyleSystemProps;
    /** Determines whether close button should be rendered, true by default */
    withCloseButton?: boolean;
    /** Props added to close button */
    closeButtonProps?: CloseButtonProps &
        MantineStyleSystemProps &
        MantineStylesAPIProps &
        DashBaseProps;
    /** Drawer Content **/
    children?: React.ReactNode;
} & ModalBaseSettings &
    DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Display overlay area at any side of the screen */
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
