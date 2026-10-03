import { Collapse as MantineCollapse } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import React from 'react';
import { getLoadingState } from '../../utils/dash3';

interface Props extends BoxProps, DashBaseProps {
    /** Opened state */
    opened?: boolean;
    /** Transition duration in ms, `200` by default */
    transitionDuration?: number;
    /** Transition timing function, default value is `ease` */
    transitionTimingFunction?: string;
    /** Determines whether opacity should be animated, `true` by default */
    animateOpacity?: boolean;
    /** Content */
    children?: React.ReactNode;
    /** If set, the element is kept in the DOM when collapsed. When `true`, React 19 `Activity` is used to preserve state while collapsed. When `False`, the element is unmounted after the exit animation. default True */
    keepMounted?: boolean;
    /** Controls how the element is hidden when `keepMounted` is set:
     * `'activity'` – hidden with React 19 `Activity` component,
     * `'display-none'` – hidden with `display: none` styles
     * default 'activity'
     */
     keepMountedMode?: 'activity' | 'display-none';
     /** Collapse orientation default 'vertical' */
     orientation?: 'vertical' | 'horizontal';
}

/** Collapse */
const Collapse = ({
    setProps,
    loading_state,
    opened = false,
    ...others
}: Props) => {
    return (
        <MantineCollapse
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            expanded={opened}
            {...others}
        />
    );
};

export default Collapse;
