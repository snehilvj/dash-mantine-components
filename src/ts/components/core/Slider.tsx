import React, { useState } from "react";
import {
    DashComponentProps,
    MantineColors,
    MantineTransition,
} from "../../props";
import { Slider as MantineSlider } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** Color from theme.colors */
    color?: MantineColors;
    /** Track border-radius from theme or number to set border-radius in px */
    radius?: MantineSize;
    /** Predefined track and thumb size, number to set sizes in px */
    size?: MantineSize;
    /** Minimal possible value */
    min?: number;
    /** Maximum possible value */
    max?: number;
    /** Number by which value will be incremented/decremented with thumb drag and arrows */
    step?: number;
    /** Amount of digits after the decimal point */
    precision?: number;
    /** Current value for controlled slider */
    value?: number;
    /** Default value for uncontrolled slider */
    defaultValue?: number;
    /** Hidden input name, use with uncontrolled variant */
    name?: string;
    /** Marks which will be placed on the track */
    marks?: {
        value: number;
        label?: React.ReactNode;
    }[];
    /** Label appear/disappear transition */
    labelTransition?: MantineTransition;
    /** Label appear/disappear transition duration in ms */
    labelTransitionDuration?: number;
    /** Label appear/disappear transition timing function, defaults to theme.transitionRimingFunction */
    labelTransitionTimingFunction?: string;
    /** If true label will be not be hidden when user stops dragging */
    labelAlwaysOn?: boolean;
    /** Thumb aria-label */
    thumbLabel?: string;
    /** If true slider label will appear on hover */
    showLabelOnHover?: boolean;
    /** Thumb children, can be used to add icon */
    thumbChildren?: React.ReactNode;
    /** Disables slider */
    disabled?: boolean;
    /** Thumb width and height in px */
    thumbSize?: number;
    /** Determines when the component should update its value property. If mouseup (the default) then the slider will only trigger its value when the user has finished dragging the slider. If drag, then the slider will update its value continuously as it is being dragged. */
    updatemode: "mouseup" | "drag";
} & DashComponentProps;

/**
 * Capture user feedback from a range of values. For more information, see: https://mantine.dev/core/slider/
 */
const Slider = (props: Props) => {
    const { setProps, updatemode, value, ...other } = props;

    const [val, setVal] = useState(value);

    return (
        <MantineSlider
            {...other}
            value={val}
            onChange={(value) => {
                setVal(value);
                if (updatemode === "drag") {
                    setProps({ value });
                }
            }}
            onChangeEnd={(value) => {
                if (updatemode === "mouseup") {
                    setProps({ value });
                }
            }}
        />
    );
};

Slider._dashprivate_isLoadingComponent = true;

Slider.defaultProps = {
    updatemode: "mouseup",
};

export default Slider;
