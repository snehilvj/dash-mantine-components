import { Avatar, AvatarsGroup as AvatarGroupMantine } from '@mantine/core';
import PropTypes from "prop-types";
import { omit } from "ramda";
import React from "react";

const AvatarGroup = (props) => {
    const { children } = props;
    return (
        <AvatarGroupMantine {...omit(["setProps", "children"], props)} >
            {React.Children.map(children, (child, index) => {
                const childProps = child.props._dashprivate_layout.props;
                return (
                    <Avatar {...childProps} />
                );
            })}
        </AvatarGroupMantine>
    );
}

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
    * Total number of child <Avatar />, overrides the truncated amount
    */
    total: PropTypes.number,
};

export default AvatarGroup;


