import React from "react";
import { DashComponentProps, MantineColors, TextProps } from "../../props";
import { Highlight as MantineHighlight } from "@mantine/core";

type Props = {
    /** Section content */
    children?: string;
    /** Substring or an array of substrings to highlight in children */
    highlight: string | string[];
    /** Color from theme that is used for highlighting */
    highlightColor?: MantineColors;
} & TextProps &
    DashComponentProps;

/**
 * Highlight. For more information, see: https://mantine.dev/core/app-shell/
 */
const Highlight = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineHighlight {...other}>{children}</MantineHighlight>;
};

Highlight.defaultProps = {};

export default Highlight;
