import PropTypes from "prop-types";

/**
 * Combine a list of secondary actions into single interactive area. For more information, see: https://mantine.dev/core/menu/
 */
const MenuLabel = (props) => {
    return <>{props.children}</>;
};

MenuLabel.displayName = "MenuLabel";

MenuLabel.defaultProps = {};

MenuLabel.propTypes = {
    /**
     * Primary content
     */
    children: PropTypes.string,
};

export default MenuLabel;
