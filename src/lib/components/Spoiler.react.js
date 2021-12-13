import { Spoiler as MantineSpoiler } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import React from "react";

/**
 * Hide long sections of content under spoiler. For more information, see: https://mantine.dev/core/spoiler/
 */
const Spoiler = (props) => {
    const { children } = props;

    return (
        <MantineSpoiler {...omit(["setProps", "children"], props)}>
            {children}
        </MantineSpoiler>
    );
};

Spoiler.displayName = "Spoiler";

Spoiler.defaultProps = {
    showLabel: "Show more",
    hideLabel: "Hide",
};

Spoiler.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Primary content
     */
    children: PropTypes.string,

    /**
     * Label for close spoiler action
     */
    hideLabel: PropTypes.string,

    /**
     * Initial spoiler state, true to wrap content in spoiler, false to show content without spoiler, opened state will be updated on mount
     */
    initialState: PropTypes.bool,

    /**
     * Max height of visible content, when this point is reached spoiler appears
     */
    maxHeight: PropTypes.number,

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string,
    }),

    /**
     * Label for open spoiler action
     */
    showLabel: PropTypes.string,
};

export default Spoiler;
