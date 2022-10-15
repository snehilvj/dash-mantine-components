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
        1: "xs",
        2: "sm",
        3: "md",
        4: "lg",
        5: "xl",
    };

    const invertedSliderMap = {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
    };

    const onChange = (value: number) => {
        setProps({ value: sliderMap[value] });
    };

    return (
        <Input.Wrapper {...props}>
            <Slider
                onChange={onChange}
                marks={[
                    { value: 1 },
                    { value: 2 },
                    { value: 3 },
                    { value: 4 },
                    { value: 5 },
                ]}
                label={(value) => sliderMap[value]}
                min={1}
                max={5}
                step={1}
                value={invertedSliderMap[value]}
            />
        </Input.Wrapper>
    );
};

DemoSlider.displayName = "DemoSlider";

DemoSlider.defaultProps = {};

export default DemoSlider;
