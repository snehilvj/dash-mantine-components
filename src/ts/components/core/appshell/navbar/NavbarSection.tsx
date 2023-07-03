import React from "react";
import { Navbar, ScrollArea } from "@mantine/core";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Section children */
    children: React.ReactNode;
    /** Force section to take all available height */
    grow?: boolean;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Navbar Section. */
const NavbarSection = (props: Props) => {
    const { children, setProps, ...other } = props;

    return (
        <Navbar.Section component={ScrollArea} {...other}>
            {children}
        </Navbar.Section>
    );
};

NavbarSection.defaultProps = {};

export default NavbarSection;
