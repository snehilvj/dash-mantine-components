import {
    MantineColor,
    Indicator as MantineIndicator,
    MantineRadius,
} from '@mantine/core';
import { IndicatorPosition } from '@mantine/core/lib/components/Indicator/Indicator.types';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../utils/dash3';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Indicator position relative to the target element, `'top-end'` by default */
    position?: IndicatorPosition;
    /** Indicator offset relative to the target element, usually used for elements with border-radius, equals to `size` by default */
    offset?: number;
    /** Determines whether the indicator container should be an inline element, `false` by default */
    inline?: boolean;
    /** Indicator width and height, `10` by default */
    size?: number | string;
    /** Label rendered inside the indicator, for example, notification count */
    label?: React.ReactNode;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `100` by default */
    radius?: MantineRadius | number;
    /** Key of `theme.colors` or any valid CSS color value, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Determines whether the indicator should have a border (color of the border is the same as the body element), `false` by default */
    withBorder?: boolean;
    /** When Indicator is disabled it renders children only */
    disabled?: boolean;
    /** Determines whether the indicator should have processing animation, `false` by default */
    processing?: boolean;
    /** Indicator z-index, `200` by default */
    zIndex?: string | number;
    /** Determines whether text color should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /** Content */
    children?: React.ReactNode;
}

/** Indicator */
const Indicator = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineIndicator
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}{' '}
        </MantineIndicator>
    );
};

export default Indicator;
