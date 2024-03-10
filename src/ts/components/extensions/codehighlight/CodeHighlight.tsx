import { CodeHighlight as MantineCodeHighlight } from "@mantine/code-highlight";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Code to highlight */
    code: string;
    /** Code language, `'tsx'` by default */
    language?: string;
    /** Determines whether copy button should be displayed, `true` by default */
    withCopyButton?: boolean;
    /** Copy tooltip label, `'Copy code'` by default */
    copyLabel?: string;
    /** Copied tooltip label, `'Copied'` by default */
    copiedLabel?: string;
    /** Determines whether code should be highlighted only after component is mounted to the dom (disables code highlight on server), `false` by default */
    highlightOnClient?: boolean;
}

/** CodeHighlight */
const CodeHighlight = (props: Props) => {
    const { setProps, ...other } = props;

    return <MantineCodeHighlight {...other} />;
};

CodeHighlight.defaultProps = {};

export default CodeHighlight;
