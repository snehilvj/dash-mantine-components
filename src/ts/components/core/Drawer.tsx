import { Drawer as MantineDrawer, MantineRadius } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import {
    ModalBaseCloseButtonProps,
    ModalBaseOverlayProps,
    ModalBaseProps,
} from "props/modal";
import { StylesApiProps } from "props/styles";
import React, { useEffect, useState } from "react";

type DrawerPosition = "bottom" | "left" | "right" | "top";

interface Props extends StylesApiProps, ModalBaseProps, DashBaseProps {
    /** Side of the screen on which drawer will be opened, `'left'` by default */
    position?: DrawerPosition;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `0` by default */
    radius?: MantineRadius;
    /** Drawer container offset from the viewport end, `0` by default */
    offset?: number | string;
    /** Drawer title */
    title?: React.ReactNode;
    /** Determines whether the overlay should be rendered, `true` by default */
    withOverlay?: boolean;
    /** Props passed down to the `Overlay` component, can be used to configure opacity, `background-color`, styles and other properties */
    overlayProps?: ModalBaseOverlayProps;
    /** Drawer content */
    children?: React.ReactNode;
    /** Determines whether the close button should be rendered, `true` by default */
    withCloseButton?: boolean;
    /** Props passed down to the close button */
    closeButtonProps?: ModalBaseCloseButtonProps;
}

/** Drawer */
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
