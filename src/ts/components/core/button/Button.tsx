import {
    Button as MantineButton,
    MantineColor,
    MantineGradient,
    MantineRadius,
    MantineSize,
} from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { LoaderProps } from 'props/loader';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState } from '../../../utils/dash3';

interface Props extends DashBaseProps, BoxProps, StylesApiProps {
    /** Controls button `height`, `font-size` and horizontal `padding`, `'sm'` by default */
    size?: MantineSize | `compact-${MantineSize}` | (string);
    /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Sets `justify-content` of `inner` element, can be used to change distribution of sections and label, `'center'` by default */
    justify?: React.CSSProperties['justifyContent'];
    /** Content displayed on the left side of the button label */
    leftSection?: React.ReactNode;
    /** Content displayed on the right side of the button label */
    rightSection?: React.ReactNode;
    /** Determines whether button should take 100% width of its parent container, `false` by default */
    fullWidth?: boolean;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
    gradient?: MantineGradient;
    /** Indicates disabled state */
    disabled?: boolean;
    /** Button content */
    children?: React.ReactNode;
    /** Determines whether the `Loader` component should be displayed over the button */
    loading?: boolean;
    /** Props added to the `Loader` component (only visible when `loading` prop is set) */
    loaderProps?: LoaderProps;
    /** Determines whether button text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks?: number;
}

/** Button */
const Button = ({
    children,
    setProps,
    loading_state,
    disabled,
    n_clicks = 0,
    ...others
}: Props) => {
    const increment = () => {
        if (!disabled) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    return (
        <MantineButton
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            onClick={increment}
            disabled={disabled}
            {...others}
        >
            {children}
        </MantineButton>
    );
};

export default Button;
