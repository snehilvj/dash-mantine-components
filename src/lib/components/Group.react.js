import React from "react";
import PropTypes from "prop-types";
import { Group as MantineGroup } from "@mantine/core";
import { omit } from "ramda";

/**
 * Compose elements and components in flex container. For more information, see: https://mantine.dev/core/group/
 */
const Group = (props) => {
    let { children } = props;

    if (!Array.isArray(children)) {
        children = [children];
    }

    return (
        <MantineGroup {...omit(["children", "setProps"], props)}>
            {children.map((child, index) => {
                return <div key={index}>{child}</div>;
            })}
        </MantineGroup>
    );
};

Group.displayName = "Group";

Group.defaultProps = {};

Group.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Content
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Defines align-items css property
     */
    align: PropTypes.oneOf(["stretch", "center", "flex-end", "flex-start"]),

    /**
     * Defines flex-direction property, row for horizontal, column for vertical
     */
    direction: PropTypes.oneOf(["row", "column"]),

    /**
     * Defines flex-grow property for each element, true -> 1, false -> 0
     */
    grow: PropTypes.bool,

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
     * Defined flex-wrap property
     */
    noWrap: PropTypes.bool,

    /**
     * Defines justify-content property
     */
    position: PropTypes.oneOf(["right", "center", "left", "apart"]),

    /**
     * Space between elements
     */
    spacing: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Group;
