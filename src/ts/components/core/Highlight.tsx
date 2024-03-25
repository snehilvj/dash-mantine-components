import { MantineColor, Highlight as MantineHighlight } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { TextProps } from "props/text";
import React from "react";

interface Props extends DashBaseProps, TextProps {
    /** Substring or an array of substrings to highlight in `children` */
    highlight: string | string[];
    /** Key of `theme.colors` or any valid CSS color, passed to `Mark` component `color` prop, `yellow` by default */
    color?: MantineColor | string;
    /** Styles applied to `mark` elements */
    highlightStyles?: React.CSSProperties;
    /** Content */
    children?: string;
}

/** Highlight */
const Highlight = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <MantineHighlight {...others}>{children}</MantineHighlight>;
};

Highlight.defaultProps = {};

export default Highlight;
