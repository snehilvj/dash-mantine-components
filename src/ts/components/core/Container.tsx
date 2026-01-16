import { Container as MantineContainer, MantineSize } from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../utils/dash3';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
    /** Sets `max-width` of the container, value is not responsive – it is the same for all screen sizes. Numbers are converted to rem. Ignored when `fluid` prop is set. `'md'` by default */
    size?: MantineSize | (string) | number;
    /** Determines whether the container should take 100% of its parent width. If set, `size` prop is ignored. `false` by default. */
    fluid?: boolean;
    /** Centering strategy. Default value: 'block'*/
    strategy?: 'block' | 'grid';
}

/** Container */
const Container = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineContainer
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineContainer>
    );
};

export default Container;
