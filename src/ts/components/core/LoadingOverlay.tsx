import React from "react";
import { LoadingOverlay as MantineLoadingOverlay } from "@mantine/core";
import { MantineNumberSize } from "@mantine/styles";
import { mergeRight } from "ramda";
import {
    LoaderProps,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps, LoadingStateProps } from "props/dash";

type Props = {
    /** If set loading overlay will not be unmounted from the DOM when it is hidden, display: none styles will be added instead */
    keepMounted?: boolean;
    /** Provide custom loader */
    loader?: React.ReactNode;
    /** Loader component props */
    loaderProps?: LoaderProps;
    /** Sets overlay opacity */
    overlayOpacity?: number;
    /** Sets overlay color, defaults to theme.white in light theme and to theme.colors.dark[5] in dark theme */
    overlayColor?: string;
    /** Sets overlay blur */
    overlayBlur?: number | string;
    /** Loading overlay z-index */
    zIndex?: number;
    /** Animation duration in ms */
    transitionDuration?: number;
    /** Exit transition duration in ms */
    exitTransitionDuration?: number;
    /** Key of theme.radius or any valid CSS value to set border-radius, 0 by default */
    radius?: MantineNumberSize;
    /** Content */
    children?: React.ReactNode;
} & LoadingStateProps &
    DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Similar to dcc.Loading, overlay over given container with centered Loader from Mantine Theme */
const LoadingOverlay = (props: Props) => {
    const {
        setProps,
        children,
        className,
        id,
        style,
        loading_state,
        ...other
    } = props;

    const newStyle = mergeRight({ position: "relative" }, style);

    return (
        <div className={className} id={id} style={newStyle}>
            <MantineLoadingOverlay
                {...other}
                visible={loading_state && loading_state.is_loading}
            />
            {children}
        </div>
    );
};

LoadingOverlay.defaultProps = {};
LoadingOverlay._dashprivate_isLoadingComponent = true;

export default LoadingOverlay;
