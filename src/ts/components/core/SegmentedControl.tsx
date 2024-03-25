import {
    MantineColor,
    MantineRadius,
    SegmentedControl as MantineSegmentedControl,
    MantineSize,
    SegmentedControlItem,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Data based on which controls are rendered */
    data: (string | SegmentedControlItem)[];
    /** Controlled component value */
    value?: string;
    /** Determines whether the component is disabled */
    disabled?: boolean;
    /** Name of the radio group, by default random name is generated */
    name?: string;
    /** Determines whether the component should take 100% width of its parent, `false` by default */
    fullWidth?: boolean;
    /** Key of `theme.colors` or any valid CSS color, changes color of indicator, by default color is based on current color scheme */
    color?: MantineColor;
    /** Controls `font-size`, `padding` and `height` properties, `'sm'` by default */
    size?: MantineSize | (string & {});
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Indicator `transition-duration` in ms, set `0` to turn off transitions, `200` by default */
    transitionDuration?: number;
    /** Indicator `transition-timing-function` property, `ease` by default */
    transitionTimingFunction?: string;
    /** Determines in which orientation component id displayed, `'horizontal'` by default */
    orientation?: "vertical" | "horizontal";
    /** Determines whether the value can be changed */
    readOnly?: boolean;
    /** Determines whether text color should depend on `background-color` of the indicator. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /** Determines whether there should be borders between items, `true` by default */
    withItemsBorders?: boolean;
}

/** SegmentedControl */
const SegmentedControl = (props: Props) => {
    const {
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const onChange = (value: string) => {
        setProps({ value });
    };

    return <MantineSegmentedControl onChange={onChange} {...others} />;
};

SegmentedControl.defaultProps = {
    persisted_props: ["value"],
    persistence_type: "local",
};

export default SegmentedControl;
