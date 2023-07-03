import React from "react";
import { Header as MantineHeader } from "@mantine/core";
import { VerticalSectionSharedProps } from "props/mantine";

/** Header. */
const Header = (props: VerticalSectionSharedProps) => {
    const { children, setProps, ...other } = props;

    return <MantineHeader {...other}>{children}</MantineHeader>;
};

Header.defaultProps = {};

export default Header;
