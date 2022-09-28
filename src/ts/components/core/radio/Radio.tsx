import React from "react";
import { DefaultProps } from "../../../props";
import { Radio as MantineRadio } from "@mantine/core";
import { MantineSize, MantineColor } from "@mantine/styles";

type Props = {
    /** Radio label */
    label?: React.ReactNode;
    /** To be used with radio group*/
    value: string;
    /** Active radio color from theme.colors */
    color?: MantineColor;
    /** Predefined label fontSize, radio width, height and border-radius */
    size?: MantineSize;
    /** Animation duration in ms */
    transitionDuration?: number;
} & DefaultProps;

/**
 * Wrapper for input type radio. For more information, see: https://mantine.dev/core/radio/
 */
const RadioGroup = (props: Props) => {
    const { setProps, ...other } = props;

    return <MantineRadio {...other} />;
};

RadioGroup.defaultProps = {};

export default RadioGroup;
