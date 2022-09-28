import React from "react";
import { DefaultProps } from "../../../props";
import { Menu } from "@mantine/core";

type Props = {} & DefaultProps;

/**
 * Combine a list of secondary actions into single interactive area. For more information, see: https://mantine.dev/core/menu/
 */
const MenuDivider = (props: Props) => {
    const { setProps, ...other } = props;

    return <Menu.Divider {...other} />;
};

MenuDivider.defaultProps = {};

export default MenuDivider;
