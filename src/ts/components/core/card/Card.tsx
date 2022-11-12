import React from "react";
import { DefaultProps } from "../../../props";
import { Card as MantineCard } from "@mantine/core";
import { MantineNumberSize, MantineShadow } from "@mantine/styles";

type Props = {
    /** Card children */
    children?: React.ReactNode;
    /** Predefined border-radius value from theme.radius or number for border-radius in px */
    radius?: MantineNumberSize;
    /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
    shadow?: MantineShadow;
    /** Adds 1px border with theme.colors.gray[3] color in light color scheme and theme.colors.dark[4] in dark color scheme */
    withBorder?: boolean;
} & DefaultProps;

/**
 * Renders white or dark background depending on color scheme. For more information, see: https://mantine.dev/core/card/
 */
 const Card = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineCard {...other}>{children}</MantineCard>;
};

Card.defaultProps = {
    p: 'md',
};

export default Card;
