import { Skeleton as MantineSkeleton } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingStateChildren } from '../../utils/dash3';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Determines whether Skeleton overlay should be displayed, `true` by default */
    visible?: boolean;
    /** Skeleton `height`, numbers are converted to rem, `auto` by default */
    height?: React.CSSProperties['height'];
    /** Skeleton `width`, numbers are converted to rem, `100%` by default, ignored when `circle` prop is set */
    width?: React.CSSProperties['width'];
    /** If set, Skeleton `width` and `border-radius` are equal to its `height`, `false` by default */
    circle?: boolean;
    /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
    radius?: React.CSSProperties['borderRadius'];
    /** Determines whether Skeleton should be animated, `true` by default */
    animate?: boolean;
    /** Content */
    children?: React.ReactNode;
}

/** Skeleton */
const Skeleton = ({
    setProps,
    visible = true,
    loading_state,
    children,
    ...others
}: Props) => {
    return (
        <MantineSkeleton
            {...others}
            visible={
                visible || getLoadingStateChildren(loading_state, children)
            }
        >
            {children}
        </MantineSkeleton>
    );
};

// for dash2
Skeleton._dashprivate_isLoadingComponent = true;

export default Skeleton;
