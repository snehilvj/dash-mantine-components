import React from "react";
import { DefaultProps } from "../../../props";
import { Menu, Box } from "@mantine/core";

type Props = {
    /** Menu dropdown content */
    children?: React.ReactNode;
} & DefaultProps;

/**
 * Combine a list of secondary actions into single interactive area. For more information, see: https://mantine.dev/core/menu/
 */
const MenuDropdown = (props: Props) => {
    const { children, setProps, ...other } = props;

    return (
        <Menu.Dropdown {...other}>
            <Box style={{ width: "fit-content" }}>{children}</Box>
        </Menu.Dropdown>
    );
};

MenuDropdown.defaultProps = {};

export default MenuDropdown;
