import PropTypes from "prop-types";
import { Menu } from "@mantine/core";
import { omit } from "ramda";
import React from "react";
import { renderDashComponents } from "dash-extensions-js";

/**
 * Combine a list of secondary actions into single interactive area. For more information, see: https://mantine.dev/core/menu/
 */
const MenuItem = (props) => {
    const { children, class_name, n_clicks, setProps, disabled, href } = props;

    const increment = () => {
        if (!disabled) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    const nProps = renderDashComponents(
        omit(["children", "class_name", "setProps"], props),
        ["icon", "rightSection"]
    );

    const component = "a";

    return (
        <Menu.Item
            {...nProps}
            onClick={increment}
            className={class_name}
            component={href && component}
        >
            {children}
        </Menu.Item>
    );
};

MenuItem.displayName = "MenuItem";

MenuItem.defaultProps = {
    n_clicks: 0,
};

MenuItem.propTypes = {
    /**
     * Item children
     */
    children: PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Any color from theme.colors
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
     * Is item disabled
     */
    disabled: PropTypes.bool,

    /**
     * href if MenuItem is supposed to be used as a link
     */
    href: PropTypes.string,

    /**
     * Icon rendered on the left side of label
     */
    icon: PropTypes.any,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * An integer that represents the number of times that this element has been clicked on
     */
    n_clicks: PropTypes.number,

    /**
     * Any react node to render on the right side of item, for example, keyboard shortcut or badge
     */
    rightSection: PropTypes.any,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * Target if MenuItem is supposed to be used as a link
     */
    target: PropTypes.oneOf(["_blank", "_self"]),
};

export default MenuItem;
