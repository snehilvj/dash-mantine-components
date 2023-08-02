import React from "react";
import { Timeline as MantineTimeline } from "@mantine/core";
import { renderDashComponents } from "dash-extensions-js";
import { omit } from "ramda";
import {
    MantineColor,
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** dmc.TimelineItem components only */
    children?: React.ReactNode;
    /** Index of active element */
    active?: number;
    /** Active color from theme */
    color?: MantineColor;
    /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
    radius?: MantineNumberSize;
    /** Bullet size */
    bulletSize?: number | string;
    /** Timeline alignment */
    align?: "right" | "left";
    /** Line width */
    lineWidth?: number | string;
    /** Reverse active direction without reversing items */
    reverseActive?: boolean;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Display list of events in chronological order */
const Timeline = (props: Props) => {
    const { setProps, children, ...other } = props;

    return (
        <MantineTimeline {...other}>
            {React.Children.map(children, (child: any, index) => {
                const childProps = child.props._dashprivate_layout.props;
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

Timeline.defaultProps = {};

export default Timeline;
