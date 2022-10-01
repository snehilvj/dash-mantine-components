import React from "react";
import { HorizontalSectionSharedProps } from "../../../props";
import { Navbar as MantineNavbar } from "@mantine/core";

/**
 * Navbar. For more information, see: https://mantine.dev/core/app-shell/
 */
const Navbar = (props: HorizontalSectionSharedProps) => {
    const { children, setProps, ...other } = props;

    return <MantineNavbar {...other}>{children}</MantineNavbar>;
};

Navbar.defaultProps = {};

export default Navbar;
