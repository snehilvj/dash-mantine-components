import { Skeleton as MantineSkeleton } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps, LoadingStateProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        LoadingStateProps {
    /** Determines whether Skeleton overlay should be displayed, `true` by default */
    visible?: boolean;
    /** Skeleton `height`, numbers are converted to rem, `auto` by default */
    height?: React.CSSProperties["height"];
    /** Skeleton `width`, numbers are converted to rem, `100%` by default, ignored when `circle` prop is set */
    width?: React.CSSProperties["width"];
    /** If set, Skeleton `width` and `border-radius` are equal to its `height`, `false` by default */
    circle?: boolean;
    /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
    radius?: React.CSSProperties["borderRadius"];
    /** Determines whether Skeleton should be animated, `true` by default */
    animate?: boolean;
    /** Content */
    children?: React.ReactNode;
}

/** Skeleton */
const Skeleton = (props: Props) => {
    const { setProps, visible, loading_state, children, ...others } = props;

    return (
        <MantineSkeleton
            {...others}
            visible={visible || (loading_state && loading_state.is_loading)}
        >
            {children}
        </MantineSkeleton>
    );
};

Skeleton._dashprivate_isLoadingComponent = true;

Skeleton.defaultProps = {
    visible: true,
};

export default Skeleton;
