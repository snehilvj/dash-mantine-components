import { Menu as MantineMenu } from '@mantine/core';
import PropTypes from "prop-types";
import { omit } from "ramda";

const MenuItem = (props) => {

    const { children } = props

    return (
        <MantineMenu.Item
            {...omit(["children"], props)}
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
    className: PropTypes.string,

    /**
     * Inline style override
     */
    style: PropTypes.object,

}

export default MenuItem;

