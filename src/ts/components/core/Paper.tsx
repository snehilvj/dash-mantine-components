import React from "react";
import { DefaultProps } from "../../props";
import { Paper as MantinePaper } from "@mantine/core";
import { MantineNumberSize, MantineShadow } from "@mantine/styles";

type Props = {
    /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
    shadow?: MantineShadow;
    /** Predefined border-radius value from theme.radius or number for border-radius in px */
    radius?: MantineNumberSize;
    /** Adds 1px border with theme.colors.gray[3] color in light color scheme and theme.colors.dark[4] in dark color scheme */
    withBorder?: boolean;
    /** Paper children */
    children?: React.ReactNode;
} & DefaultProps;

/**
 * Renders white or dark background depending on color scheme. For more information, see: https://mantine.dev/core/paper/
 */
const Paper = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantinePaper {...other}>{children}</MantinePaper>;
};

Paper.defaultProps = {};

export default Paper;
