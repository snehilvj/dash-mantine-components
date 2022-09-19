import React from "react";
import { DashComponentProps, MantineColors } from "../../props";
import { Prism as MantinePrism } from "@mantine/prism";
import { MantineSize } from "@mantine/styles";
import { Language } from "prism-react-renderer";

type Props = {
    /** Code which will be highlighted */
    children?: string;
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
            color: MantineColors;
            label?: string;
        }
    >;
    /** Force color scheme, defaults to theme.colorScheme */
    colorScheme?: "dark" | "light";
    /** Defines whether the code should be trimmed, defaults to true */
    trim?: boolean;
    /** Key of theme.radius or number to set border-radius in px */
    radius?: MantineSize;
    /** Provide custom color scheme */
} & DashComponentProps;

/**
 * Renders white or dark background depending on color scheme. For more information, see: https://mantine.dev/core/paper/
 */
const Prism = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantinePrism {...other}>{children}</MantinePrism>;
};

Prism.defaultProps = {};

export default Prism;
