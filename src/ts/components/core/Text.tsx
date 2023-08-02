import React from "react";
import { Text as MantineText } from "@mantine/core";
import {
    MantineStylesAPIProps,
    MantineStyleSystemProps,
    TextProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = TextProps &
    DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Render text and links with theme styles */
const Text = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineText {...other}>{children}</MantineText>;
};

Text.defaultProps = {};

export default Text;
