import { Marquee as MantineMarquee, MantineSpacing } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../utils/dash3';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Content to scroll */
    children?: React.ReactNode;
    /** Reverses animation direction, `False` by default */
    reverse?: boolean;
    /** Pauses animation on hover, `False` by default */
    pauseOnHover?: boolean;
    /** Scroll orientation, `'horizontal'` by default. Set a fixed height (e.g. `h=300`) when using `'vertical'` */
    orientation?: 'horizontal' | 'vertical';
    /** Number of times children are repeated inline for seamless scrolling, `4` by default */
    repeat?: number;
    /** Animation duration in ms, `100000` by default */
    duration?: number;
    /** Gap between repeated children, key of `theme.spacing` or any valid CSS value, `'md'` by default */
    gap?: MantineSpacing;
    /** Whether to show gradient fade on edges, `True` by default */
    fadeEdges?: boolean;
    /** Color of the fade gradient, `'var(--mantine-color-body)'` by default */
    fadeEdgeColor?: string;
    /** Size of the fade gradient, `'5%'` by default */
    fadeEdgeSize?: string;
}

/** Marquee - Create continuous scrolling animation for content */
const Marquee = (props: Props) => {
    const { setProps, loading_state, children, ...others } = props;

    return (
        <MantineMarquee
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineMarquee>
    );
};

export default Marquee;
