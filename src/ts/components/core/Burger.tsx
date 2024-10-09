import {
    Burger as MantineBurger,
    MantineColor,
    MantineSize,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Controls burger `width` and `height`, numbers are converted to rem, `'md'` by default */
    size?: MantineSize | (string & {}) | number;
    /** Key of `theme.colors` of any valid CSS value, by default `theme.white` in dark color scheme and `theme.black` in light */
    color?: MantineColor;
    /** State of the burger, when `true` burger is transformed into X, `false` by default */
    opened?: boolean;
    /** `transition-duration` property value in ms, `300` by default */
    transitionDuration?: number;
    /** `transition-timing-function` property value, `'ease'` by default  */
    transitionTimingFunction?: string;
}

/** Burger */
const Burger = (props: Props) => {
    const {
        setProps,
        loading_state,
        opened,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const onClick = () => {
        setProps({
            opened: !opened,
        });
    };

    return (
        <MantineBurger
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            onClick={onClick}
            opened={opened}
            {...others}
        />
    );
};

Burger.defaultProps = {
    opened: false,
    persisted_props: ["opened"],
    persistence_type: "local",
};

export default Burger;
