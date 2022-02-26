import { Timeline as MantineTimeline } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import React, { useState } from "react";
import { renderDashComponents } from "dash-extensions-js";

const Timeline = (props) => {

    const { children, setProps, active } = props;
    const [setActive, setSetActive] = useState(active);

    const changeActive = (Newindex) => {

        setSetActive(Newindex);

        console.log("printou aqui", setActive)
        setProps({ active: Newindex });
    };

    return (
        <MantineTimeline
            {...omit(
                ["children", "setProps", "active"],
                props
            )}
            active={setActive}
        >
            {React.Children.map(children, (child, index) => {
                const childProps = child.props._dashprivate_layout.props;
                const renderedProps = renderDashComponents(
                    omit(["children"], childProps),
                    ["title", "bullet"]
                );
                return (
                    <MantineTimeline.Item
                        {...renderedProps}
                        key={index}
                        onClick={() => changeActive(index)}
                    >
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
