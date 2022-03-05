import PropTypes from "prop-types";

/**
 * Combine a list of secondary actions into single interactive area. For more information, see: https://mantine.dev/core/menu/
 */
const MenuItem = (props) => {
    return <>{props.children}</>;
};

MenuItem.displayName = "MenuItem";

MenuItem.defaultProps = {};

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
     * Icon rendered on the left side of label
     */
    icon: PropTypes.any,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Any react node to render on the right side of item, for example, keyboard shortcut or badge
     */
    rightSection: PropTypes.any,

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default MenuItem;
