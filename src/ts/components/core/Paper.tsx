import React from "react";
import { Paper as MantinePaper } from "@mantine/core";
import {
    MantineNumberSize,
    MantineShadow,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
    shadow?: MantineShadow;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Adds border styles */
    withBorder?: boolean;
    /** Paper children */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Renders white or dark background depending on color scheme */
const Paper = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantinePaper {...other}>{children}</MantinePaper>;
};

Paper.defaultProps = {};

export default Paper;
