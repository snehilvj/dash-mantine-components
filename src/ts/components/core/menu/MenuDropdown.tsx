import { Menu } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {
    /** Content */
    children: React.ReactNode;
}

/** MenuDropdown */
const MenuDropdown = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <Menu.Dropdown {...others}>{children}</Menu.Dropdown>;
};

MenuDropdown.defaultProps = {};

export default MenuDropdown;
