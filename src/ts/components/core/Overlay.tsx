import { Overlay as MantineOverlay } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { OverlayProps } from "props/overlay";
import React from "react";

interface Props extends OverlayProps, DashBaseProps {}

/** Overlay */
const Overlay = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <MantineOverlay
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        />
    );
};

Overlay.defaultProps = {};

export default Overlay;
