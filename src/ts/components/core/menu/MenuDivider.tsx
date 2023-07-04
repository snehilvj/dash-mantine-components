import { Menu } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React from "react";

type Props = DashBaseProps & MantineStylesAPIProps & MantineStyleSystemProps;

/** Combine a list of secondary actions into single interactive area */
const MenuDivider = (props: Props) => {
    const { setProps, ...other } = props;

    return <Menu.Divider {...other} />;
};

MenuDivider.defaultProps = {};

export default MenuDivider;
