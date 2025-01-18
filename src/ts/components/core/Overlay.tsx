import { Overlay as MantineOverlay } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { OverlayProps } from "props/overlay";
import React from "react";

interface Props extends OverlayProps, DashBaseProps {}

/** Overlay */
const Overlay = (props: Props) => {
    const { setProps, ...others } = props;

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineOverlay
            data-dash-is-loading={loading || undefined}
            {...others}
        />
    );
};

export default Overlay;
