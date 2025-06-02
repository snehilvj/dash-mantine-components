import {
    MantineColor,
    MantineRadius,
    MantineSize,
    Slider as MantineSlider,
} from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import { TransitionProps } from "props/transition";
import React, { useState } from "react";
import { setPersistence, getLoadingState } from "../../../utils/dash3";
import { parseFuncProps } from "../../../utils/prop-functions"

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Key of `theme.colors` or any valid CSS color, controls color of track and thumb, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `'xl'` by default */
    radius?: MantineRadius;
    /** Controls size of the track, `'md'` by default */
    size?: MantineSize | (string & {}) | number;
    /** Minimal possible value, `0` by default */
    min?: number;
    /** Maximum possible value, `100` by default */
    max?: number;
    /** Number by which value will be incremented/decremented with thumb drag and arrows, `1` by default */
    step?: number;
    /** Number of significant digits after the decimal point */
    precision?: number;
    /** Controlled component value */
    value?: number;
    /** Hidden input name, use with uncontrolled component */
    name?: string;
    /** Marks displayed on the track */
    marks?: {
        value: number;
        label?: React.ReactNode;
    }[];
    /** Function to generate label (See https://www.dash-mantine-components.com/functions-as-props) or any react node to render instead, set to null to disable label */
    label?: React.ReactNode;
    /** Props passed down to the `Transition` component, `{ transition: 'fade', duration: 0 }` by default */
    labelTransitionProps?: TransitionProps;
    /** Determines whether the label should be visible when the slider is not being dragged or hovered, `false` by default */
    labelAlwaysOn?: boolean;
    /** Thumb `aria-label` */
    thumbLabel?: string;
    /** Determines whether the label should be displayed when the slider is hovered, `true` by default */
    showLabelOnHover?: boolean;
    /** Content rendered inside thumb */
    thumbChildren?: React.ReactNode;
    /** Disables slider */
    disabled?: boolean;
    /** Thumb `width` and `height`, by default value is computed based on `size` prop */
    thumbSize?: number | string;
    /** Determines whether track value representation should be inverted, `false` by default */
    inverted?: boolean;
    /** Determines when the component should update its value property. If mouseup (the default) then the slider will only trigger its value when the user has finished dragging the slider. If drag, then the slider will update its value continuously as it is being dragged. */
    updatemode: "mouseup" | "drag";
    /** Determines whether the selection should be only allowed from the given marks array, false by default */
    restrictToMarks?: boolean;
    /** Function to generate scale (See https://www.dash-mantine-components.com/functions-as-props) A transformation function to change the scale of the slider */
    scale?: any;
}

/** Slider */
const Slider = ({
    setProps,
    loading_state,
    updatemode = "mouseup",
    value,
    persistence,
    persisted_props,
    persistence_type,
    ...others
}: Props) => {

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
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...parseFuncProps('Slider',others)}
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

setPersistence(Slider)

export default Slider;
