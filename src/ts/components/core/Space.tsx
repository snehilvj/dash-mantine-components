import { Space as MantineSpace } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React from "react";

type Props = {
    /** Content */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Add horizontal or vertical spacing from theme */
const Space = (props: Props) => {
    const { setProps, children, ...other } = props;

    return <MantineSpace {...other}>{children}</MantineSpace>;
};

Space.defaultProps = {};

export default Space;
