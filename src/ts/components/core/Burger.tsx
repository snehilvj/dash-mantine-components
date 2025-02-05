import {
    Burger as MantineBurger,
    MantineColor,
    MantineSize,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { getLoadingState } from "../../utils/dash3";

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Controls burger `width` and `height`, numbers are converted to rem, `'md'` by default */
    size?: MantineSize | (string & {}) | number;
    /** Key of `theme.colors` of any valid CSS value, by default `theme.white` in dark color scheme and `theme.black` in light */
    color?: MantineColor;
    /** Height of the burger lines */
    lineSize?: number;
    /** State of the burger, when `true` burger is transformed into X, `false` by default */
    opened?: boolean;
    /** `transition-duration` property value in ms, `300` by default */
    transitionDuration?: number;
    /** `transition-timing-function` property value, `'ease'` by default  */
    transitionTimingFunction?: string;
}

/** The Burger component renders a customizable hamburger menu button which can toggle between open and closed states. */
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
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
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
