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
    /** Keep element in DOM when collapsed, useful for nested collapses */
    keepMounted?: boolean;
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
            in={opened}
            {...others}
        />
    );
};

export default Collapse;
