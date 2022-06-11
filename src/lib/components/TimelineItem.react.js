import React from "react";
import PropTypes from "prop-types";

/**
 * Display list of events in chronological order. For more information, see: https://mantine.dev/core/timeline/
 */
const TimelineItem = (props) => {
    return <div>{props.children}</div>;
};

TimelineItem.displayName = "TimelineItem";

TimelineItem.defaultProps = {};

TimelineItem.propTypes = {
    /**
     * Line and bullet position relative to item content, controlled by Timeline component
     */
    align: PropTypes.oneOf(["left", "right"]),

    /**
     * Bullet size in px
     */
    bullet: PropTypes.any,

    /**
     * Bullet size in px
     */
    bulletSize: PropTypes.number,

    /**
     * React node that will be rendered after title
     */
    children: PropTypes.node,

    /**
     * 	Active color from theme
     */
    color: PropTypes.oneOf([
        "dark",
        "gray",
        "red",
        "pink",
        "grape",
        "violet",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "green",
        "lime",
        "yellow",
        "orange",
    ]),

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Line border style
     */
    lineVariant: PropTypes.oneOf(["dashed", "dotted", "solid"]),

    /**
     * Line border width in px, controlled by Timeline component
     */
    lineWidth: PropTypes.number,

    /**
     * Radius from theme.radius, or number to set border-radius in px
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Item title, rendered next to bullet
     */
    title: PropTypes.any,
};

export default TimelineItem;
