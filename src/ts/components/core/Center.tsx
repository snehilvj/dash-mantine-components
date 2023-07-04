import { Center as MantineCenter } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React from "react";

type Props = {
    /** Content that should be centered vertically and horizontally */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Centers content vertically and horizontally */
const Center = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineCenter {...other}>{children}</MantineCenter>;
};

Center.defaultProps = {};

export default Center;
