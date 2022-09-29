import React from "react";
import { DefaultProps, TextProps } from "../../props";
import { Highlight as MantineHighlight } from "@mantine/core";
import { MantineColor } from "@mantine/styles";

type Props = {
    /** Content */
    children?: string;
    /** Substring or an array of substrings to highlight in children */
    highlight: string | string[];
    /** Color from theme that is used for highlighting */
    highlightColor?: MantineColor;
} & TextProps &
    DefaultProps;

/**
 * Highlight given part of a string with mark tag. For more information, see: https://mantine.dev/core/app-shell/
 */
const Highlight = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineHighlight {...other}>{children}</MantineHighlight>;
};

Highlight.defaultProps = {};

export default Highlight;
