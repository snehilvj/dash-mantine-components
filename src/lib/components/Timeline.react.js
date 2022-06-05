import { Timeline as MantineTimeline } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import React from "react";
import { renderDashComponents } from "dash-extensions-js";

/**
 * Display list of events in chronological order. For more information, see: https://mantine.dev/core/timeline/
 */
const Timeline = (props) => {
    const { children, class_name } = props;

    return (
        <MantineTimeline
            {...omit(["children", "setProps"], props)}
            className={class_name}
        >
            {React.Children.map(children, (child, index) => {
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

Timeline.displayName = "Timeline";

Timeline.defaultProps = {};

Timeline.propTypes = {
    /**
     * Index of active element
     */
    active: PropTypes.number,

    /**
     * Timeline alignment
     */
    align: PropTypes.oneOf(["left", "right"]),

    /**
     * Bullet size in px
     */
    bulletSize: PropTypes.number,

    /**
     * <Timeline.Item /> components only
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

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
     * Line width in px
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
     * Reverse active direction without reversing items
     */
    reverseActive: PropTypes.bool,
};

export default Timeline;
