import React from "react";
import {
    MantineColor,
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Item title, rendered next to bullet */
    title?: React.ReactNode;
    /** React node that should be rendered inside bullet – icon, image, avatar, etc. */
    bullet?: React.ReactNode;
    /** Bullet width, height and border-radius, controlled by Timeline component */
    bulletSize?: number;
    /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
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
    /** Line border width, controlled by Timeline component */
    lineWidth?: number;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Display list of events in chronological order */
const TimelineItem = (props: Props) => {
    return <>{props.children}</>;
};

TimelineItem.defaultProps = {};

export default TimelineItem;
