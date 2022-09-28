import React from "react";
import { DefaultProps, InputWrapperBaseProps } from "../../../props";
import { Radio } from "@mantine/core";
import { MantineSize, MantineNumberSize } from "@mantine/styles";

type Props = {
    /** dmc.Radio components only */
    children?: React.ReactNode;
    /** Value of currently selected radio */
    value?: string;
    /** Horizontal or vertical orientation */
    orientation?: "horizontal" | "vertical";
    /** Spacing between radios in horizontal orientation */
    spacing?: MantineNumberSize;
    /** Space between label and inputs */
    offset?: MantineNumberSize;
    /** Predefined label fontSize, radio width, height and border-radius */
    size?: MantineSize;
} & InputWrapperBaseProps &
    DefaultProps;

/**
 * Wrapper for input type radio. For more information, see: https://mantine.dev/core/radio/
 */
const RadioGroup = (props: Props) => {
    const { setProps, children, ...other } = props;

    const onChange = (value: string) => {
        setProps({ value });
    };

    return (
        <Radio.Group onChange={onChange} {...other}>
            {children}
        </Radio.Group>
    );
};

RadioGroup.defaultProps = {};

export default RadioGroup;
