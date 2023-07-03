import React from "react";
import { Footer as MantineFooter } from "@mantine/core";
import { VerticalSectionSharedProps } from "props/mantine";

/** Footer. */
const Footer = (props: VerticalSectionSharedProps) => {
    const { children, setProps, ...other } = props;

    return <MantineFooter {...other}>{children}</MantineFooter>;
};

Footer.defaultProps = {};

export default Footer;
