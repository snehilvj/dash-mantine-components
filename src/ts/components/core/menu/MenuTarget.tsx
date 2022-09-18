import React from "react";
import { DashComponentProps } from "../../../props";
import { Menu } from "@mantine/core";

type Props = {
    /** Menu target */
    children?: React.ReactNode;
} & DashComponentProps;

/**
 * Combine a list of secondary actions into single interactive area. For more information, see: https://mantine.dev/core/menu/
 */
const MenuTarget = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Menu.Target {...other}>{children}</Menu.Target>;
};

MenuTarget.defaultProps = {};

export default MenuTarget;
