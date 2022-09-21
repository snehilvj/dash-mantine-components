import React from "react";
import { DashComponentProps, TextProps } from "../../props";
import { Text as MantineText } from "@mantine/core";

type Props = {
    /** Content */
    children?: React.ReactNode;
} & TextProps &
    DashComponentProps;

/**
 * Render text and links with theme styles. For more information, see: https://mantine.dev/core/text/
 */
const Text = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineText {...other}>{children}</MantineText>;
};

Text.defaultProps = {};

export default Text;
