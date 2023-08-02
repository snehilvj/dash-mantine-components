import React from "react";
import { Indicator as MantineIndicator } from "@mantine/core";
import { IndicatorPosition } from "@mantine/core/lib/Indicator/Indicator.types";
import {
    MantineColor,
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Indicator z-index */
    zIndex?: number;
    /** Element that should have an indicator */
    children: React.ReactNode;
    /** Indicator position relative to child element */
    position?: IndicatorPosition;
    /** Changes position offset, usually used when element has border-radius */
    offset?: number;
    /** Determines whether indicator container should be an inline element */
    inline?: boolean;
    /** Indicator width and height */
    size?: number | string;
    /** Indicator label */
    label?: React.ReactNode;
    /** Key of theme.radius or any valid CSS value to set border-radius, 1000rem by default */
    radius?: MantineNumberSize;
    /** Color from theme.colors or any other valid CSS color value */
    color?: MantineColor;
    /** Determines whether indicator should have border */
    withBorder?: boolean;
    /** When component is disabled it renders children without indicator */
    disabled?: boolean;
    /** Indicator processing animation */
    processing?: boolean;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Display element at the corner of another element */
const Indicator = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineIndicator {...other}>{children} </MantineIndicator>;
};

Indicator.defaultProps = {};

export default Indicator;
