import React from "react";
import { DashComponentProps } from "../../../props";
import { Menu } from "@mantine/core";

type Props = {
    /** Menu dropdown content */
    children?: React.ReactNode;
} & DashComponentProps;

/**
 * Combine a list of secondary actions into single interactive area. For more information, see: https://mantine.dev/core/menu/
 */
const MenuDropdown = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Menu.Dropdown {...other}>{children}</Menu.Dropdown>;
};

MenuDropdown.defaultProps = {};

export default MenuDropdown;
