import { Spoiler as MantineSpoiler } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import React from "react";

/**
 * Hide long sections of content under spoiler. For more information, see: https://mantine.dev/core/spoiler/
 */
const Spoiler = (props) => {
    const { children, class_name } = props;

    return (
        <MantineSpoiler
            {...omit(["setProps", "children", "class_name"], props)}
            className={class_name}
        >
            {children}
        </MantineSpoiler>
    );
};

Spoiler.displayName = "Spoiler";

Spoiler.defaultProps = {};

Spoiler.propTypes = {
    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Primary content
     */
    children: PropTypes.string,

    /**
     * Label for close spoiler action
     */
    hideLabel: PropTypes.string.isRequired,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Initial spoiler state, true to wrap content in spoiler, false to show content without spoiler, opened state will be updated on mount
     */
    initialState: PropTypes.bool,

    /**
     * Max height of visible content, when this point is reached spoiler appears
     */
    maxHeight: PropTypes.number,

    /**
     * Label for open spoiler action
     */
    showLabel: PropTypes.string.isRequired,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Spoiler reveal transition duration in ms, 0 or null to turn off animation
     */
    transitionDuration: PropTypes.number,
};

export default Spoiler;
