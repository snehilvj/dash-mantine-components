import { Menu } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React from "react";

type Props = {
    /** Label content */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Combine a list of secondary actions into single interactive area */
const MenuLabel = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Menu.Label {...other}>{children}</Menu.Label>;
};

MenuLabel.defaultProps = {};

export default MenuLabel;
