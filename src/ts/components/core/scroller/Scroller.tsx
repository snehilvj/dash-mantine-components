import { Scroller as MantineScroller } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Content to display */
    children?: React.ReactNode;
    /** Amount of pixels to scroll when clicking the control buttons, `200` by default */
    scrollAmount?: number;
    /** Size of the control buttons, `60` by default */
    controlSize?: string | number;
    /** Background color for the gradient fade on controls, `'var(--mantine-color-body)'` by default */
    edgeGradientColor?: string;
    /** Props passed to the start (left) control button */
    startControlProps?: Record<string, any>;
    /** Props passed to the end (right) control button */
    endControlProps?: Record<string, any>;
    /** Icon for the start (left) control, a chevron by default */
    startControlIcon?: React.ReactNode;
    /** Icon for the end (right) control, a chevron by default */
    endControlIcon?: React.ReactNode;
    /** Determines whether the start control should always be visible regardless of scroll position, `False` by default */
    showStartControl?: boolean;
    /** Determines whether the end control should always be visible regardless of scroll position, `False` by default */
    showEndControl?: boolean;
    /** Determines whether content can be scrolled by dragging with the mouse, `True` by default */
    draggable?: boolean;
}

/** Scroller - Horizontal scroll container that shows navigation controls when content overflows */
const Scroller = (props: Props) => {
    const { setProps, loading_state, children, ...others } = props;

    return (
        <MantineScroller
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineScroller>
    );
};

export default Scroller;
