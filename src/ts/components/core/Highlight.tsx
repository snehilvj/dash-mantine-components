import React from "react";
import { Highlight as MantineHighlight } from "@mantine/core";
import { MantineColor } from "@mantine/styles";
import {
    MantineStylesAPIProps,
    MantineStyleSystemProps,
    TextProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Content */
    children?: string;
    /** Substring or an array of substrings to highlight in children */
    highlight: string | string[];
    /** Color from theme that is used for highlighting */
    highlightColor?: MantineColor;
} & TextProps &
    DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Highlight given part of a string with mark tag */
const Highlight = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineHighlight {...other}>{children}</MantineHighlight>;
};

Highlight.defaultProps = {};

export default Highlight;
