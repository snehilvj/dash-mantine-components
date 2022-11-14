import React from "react";
import { DefaultProps, PersistenceProps } from "../../props";
import {
    SegmentedControl as MantineSegmentedControl,
    SegmentedControlItem,
} from "@mantine/core";
import { MantineSize, MantineNumberSize, MantineColor } from "@mantine/styles";

type Props = {
    /** Data based on which controls are rendered */
    data: SegmentedControlItem[] | string[];
    /** Current selected value */
    value?: string;
    /** Disabled input state */
    disabled?: boolean;
    /** True if component should have 100% width */
    fullWidth?: boolean;
    /** Active control color from theme.colors, defaults to white in light color scheme and theme.colors.dark[9] in dark */
    color?: MantineColor;
    /** Controls font-size, paddings and height */
    size?: MantineSize;
    /** Border-radius from theme or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Transition duration in ms, set to 0 to turn off transitions */
    transitionDuration?: number;
    /** Transition timing function for all transitions, defaults to theme.transitionTimingFunction */
    transitionTimingFunction?: string;
    /** Display Vertically */
    orientation?: "vertical" | "horizontal";
} & PersistenceProps &
    DefaultProps;

/**
 * Horizontal control made of multiple segments, alternative to RadioGroup. For more information, see: https://mantine.dev/core/segmented-control/
 */
const SegmentedControl = (props: Props) => {
    const {
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...other
    } = props;

    const onChange = (value: string) => {
        setProps({ value });
    };

    return <MantineSegmentedControl onChange={onChange} {...other} />;
};

SegmentedControl.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default SegmentedControl;
