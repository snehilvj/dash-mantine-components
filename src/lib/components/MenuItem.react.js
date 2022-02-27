import { Menu as MantineMenu } from '@mantine/core';
import PropTypes from "prop-types";
import { omit } from "ramda";
import { renderDashComponent } from "dash-extensions-js";

const MenuItem = (props) => {

    const { children, class_name, icon } = props

    const RendIcon = renderDashComponent(icon);

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
     * Often used with CSS to style elements with common properties
    */
    class_name: PropTypes.string,

    /**
     * disables item
    */
    disabled: PropTypes.bool,
    /**
    * icon on the left
    */
    icon: PropTypes.any,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * react node, rendered on the right, for example, Badge or keyboard shortcut
    */
    rightSection: PropTypes.node,


    /**
    * Tells dash if any prop has changed its value
    */
    setProps: PropTypes.func,

    /**
     * Inline style override
    */
    style: PropTypes.object,

}

export default MenuItem;


