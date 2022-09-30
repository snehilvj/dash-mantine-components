import React from "react";
import { DefaultProps } from "../../props";
import { Prism as MantinePrism } from "@mantine/prism";
import { MantineNumberSize, MantineColor } from "@mantine/styles";
import { Language } from "prism-react-renderer";

type Props = {
    /** Code which will be highlighted */
    children?: string;
    /** Programming language that should be highlighted */
    language: Language;
    /** True to remove copy to clipboard button */
    noCopy?: boolean;
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
    /** Defines whether the code should be trimmed, defaults to true */
    trim?: boolean;
    /** Key of theme.radius or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Provide custom color scheme */
} & DefaultProps;

/**
 * Renders white or dark background depending on color scheme. For more information, see: https://mantine.dev/core/paper/
 */
const Prism = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantinePrism {...other}>{children}</MantinePrism>;
};

Prism.defaultProps = {};

export default Prism;
