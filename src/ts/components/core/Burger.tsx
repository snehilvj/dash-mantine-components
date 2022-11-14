import React from "react";
import { DefaultProps, PersistenceProps } from "../../props";
import { Burger as MantineBurger } from "@mantine/core";
import { MantineNumberSize } from "@mantine/styles";

type BurgerProps = {
    /** Burger state: true for cross, false for burger */
    opened: boolean;
    /** Burger color value, not connected to theme.colors, defaults to theme.black with light color scheme and theme.white with dark */
    color?: string;
    /** Predefined burger size or number to set width and height in px */
    size?: MantineNumberSize;
    /** Transition duration in ms */
    transitionDuration?: number;
} & PersistenceProps &
    DefaultProps;

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
