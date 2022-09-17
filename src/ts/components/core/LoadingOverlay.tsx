import React from "react";
import {
    DashComponentProps,
    LoaderProps,
    LoadingStateProps,
} from "../../props";
import { LoadingOverlay as MantineLoadingOverlay } from "@mantine/core";
import { MantineSize } from "@mantine/styles";
import { mergeRight } from "ramda";

type Props = {
    /** Content */
    children?: React.ReactNode;
    /** Provide custom loader */
    loader?: React.ReactNode;
    /** Loader component props */
    loaderProps?: LoaderProps;
    /** Sets overlay opacity */
    overlayOpacity?: number;
    /** Sets overlay color, defaults to theme.white in light theme and to theme.colors.dark[5] in dark theme */
    overlayColor?: string;
    /** Sets overlay blur in px */
    overlayBlur?: number;
    /** Loading overlay z-index */
    zIndex?: number;
    /** Animation duration in ms */
    transitionDuration?: number;
    /** Exit transition duration in ms */
    exitTransitionDuration?: number;
    /** Value from theme.radius or number to set border-radius in px */
    radius?: MantineSize;
} & LoadingStateProps &
    DashComponentProps;

/**
 * Similar to dcc.Loading, overlay over given container with centered Loader from Mantine Theme. For more information, see: https://mantine.dev/core/loading-overlay/
 */
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
