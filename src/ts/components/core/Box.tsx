import { Box as MantineBox } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { MantineStyleSystemProps, MantineStylesAPIProps } from "props/mantine";
import React from "react";

type Props = {
    /** Children */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Add inline styles to any element or component using sx */
const Box = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineBox {...other}>{children}</MantineBox>;
};

Box.defaultProps = {};

export default Box;
