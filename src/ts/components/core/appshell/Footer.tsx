import { Footer as MantineFooter } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import {
    MantineStyleSystemProps,
    MantineStylesAPIProps,
    VerticalSectionSharedProps,
} from "props/mantine";
import React from "react";

type Props = VerticalSectionSharedProps &
    DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Footer. */
const Footer = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineFooter {...other}>{children}</MantineFooter>;
};

Footer.defaultProps = {};

export default Footer;
