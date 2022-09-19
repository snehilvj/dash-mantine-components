import React from "react";
import { DashComponentProps } from "../../props";
import { Paper as MantinePaper } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
    shadow?: MantineSize;
    /** Predefined border-radius value from theme.radius or number for border-radius in px */
    radius?: MantineSize;
    /** Adds 1px border with theme.colors.gray[3] color in light color scheme and theme.colors.dark[4] in dark color scheme */
    withBorder?: boolean;
    /** Paper children */
    children?: React.ReactNode;
} & DashComponentProps;

/**
 * Renders white or dark background depending on color scheme. For more information, see: https://mantine.dev/core/paper/
 */
const Paper = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantinePaper {...other}>{children}</MantinePaper>;
};

Paper.defaultProps = {};

export default Paper;
