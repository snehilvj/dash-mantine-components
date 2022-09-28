import React from "react";
import { DefaultProps } from "../../props";
import { Blockquote as MantineBlockquote } from "@mantine/core";
import { MantineColor } from "@mantine/styles";

type Props = {
    /** Icon color from theme */
    color?: MantineColor;
    /** Icon, defaults to quote icon */
    icon?: React.ReactNode;
    /** Describe a reference to a cited quote */
    cite?: React.ReactNode;
    /** Content */
    children?: React.ReactNode;
} & DefaultProps;

/**
 * Blockquote with optional cite. For more information, see: https://mantine.dev/core/blockquote/
 */
const Blockquote = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineBlockquote {...other}>{children}</MantineBlockquote>;
};

Blockquote.defaultProps = {};

export default Blockquote;
