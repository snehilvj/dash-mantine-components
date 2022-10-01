import React from "react";
import { VerticalSectionSharedProps } from "../../../props";
import { Header as MantineHeader } from "@mantine/core";

/**
 * Header. For more information, see: https://mantine.dev/core/app-shell/
 */
const Header = (props: VerticalSectionSharedProps) => {
    const { children, setProps, ...other } = props;

    return <MantineHeader {...other}>{children}</MantineHeader>;
};

Header.defaultProps = {};

export default Header;
