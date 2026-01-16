import {
    Badge as MantineBadge,
    MantineColor,
    MantineGradient,
    MantineRadius,
    MantineSize,
} from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../utils/dash3';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Controls `font-size`, `height` and horizontal `padding`, `'md'` by default */
    size?: MantineSize | (string);
    /** If set, badge `min-width` becomes equal to its `height` and horizontal padding is removed */
    circle?: boolean;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `'xl'` by default */
    radius?: MantineRadius;
    /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
    gradient?: MantineGradient;
    /** Content displayed on the left side of the badge label */
    leftSection?: React.ReactNode;
    /** Content displayed on the right side of the badge label */
    rightSection?: React.ReactNode;
    /** Determines whether Badge should take 100% of its parent width, `false` by default */
    fullWidth?: boolean;
    /** Main badge content */
    children?: React.ReactNode;
    /** Determines whether text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
}

/** Badge */
const Badge = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineBadge
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineBadge>
    );
};

export default Badge;
