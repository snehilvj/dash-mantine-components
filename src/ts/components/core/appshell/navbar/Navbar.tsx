import { Navbar as MantineNavbar } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import {
    HorizontalSectionSharedProps,
    MantineStyleSystemProps,
    MantineStylesAPIProps,
} from "props/mantine";
import React from "react";

type Props = HorizontalSectionSharedProps &
    DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Navbar. */
const Navbar = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineNavbar {...other}>{children}</MantineNavbar>;
};

Navbar.defaultProps = {};

export default Navbar;
