import {
    CodeHighlightTabsCode,
    CodeHighlightTabs as MantineCodeHighlightTabs,
} from "@mantine/code-highlight";
import "@mantine/code-highlight/styles.css";
import { renderDashComponents } from "dash-extensions-js";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Code to highlight with meta data (file name and icon) */
    code: CodeHighlightTabsCode | CodeHighlightTabsCode[];
    /** Index of controlled active tab state */
    activeTab?: number;
    /** Determines whether header with file names and copy button should be rendered, `true` by default */
    withHeader?: boolean;
    /** Copy tooltip label, `'Copy code'` by default */
    copyLabel?: string;
    /** Copied tooltip label, `'Copied'` by default */
    copiedLabel?: string;
    /** `max-height` of code in collapsed state */
    maxCollapsedHeight?: React.CSSProperties["maxHeight"];
    /** Uncontrolled expanded state initial value */
    defaultExpanded?: boolean;
    /** Expand button label and tooltip, `'Expand code'` by default */
    expandCodeLabel?: string;
    /** Collapse button label and tooltip, `'Collapse code'` by default */
    collapseCodeLabel?: string;
    /** Determines whether to show the expand button, `false` by default */
    withExpandButton?: boolean;
    /** Determines whether copy button should be displayed, `true` by default */
    withCopyButton?: boolean;
}

/** CodeHighlightTabs */
const CodeHighlightTabs = (props: Props) => {
    const { setProps, loading_state, code, ...others } = props;
    const renderedCode = [];
    if (Array.isArray(code)) {
        code.forEach((item, index) => {
            renderedCode.push(renderDashComponents(item, ["icon"]));
        });
    } else {
        renderedCode.push(renderDashComponents(code, ["icon"]));
    }

    return (
        <MantineCodeHighlightTabs
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            code={renderedCode}
            {...others}
        />
    );
};

CodeHighlightTabs.defaultProps = {};

export default CodeHighlightTabs;
