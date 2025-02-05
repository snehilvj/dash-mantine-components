import {
    Blockquote as MantineBlockquote,
    MantineColor,
    MantineRadius,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import { getLoadingState } from "../../utils/dash3";

import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Blockquote icon, displayed on the top left */
    icon?: React.ReactNode;
    /** Controls icon `width` and `height`, numbers are converted to rem, `40` by default */
    iconSize?: number | string;
    /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Reference to a cited quote */
    cite?: React.ReactNode;
    /** Content */
    children?: React.ReactNode;
}

/** Blockquote */
const Blockquote = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineBlockquote
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineBlockquote>
    );
};

Blockquote.defaultProps = {};

export default Blockquote;
