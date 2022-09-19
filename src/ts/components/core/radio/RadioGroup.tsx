import React from "react";
import { DashComponentProps, InputWrapperBaseProps } from "../../../props";
import { Radio } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** Radio components only */
    children?: React.ReactNode;
    /** Value of currently selected radio */
    value?: string;
    /** Horizontal or vertical orientation */
    orientation?: "horizontal" | "vertical";
    /** Spacing between radios in horizontal orientation */
    spacing?: MantineSize;
    /** Space between label and inputs */
    offset?: MantineSize;
    /** Predefined label fontSize, radio width, height and border-radius */
    size?: MantineSize;
    /** Name attribute of radio inputs */
    name?: string;
} & InputWrapperBaseProps &
    DashComponentProps;

/**
 * Capture user feedback limited to small set of options. For more information, see: https://mantine.dev/core/radio-group/
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
