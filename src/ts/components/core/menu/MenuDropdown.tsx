import { Box, Menu } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React from "react";

type Props = {
    /** Menu dropdown content */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Combine a list of secondary actions into single interactive area */
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
