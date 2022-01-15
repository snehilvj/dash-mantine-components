import React from "react";
import PropTypes from "prop-types";
import { Group as MantineGroup } from "@mantine/core";
import { omit } from "ramda";

/**
 * Compose elements and components in flex container. For more information, see: https://mantine.dev/core/group/
 */
const Group = (props) => {
    const { children, class_name } = props;

    return (
        <MantineGroup
            {...omit(["children", "setProps", "class_name"], props)}
            className={class_name}
        >
            {React.Children.map(children, (child, index) => {
                return <div key={index}>{child}</div>;
            })}
        </MantineGroup>
    );
};

Group.displayName = "Group";

Group.defaultProps = {};

Group.propTypes = {
    /**
     * Defines align-items css property
     */
    align: PropTypes.oneOf(["stretch", "center", "flex-end", "flex-start"]),

    /**
     * Content
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Defines flex-direction property, row for horizontal, column for vertical
     */
    direction: PropTypes.oneOf(["row", "column"]),

    /**
     * Defines flex-grow property for each element, true -> 1, false -> 0
     */
    grow: PropTypes.bool,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

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
    spacing: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Group;
