import React from "react";
import { DefaultProps } from "../../props";
import { Indicator as MantineIndicator } from "@mantine/core";
import { MantineColor, MantineNumberSize } from '@mantine/styles';
import { IndicatorPosition } from "@mantine/core/lib/Indicator/Indicator.types";

type Props = {
    /** Element that should have an indicator */
    children?: React.ReactNode;
    /** Indicator position relative to child element */
    position?: IndicatorPosition;
    /** Changes position offset, usually used when element has border-radius */
    offset?: number;
    /** Determines whether indicator container should be an inline element */
    inline?: boolean;
    /** Size in px */
    size?: number;
    /** Indicator label */
    label?: React.ReactNode;
    /** Indicator count overflowCount */
    overflowCount?: number;
    /** Whether to show the dot */
    dot?: boolean;
    /** border-radius from theme.radius or number value to set radius in px */
    radius?: MantineNumberSize;
    /** Color from theme.colors or any other valid CSS color value */
    color?: MantineColor;
    /** Determines whether indicator should have border */
    withBorder?: boolean;
    /** When component is disabled it renders children without indicator */
    disabled?: boolean;
    /** When showZero is true and label is zero  renders children with indicator*/
    showZero?: boolean;
    /** Indicator processing animation */
    processing?: boolean;
    /** Indicator z-index */
    zIndex?: number
} & DefaultProps;

/**
 * Display element at the corner of another element. For more information, see: https://mantine.dev/core/indicator/
 */
const Indicator = (props: Props) => {
    const {
        children,
        setProps,
        ...other
    } = props;

    return <MantineIndicator {...other} >{children} </MantineIndicator>
};

Indicator.defaultProps = {
    n_clicks: 0,
};

export default Indicator;
