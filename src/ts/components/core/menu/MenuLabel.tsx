import React from "react";
import { DashComponentProps } from "../../../props";
import { Menu } from "@mantine/core";

type Props = {
    /** Label content */
    children?: React.ReactNode;
} & DashComponentProps;

/**
 * Combine a list of secondary actions into single interactive area. For more information, see: https://mantine.dev/core/menu/
 */
const MenuLabel = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Menu.Label {...other}>{children}</Menu.Label>;
};

MenuLabel.defaultProps = {};

export default MenuLabel;
