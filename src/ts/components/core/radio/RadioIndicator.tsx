import {
    MantineColor,
    RadioIndicator as MantineRadioIndicator,
    MantineRadius,
    MantineSize,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { setPersistence, getLoadingState } from "../../../utils/dash3";

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Key of `theme.colors` or any valid CSS color to set input color in checked state, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Controls size of the component, `'sm'` by default */
    size?: MantineSize;
    /** Props passed down to the root element */
    wrapperProps?: Record<string, any>;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius,` "xl" by default */
    radius?: MantineRadius;
    /** Key of `theme.colors` or any valid CSS color to set icon color, by default value depends on `theme.autoContrast` */
    iconColor?: MantineColor;
    /** Determines whether icon color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /** Determines whether the component should have checked styles */
    checked?: boolean;
    /** Determines whether Radio disabled and non-selectable */
    disabled?: boolean;
}

/** RadioIndicator */
const RadioIndicator = (props: Props) => {
    const {
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    return (
        <MantineRadioIndicator
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        />
    );
};

setPersistence(RadioIndicator, ['checked'])

export default RadioIndicator;
