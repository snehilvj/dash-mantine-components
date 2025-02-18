import {
    MantineColor,
    MantineRadius,
    SegmentedControl as MantineSegmentedControl,
    MantineSize,
    SegmentedControlItem,
} from "@mantine/core";
import { renderDashComponent } from "dash-extensions-js";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { setPersistence, getLoadingState } from "../../utils/dash3";

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

/** SegmentedControl is a horizontal selector for choosing one option from multiple segments */
const SegmentedControl = (props: Props) => {
    const {
        data,
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const renderedData = [];
    data.forEach((item, index) => {
        if (typeof item === "string") {
            renderedData.push(item);
        } else {
            const rItem = {
                value: item["value"],
                label: renderDashComponent(item["label"]),
                disabled: item["disabled"],
            };
            renderedData.push(rItem);
        }
    });

    const onChange = (value: string) => {
        setProps({ value });
    };

    return (
        <MantineSegmentedControl
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            data={renderedData}
            onChange={onChange}
            {...others}
        />
    );
};

setPersistence(SegmentedControl)

export default SegmentedControl;
