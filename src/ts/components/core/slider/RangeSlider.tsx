import React, { useState } from "react";
import { DefaultProps } from "../../../props";
import { RangeSlider as MantineRangeSlider } from "@mantine/core";
import { MantineNumberSize, MantineColor } from "@mantine/styles";
import { MantineTransitionName } from "@mantine/core/lib/Transition/transitions";

type Props = {
    /** Color from theme.colors */
    color?: MantineColor;
    /** Track border-radius from theme or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Predefined track and thumb size, number to set sizes in px */
    size?: MantineNumberSize;
    /** Minimal possible value */
    min?: number;
    /** Maximum possible value */
    max?: number;
    /** Number by which value will be incremented/decremented with thumb drag and arrows */
    step?: number;
    /** Amount of digits after the decimal point */
    precision?: number;
    /** Current value for controlled slider */
    value?: any;
    /** Minimal range interval */
    minRange?: number;
    /** Marks which will be placed on the track */
    marks?: {
        value: number;
        label?: React.ReactNode;
    }[];
    /** Label appear/disappear transition */
    labelTransition?: MantineTransitionName;
    /** Label appear/disappear transition duration in ms */
    labelTransitionDuration?: number;
    /** Label appear/disappear transition timing function, defaults to theme.transitionRimingFunction */
    labelTransitionTimingFunction?: string;
    /** If true label will be not be hidden when user stops dragging */
    labelAlwaysOn?: boolean;
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
} & DefaultProps;

/**
 * Capture user feedback from a range of values. For more information, see: https://mantine.dev/core/slider/
 */
const RangeSlider = (props: Props) => {
    const { setProps, updatemode, value, ...other } = props;

    const [val, setVal] = useState<[number, number]>(value);

    return (
        <MantineRangeSlider
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

RangeSlider._dashprivate_isLoadingComponent = true;

RangeSlider.defaultProps = {
    updatemode: "mouseup",
};

export default RangeSlider;
