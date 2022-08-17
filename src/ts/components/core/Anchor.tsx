import React from "react";
import { DashComponentProps, TextProps } from "../../props";
import { Anchor as MantineAnchor } from "@mantine/core";

type Props = {
    /** Target */
    target?: "_blank" | "_self";
    /** href */
    href: string;
} & TextProps &
    DashComponentProps;

/**
 * Display links with theme styles. For more information, see: https://mantine.dev/core/anchor/
 */
const Anchor = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineAnchor {...other}>{children}</MantineAnchor>;
};

Anchor.defaultProps = {};

export default Anchor;
