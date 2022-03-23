import PropTypes from "prop-types";
import { Menu } from "@mantine/core";
import React from "react";

/**
 * Combine a list of secondary actions into single interactive area. For more information, see: https://mantine.dev/core/menu/
 */
const MenuLabel = (props) => {
    return <Menu.Label>{props.children}</Menu.Label>;
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
