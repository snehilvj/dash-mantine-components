import { Navbar as MantineNavbar } from "@mantine/core";
import { HorizontalSectionSharedProps } from "props/mantine";
import React from "react";

/** Navbar. */
const Navbar = (props: HorizontalSectionSharedProps) => {
    const { children, setProps, ...other } = props;

    return <MantineNavbar {...other}>{children}</MantineNavbar>;
};

Navbar.defaultProps = {};

export default Navbar;
