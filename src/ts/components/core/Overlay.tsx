import { Overlay as MantineOverlay } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { OverlayProps } from "props/overlay";
import React from "react";
import { getLoadingState } from "../../utils/dash3";

interface Props extends OverlayProps, DashBaseProps {}

/** Overlay */
const Overlay = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <MantineOverlay
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        />
    );
};

export default Overlay;
