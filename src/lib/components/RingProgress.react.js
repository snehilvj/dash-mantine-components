import React from "react";
import { RingProgress as MantineRingProgress } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { renderDashComponent } from "dash-extensions-js";

/**
 * Give user feedback for status of the task with circle diagram. For more information, see: https://mantine.dev/core/ring-progress/
 */
const RingProgress = (props) => {
    const { class_name } = props;
    const nProps = omit(["setProps", "class_name"], props);
    nProps.label = renderDashComponent(nProps.label);
    return <MantineRingProgress {...nProps} className={class_name} />;
};

RingProgress.displayName = "RingProgress";

RingProgress.defaultProps = {};

RingProgress.propTypes = {
    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Label displayed in the center of the ring [PropTypes.node]
     */
    label: PropTypes.any,

    /**
     * Sets whether the edges of the progress circle are rounded
     */
    roundCaps: PropTypes.bool,

    /**
     * Ring sections
     */
    sections: PropTypes.arrayOf(
        PropTypes.exact({
            value: PropTypes.number.isRequired,
            color: PropTypes.oneOfType([
                PropTypes.oneOf([
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
                PropTypes.string,
            ]).isRequired,
        })
    ).isRequired,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Width and height of the progress ring in px
     */
    size: PropTypes.number,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Ring thickness
     */
    thickness: PropTypes.number,
};

export default RingProgress;
