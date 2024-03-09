import { Text as MantineText } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { TextProps } from "props/text";
import React from "react";

interface Props extends TextProps, DashBaseProps {
    /** Content */
    children?: React.ReactNode;
}

/** Text */
const Text = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineText {...other}>{children}</MantineText>;
};

Text.defaultProps = {};

export default Text;
