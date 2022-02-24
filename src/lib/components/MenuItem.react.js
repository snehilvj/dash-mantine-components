import { Menu as MantineMenu } from '@mantine/core';
import PropTypes from "prop-types";
import { omit } from "ramda";
import { renderDashComponents } from "dash-extensions-js";

const MenuItem = (props) => {

    const { children, class_name, icon } = props

    const RendIcon = renderDashComponents(icon);

    return (
        <MantineMenu.Item
            {...omit(["children", "class_name", "icon"], props)}
            className={class_name}
            icon={RendIcon}
        >
            {children}
        </MantineMenu.Item>
    );
}

MenuItem.displayName = "MenuItem";

MenuItem.defaultProps = {};

MenuItem.propTypes = {

    /**
    * item children
    */
    children: PropTypes.string,

    /**
    * icon on the left
    */
    icon: PropTypes.any,

    /**
     * react node, rendered on the right, for example, Badge or keyboard shortcut
    */
    rightSection: PropTypes.node,

    /**
     * disables item
    */
    disabled: PropTypes.bool,

    /**
     * Often used with CSS to style elements with common properties
     */
    class_name: PropTypes.string,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    setProps: PropTypes.func,
}

export default MenuItem;


