import { Blockquote as MantineBlockquote } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import React from "react";

/**
 * Blockquote with optional cite. For more information, see: https://mantine.dev/core/blockquote/
 */
const Blockquote = (props) => {
    const { children } = props;

    return (
        <MantineBlockquote {...omit(["setProps", "children"], props)}>
            {children}
        </MantineBlockquote>
    );
};

Blockquote.displayName = "Blockquote";

Blockquote.defaultProps = {};

Blockquote.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Primary content
     */
    children: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Describe a reference to a cited quote
     */
    cite: PropTypes.string,

    /**
     * Badge color from theme
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
     * Inline style override
     */
    style: PropTypes.object,
};

export default Blockquote;
