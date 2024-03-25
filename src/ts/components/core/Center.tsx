import { Center as MantineCenter } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
}

/** Center */
const Center = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <MantineCenter {...others}>{children}</MantineCenter>;
};

Center.defaultProps = {};

export default Center;
