import React from "react";
import { InputWrapper, Slider as MantineSlider } from "@mantine/core";
import PropTypes from "prop-types";

/**
 * Demo slider for dmc docs. For more information, see: https://mantine.dev/core/slider/
 */
const DemoSlider = (props) => {
    const { setProps, label, value, style } = props;
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

    const onChange = (value) => {
        setProps({ value: sliderMap[value] });
    };

    return (
        <InputWrapper pt={5} label={label} style={style}>
            <MantineSlider
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
        </InputWrapper>
    );
};

DemoSlider.displayName = "DemoSlider";

DemoSlider.defaultProps = {};

DemoSlider.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Label for input wrapper
     */
    label: PropTypes.string,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Current value for controlled slider
     */
    value: PropTypes.string,
};

export default DemoSlider;
