import { Avatar, AvatarsGroup as AvatarGroupMantine } from "@mantine/core";
import PropTypes from "prop-types";
import { omit } from "ramda";
import React from "react";

const AvatarGroup = (props) => {
    const { children, class_name } = props;

    return (
        <AvatarGroupMantine
            {...omit(["setProps", "children", "class_name"], props)}
            className={class_name}
        >
            {React.Children.map(children, (child, index) => {
                const childProps = child.props._dashprivate_layout.props;
                return <Avatar {...childProps} key={index} />;
            })}
        </AvatarGroupMantine>
    );
};

AvatarGroup.displayName = "AvatarGroup";

AvatarGroup.defaultProps = {
    limit: 2,
    radius: "xl",
    size: "md",
    spacing: "lg",
};

AvatarGroup.propTypes = {
    /**
     * <Avatar /> components only
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Maximum amount of <Avatar /> components rendered, everything after limit is truncated
     */
    limit: PropTypes.number,

    /**
     * Child <Avatar /> radius
     */
    radius: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Child <Avatar /> components width and height
     */
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Spacing between avatars
     */
    spacing: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Total number of child <Avatar />, overrides the truncated amount
     */
    total: PropTypes.number,
};

export default AvatarGroup;
