import { Overlay as MantineOverlay } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { OverlayProps } from "props/overlay";
import React from "react";

interface Props extends OverlayProps, DashBaseProps {}

/** Overlay */
const Overlay = (props: Props) => {
    const { setProps, ...others } = props;

    return <MantineOverlay {...others} />;
};

Overlay.defaultProps = {};

export default Overlay;
