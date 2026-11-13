import {
    Card as MantineCard,
    MantineRadius,
    MantineShadow,
    MantineSpacing,
} from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';
import CardContext from './CardContext';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Key of `theme.shadows` or any valid CSS value to set `box-shadow`, `none` by default */
    shadow?: MantineShadow;
    /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: MantineRadius | number;
    /** Determines whether the card should have border, border color depends on color scheme, `false` by default */
    withBorder?: boolean;
    /** Controls `padding`, key of `theme.spacing` or any valid CSS value, `'md'` by default */
    padding?: MantineSpacing;
    /** Card content */
    children?: React.ReactNode;
    /** Card orientation default 'vertical' */
    orientation?: 'horizontal' | 'vertical';
}

/** Card */
const Card = (props: Props) => {
    const {
        children,
        setProps,
        loading_state,
        orientation = 'vertical',
        ...others
    } = props;

    return (
         <CardContext.Provider value={orientation}>
            <MantineCard
                data-dash-is-loading={getLoadingState(loading_state) || undefined}
                orientation={orientation}
                {...others}
            >
                {children}
            </MantineCard>
         </CardContext.Provider>
    );
};

export default Card;
