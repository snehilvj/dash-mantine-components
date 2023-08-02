import React from "react";
import { Prism as MantinePrism } from "@mantine/prism";
import { Language } from "prism-react-renderer";
import { DashBaseProps } from "props/dash";
import {
    MantineColor,
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";

type Props = {
    /** Code which will be highlighted */
    children: string;
    /** Programming language that should be highlighted */
    language: Language;
    /** True to remove copy to clipboard button */
    noCopy?: boolean;
    /** Copy button tooltip */
    copyLabel?: string;
    /** Copy button tooltip in copied state */
    copiedLabel?: string;
    /** Display line numbers */
    withLineNumbers?: boolean;
    /** Highlight line at given line number with color from theme.colors */
    highlightLines?: Record<
        string,
        {
            color: MantineColor;
            label?: string;
        }
    >;
    /** Force color scheme, defaults to theme.colorScheme */
    colorScheme?: "dark" | "light";
    /** Change scroll area component */
    scrollAreaComponent?: any;
    /** Defines whether the code should be trimmed, defaults to true */
    trim?: boolean;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Renders white or dark background depending on color scheme */
const Prism = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantinePrism {...other}>{children}</MantinePrism>;
};

Prism.defaultProps = {};

export default Prism;
