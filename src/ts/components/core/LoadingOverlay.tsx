import { LoadingOverlay as MantineLoadingOverlay } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { LoaderProps } from "props/loader";
import { OverlayProps } from "props/overlay";
import { StylesApiProps } from "props/styles";
import { TransitionProps } from "props/transition";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Props passed down to `Transition` component, `{ transition: 'fade', duration: 0 }` by default */
    transitionProps?: TransitionProps;
    /** Props passed down to `Loader` component */
    loaderProps?: LoaderProps;
    /** Props passed down to `Overlay` component */
    overlayProps?: OverlayProps;
    /** Determines whether the overlay should be visible, `false` by default */
    visible?: boolean;
    /** Controls overlay `z-index`, `400` by default */
    zIndex?: string | number;
}

/** LoadingOverlay */
const LoadingOverlay = (props: Props) => {
    const { setProps, ...others } = props;
    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineLoadingOverlay
            data-dash-is-loading={loading || undefined}
            {...others}
        />
    );
};

LoadingOverlay.defaultProps = {};

export default LoadingOverlay;
