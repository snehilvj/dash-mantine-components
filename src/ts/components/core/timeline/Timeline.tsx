import {
    MantineColor,
    MantineRadius,
    Timeline as MantineTimeline,
} from "@mantine/core";

import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import { omit } from "ramda";
import React from "react";
import { getLoadingState, getChildProps, renderDashComponents } from "../../../utils/dash3";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** `Timeline.Item` components */
    children?: React.ReactNode;
    /** Index of active element */
    active?: number;
    /** Key of `theme.colors` or any valid CSS color to control active item colors, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `'xl'` by default */
    radius?: MantineRadius;
    /** Controls size of the bullet, `20` by default */
    bulletSize?: number | string;
    /** Controls how the content is positioned relative to the bullet, `'left'` by default */
    align?: "right" | "left";
    /** Control width of the line */
    lineWidth?: number | string;
    /** Determines whether the active items direction should be reversed without reversing items order, `false` by default */
    reverseActive?: boolean;
    /** Determines whether icon color should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
}

/** Timeline */
const Timeline = (props: Props) => {
    const { setProps, loading_state, children, ...others } = props;

    return (
        <MantineTimeline
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {React.Children.map(children, (child: any, index) => {
                const childProps = getChildProps(child)
                const renderedProps = renderDashComponents(
                    omit(["children"], childProps),
                    ["title", "bullet"]
                );
                return (
                    <MantineTimeline.Item {...renderedProps} key={index}>
                        {child}
                    </MantineTimeline.Item>
                );
            })}
        </MantineTimeline>
    );
};

export default Timeline;
