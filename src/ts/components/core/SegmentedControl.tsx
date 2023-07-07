import {
    SegmentedControl as MantineSegmentedControl,
    SegmentedControlItem,
} from "@mantine/core";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    MantineColor,
    MantineNumberSize,
    MantineSize,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

export type Props = {
    /** Segments to render */
    data: string[] | SegmentedControlItem[];
    /** Current selected value */
    value?: string;
    /** Disabled input state */
    disabled?: boolean;
    /** Name of the radio group, default to random id */
    name?: string;
    /** True if component should have 100% width */
    fullWidth?: boolean;
    /** Active control color from theme.colors, defaults to white in light color scheme and theme.colors.dark[9] in dark */
    color?: MantineColor;
    /** Controls font-size, paddings and height */
    size?: MantineSize;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Transition duration in ms, set to 0 to turn off transitions */
    transitionDuration?: number;
    /** Transition timing function for all transitions, defaults to theme.transitionTimingFunction */
    transitionTimingFunction?: string;
    /** The orientation of the component */
    orientation?: "vertical" | "horizontal";
    /** Determines whether the user can change value */
    readOnly?: boolean;
} & PersistenceProps &
    DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** A linear set of two or more segments */
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
