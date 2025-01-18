import { MantineColor, Highlight as MantineHighlight } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { TextProps } from "props/text";
import React from "react";

interface Props extends DashBaseProps, TextProps {
    /** Substring or an array of substrings to highlight in `children` */
    highlight: string | string[];
    /** Key of `theme.colors` or any valid CSS color, passed to `Mark` component `color` prop, `yellow` by default */
    color?: MantineColor | string;
    /** Styles applied to `mark` elements.  Note CSS properties are camelCase,  for example `highlightStyles={"backgroundColor": "blue"}` */
    highlightStyles?: {};
    /** Content */
    children?: string;
}

/** Highlight */
const Highlight = (props: Props) => {
    const { children, setProps,  ...others } = props;

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineHighlight
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </MantineHighlight>
    );
};

export default Highlight;
