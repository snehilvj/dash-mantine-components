import {
    MantineColor,
    MantineRadius,
    MantineSize,
    Toggle as MantineToggle,
} from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React from 'react';
import { getLoadingState, setPersistence } from '../../../utils/dash3';

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Toggle content, usually an icon or short text */
    children?: React.ReactNode;
    /** Active (pressed) state, `False` by default */
    active?: boolean;
    /** If set, the toggle is disabled */
    disabled?: boolean;
    /** Controls toggle height and min-width, `'md'` by default */
    size?: MantineSize | (string & {});
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: MantineRadius | number;
    /** If set, the toggle width adjusts to content instead of being square, `False` by default */
    autoWidth?: boolean;
    /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Determines whether icon color with filled variant should be changed based on the given `color` prop */
    autoContrast?: boolean;
    /** Toggle variant, `'filled'` by default */
    variant?: 'filled' | 'light';
}

/** Toggle - A toggleable button with active/inactive states */
const Toggle = (props: Props) => {
    const {
        children,
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type,
        active = false,
        ...others
    } = props;

    return (
        <MantineToggle
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            active={active}
            onActiveChange={(active) => setProps({ active })}
            {...others}
        >
            {children}
        </MantineToggle>
    );
};

setPersistence(Toggle, ['active']);

export default Toggle;
