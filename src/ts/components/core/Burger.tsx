import React from "react";
import { Burger as MantineBurger } from "@mantine/core";
import {
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps, PersistenceProps } from "props/dash";

type BurgerProps = {
    /** Burger state: true for cross, false for burger */
    opened: boolean;
    /** Burger color value, not connected to theme.colors, defaults to theme.black with light color scheme and theme.white with dark */
    color?: string;
    /** Predefined burger size or number to set width and height in px */
    size?: MantineNumberSize;
    /** Transition duration in ms */
    transitionDuration?: number;
    /** Set title prop to make Burger visible to screen readers */
    title?: string;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps &
    PersistenceProps;

/**
 * Display burger-style menu button. For more information, see: https://mantine.dev/core/burger/
 */
const Burger = (props: BurgerProps) => {
    const {
        setProps,
        opened,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    const onClick = () => {
        setProps({
            opened: !opened,
        });
    };

    return <MantineBurger onClick={onClick} opened={opened} {...other} />;
};

Burger.defaultProps = {
    opened: false,
    persisted_props: ["opened"],
    persistence_type: "local",
};

export default Burger;
