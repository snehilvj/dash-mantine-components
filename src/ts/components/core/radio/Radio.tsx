import React from "react";
import { DashComponentProps, MantineColors } from "../../../props";
import { Radio as MantineRadio } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** Radio label */
    label?: React.ReactNode;
    /** Radio value */
    value: string;
    /** Active radio color from theme.colors */
    color?: MantineColors;
    /** Predefined label fontSize, radio width, height and border-radius */
    size?: MantineSize;
    /** Animation duration in ms */
    transitionDuration?: number;
} & DashComponentProps;

/**
 * Capture user feedback limited to small set of options. For more information, see: https://mantine.dev/core/radio-group/
 */
const RadioGroup = (props: Props) => {
    const { setProps, ...other } = props;

    return <MantineRadio {...other} />;
};

RadioGroup.defaultProps = {};

export default RadioGroup;
