import { Menu as MantineMenu } from '@mantine/core';
import PropTypes from "prop-types";
import { omit } from "ramda";
import { renderDashComponent } from "dash-extensions-js";

const MenuItem = (props) => {

    const { children, class_name } = props

    return (
        <MantineMenu.Item
            {...omit(["children", "class_name", "icon"], props)}
            className={class_name}
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
    * component to be used to extends the usability
    */
    component: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]),

    /**
     * disables item
    */
    disabled: PropTypes.bool,

    /**
     * href link to the 
     */
    href: PropTypes.string,

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

    /**
    * target - if _blank link will redirect to a new tab
    */
    target: PropTypes.string,

    /**
    * to be used as Link
    */
    to: PropTypes.string
}

export default MenuItem;


