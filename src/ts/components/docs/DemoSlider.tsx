import React from "react";
import { Input, Slider } from "@mantine/core";
import { DefaultProps } from "../../props";

type Props = {
    /** Label for input wrapper */
    label?: string;
    /** Current value for controlled slider */
    value: number;
} & DefaultProps;

/**
 * Demo slider for dmc docs. For more information look within.
 */
const DemoSlider = (props: Props) => {
    const { setProps, value } = props;
    const sliderMap = {
        0: "xs",
        1: "sm",
        2: "md",
        3: "lg",
        4: "xl",
    };

    const invertedSliderMap = {
        xs: 0,
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
    };

    const onChange = (value: number) => {
        setProps({ value: sliderMap[value] });
    };

    return (
        <Input.Wrapper {...props}>
            <Slider
                onChange={onChange}
                marks={[
                    { value: 0 },
                    { value: 1 },
                    { value: 2 },
                    { value: 3 },
                    { value: 4 },
                ]}
                label={(value) => sliderMap[value]}
                min={0}
                max={4}
                step={1}
                value={invertedSliderMap[value]}
            />
        </Input.Wrapper>
    );
};

DemoSlider.displayName = "DemoSlider";

DemoSlider.defaultProps = {};

export default DemoSlider;
