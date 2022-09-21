import React from "react";
import { DashComponentProps, MantineColors } from "../../../props";
import { Timeline as MantineTimeline } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** TimelineItem components only */
    children?: React.ReactNode;
    /** Index of active element */
    active?: number;
    /** Active color from theme */
    color?: MantineColors;
    /** Radius from theme.radius, or number to set border-radius in px */
    radius?: MantineSize;
    /** Bullet size in px */
    bulletSize?: number;
    /** Timeline alignment */
    align?: "right" | "left";
    /** Line width in px */
    lineWidth?: number;
    /** Reverse active direction without reversing items */
    reverseActive?: boolean;
} & DashComponentProps;

/**
 * Display list of events in chronological order. For more information, see: https://mantine.dev/core/timeline/
 */
const Timeline = (props: Props) => {
    const { setProps, children, ...other } = props;

    return (
        <MantineTimeline {...other}>
            {React.Children.map(children, (child: any, index) => {
                const childProps = child.props._dashprivate_layout.props;
                return (
                    <MantineTimeline.Item {...childProps} key={index}>
                        {child}
                    </MantineTimeline.Item>
                );
            })}
        </MantineTimeline>
    );
};

Timeline.defaultProps = {};

export default Timeline;
