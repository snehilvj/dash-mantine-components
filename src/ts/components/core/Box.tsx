import { Box as MantineBox } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import React from "react";

interface Props extends BoxProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
}

/** Box */
const Box = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineBox {...other}>{children}</MantineBox>;
};

Box.defaultProps = {};

export default Box;
