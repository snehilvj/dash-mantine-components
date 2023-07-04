import { Header as MantineHeader } from "@mantine/core";
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

/** Header. */
const Header = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineHeader {...other}>{children}</MantineHeader>;
};

Header.defaultProps = {};

export default Header;
