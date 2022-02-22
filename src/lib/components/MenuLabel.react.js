import { Menu as MantineMenu } from '@mantine/core';
import PropTypes from "prop-types";

const MenuLabel = (props) => {
    return (
        <MantineMenu.Label>
            {props.children}
        </MantineMenu.Label>
    );
}

MenuLabel.displayName = "MenuLabel";

MenuLabel.defaultProps = {};

MenuLabel.propTypes = {
    /**
    * children refers to the Menu label
    */
    children: PropTypes.string,

}

export default MenuLabel;

