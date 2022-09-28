import React from "react";
import { DefaultProps } from "../../../props";
import { MantineNumberSize, MantineColor } from "@mantine/styles";

type Props = {
    /** Item title, rendered next to bullet */
    title?: React.ReactNode;
    /** React node that should be rendered inside bullet – icon, image, avatar, etc. */
    bullet?: React.ReactNode;
    /** Bullet width, height and border-radius in px, controlled by Timeline component */
    bulletSize?: number;
    /** Radius from theme.radius, or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** React node that will be rendered after title */
    children?: React.ReactNode;
    /** Should this item be highlighted, controlled by Timeline component */
    active?: boolean;
    /** Should line of this item be highlighted, controlled by Timeline component */
    lineActive?: boolean;
    /** Highlight color for active item */
    color?: MantineColor;
    /** Line and bullet position relative to item content, controlled by Timeline component */
    align?: "right" | "left";
    /** Line border style */
    lineVariant?: "solid" | "dashed" | "dotted";
    /** Line border width in px, controlled by Timeline component */
    lineWidth?: number;
} & DefaultProps;

/**
 * Display list of events in chronological order. For more information, see: https://mantine.dev/core/timeline/
 */
const TimelineItem = (props: Props) => {
    const { setProps, children, ...other } = props;

    return <>{children}</>;
};

TimelineItem.defaultProps = {};

export default TimelineItem;
