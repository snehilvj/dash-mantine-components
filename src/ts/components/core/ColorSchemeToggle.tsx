import React, { useEffect } from "react";
import {
    ActionIcon,
    MantineColor,
    MantineRadius,
    MantineGradient,
    MantineSize,
    useMantineColorScheme,
    useComputedColorScheme,
} from '@mantine/core';

import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Read-only Color Scheme*/
    computedColorScheme?: 'light' | 'dark';

    /** Icon shown when scheme is light */
    lightIcon?: React.ReactNode;

    /** Icon shown when scheme is dark */
    darkIcon?: React.ReactNode;

    /** Controls width and height of the button. Numbers are converted to rem. default `'md'`. */
    size?: MantineSize | `input-${MantineSize}` | (string & {}) | number;

    /** Key of `theme.colors` or any valid CSS color. default `theme.primaryColor`. */
    color?: MantineColor;

    /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. default `theme.defaultRadius` */
    radius?: MantineRadius;

    /** Gradient values used with `variant="gradient"`. default `theme.defaultGradient`. */
    gradient?: MantineGradient;

    /** Sets `disabled` attribute, prevents interactions */
    disabled?: boolean;

    /** If set, adjusts text color based on background color for `filled` variant */
    autoContrast?: boolean;
}

export function ColorSchemeToggle(props: Props) {
    const {
        id,
        setProps,
        lightIcon,
        darkIcon,
        variant = 'subtle',
        ...others
    } = props;

    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light');

    const isDark = computedColorScheme === 'dark';

    useEffect(() => {
        setProps({
          computedColorScheme,
        });
      }, [computedColorScheme]);

    const toggle = () => {
        const next = isDark ? 'light' : 'dark';
        setColorScheme(next);

        setProps({
            computedColorScheme: next,
        });
    };

    return (
        <ActionIcon
            id={id}
            variant={variant}
            onClick={toggle}
            aria-label="Toggle color scheme"
            {...others}
        >
            {isDark ? darkIcon : lightIcon}
        </ActionIcon>
    );
}

export default ColorSchemeToggle;
