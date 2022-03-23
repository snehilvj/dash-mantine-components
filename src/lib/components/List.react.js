import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { List as MantineList } from "@mantine/core";
import { renderDashComponent } from "dash-extensions-js";

/**
 * Display ordered or unordered list, see: https://mantine.dev/core/list/
 */
const List = (props) => {
    const { class_name, children, icon } = props;

    return (
        <MantineList
            {...omit(["setProps", "children", "class_name", "icon"], props)}
            className={class_name}
            icon={renderDashComponent(icon)}
        >
            {React.Children.map(children, (child, index) => {
                const childProps = child.props._dashprivate_layout.props;
                return (
                    <MantineList.Item
                        key={index}
                        className={childProps.class_name}
                        icon={renderDashComponent(childProps.icon)}
                        id={childProps.id}
                    >
                        {child}
                    </MantineList.Item>
                );
            })}
        </MantineList>
    );
};

List.displayName = "List";

List.defaultProps = {};

List.propTypes = {
    /**
     * Center items with icon
     */
    center: PropTypes.bool,

    /**
     * <List.Item /> components only
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Icon that should replace list item dot
     */
    icon: PropTypes.any,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * List style type such as circle, square, upper-roman, lower-alpha, etc.
     */
    listStyleType: PropTypes.string,

    /**
     * Font size from theme or number to set value in px
     */
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Spacing between items from theme or number to set value in px
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
     * List type: ol or ul
     */
    type: PropTypes.oneOf(["ordered", "unordered"]),

    /**
     * Include padding-left to offset list from main content
     */
    withPadding: PropTypes.bool,
};

export default List;
