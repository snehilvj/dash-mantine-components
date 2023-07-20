import { Slider as MantineSlider } from "@mantine/core";
import { MantineTransitionName } from "@mantine/core/lib/Transition/transitions";
import { useDidUpdate } from "@mantine/hooks";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    MantineColor,
    MantineNumberSize,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React, { useState } from "react";

type Props = {
    /** Color from theme.colors */
    color?: MantineColor;
    /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
    radius?: MantineNumberSize;
    /** Controls size of track and thumb */
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
    value?: number;
    /** Hidden input name, use with uncontrolled variant */
    name?: string;
    /** Marks which will be placed on the track */
    marks?: {
        value: number;
        label?: React.ReactNode;
    }[];
    /** Function to generate label or any react node to render instead, set to null to disable label */
    label?: React.ReactNode;
    /** Label appear/disappear transition */
    labelTransition?: MantineTransitionName;
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
    /** Thumb width and height */
    thumbSize?: number;
    /** Allows the track to be inverted */
    inverted?: boolean;
    /** Determines when the component should update its value property. If mouseup (the default) then the slider will only trigger its value when the user has finished dragging the slider. If drag, then the slider will update its value continuously as it is being dragged. */
    updatemode: "mouseup" | "drag";
} & PersistenceProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps &
    DashBaseProps;

/** Capture user feedback from a range of values */
const Slider = (props: Props) => {
    const {
        setProps,
        updatemode,
        value,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    const [val, setVal] = useState(value);

    useDidUpdate(() => {
        setVal(value);
    }, [value]);

    useDidUpdate(() => {
        if (updatemode === "drag") {
            setProps({ value: val });
        }
    }, [val]);

    return (
        <MantineSlider
            {...other}
            value={val}
            onChange={setVal}
            onChangeEnd={(value) => {
                if (updatemode === "mouseup") {
                    setProps({ value });
                }
            }}
        />
    );
};

Slider.defaultProps = {
    updatemode: "mouseup",
    persisted_props: ["value"],
    persistence_type: "local",
};

export default Slider;
