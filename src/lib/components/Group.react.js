import React from "react";
import PropTypes from "prop-types";
import { Group as MantineGroup } from "@mantine/core";
import { omit } from "ramda";
import {
    AlignContentProperty,
    Directions,
    Positions,
    Sizes,
} from "../propTypes";

/** Compose elements and components in flex container. For more information, see: https://mantine.dev/core/group/ */
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
    /** The ID of this component, used to identify dash components in callbacks */
    id: PropTypes.string,

    /** Content */
    children: PropTypes.node,

    /** Often used with CSS to style elements with common properties */
    className: PropTypes.string,

    /**	Defines align-items css property */
    align: AlignContentProperty,

    /** Defines flex-direction property, row for horizontal, column for vertical */
    direction: Directions,

    /** Defines flex-grow property for each element, true -> 1, false -> 0 */
    grow: PropTypes.bool,

    /**	Defined flex-wrap property */
    noWrap: PropTypes.bool,

    /** Defines justify-content property */
    position: Positions,

    /** Space between elements */
    spacing: Sizes,

    /** Inline style override */
    style: PropTypes.object,
};

export default Group;
