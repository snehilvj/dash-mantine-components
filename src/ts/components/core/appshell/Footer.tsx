import React from "react";
import { Footer as MantineFooter } from "@mantine/core";
import { VerticalSectionSharedProps } from "../../../props";

/**
 * Footer. For more information, see: https://mantine.dev/core/app-shell/
 */
const Footer = (props: VerticalSectionSharedProps) => {
    const { children, setProps, ...other } = props;

    return <MantineFooter {...other}>{children}</MantineFooter>;
};

Footer.defaultProps = {};

export default Footer;
