import {
    CodeHighlightTabs as MantineCodeHighlightTabs,
    CodeHighlightAdapterProvider
} from "@mantine/code-highlight";
import "@mantine/code-highlight/styles.css";
import './dmc-code.css';
import React from "react";
import { getLoadingState, newRenderDashComponents, getContextPath } from "../../../../utils/dash3";
import { Props }  from "../CodeHighlightTabs"
import {isEmpty} from 'ramda';
import { highlightJsAdapter } from '../../../../utils/highlightJsAdapter';


/** Display code in tabs and highlight code with highlight.js */
const CodeHighlightTabs = (props: Props) => {
    const { setProps, loading_state, code, ...others } = props;
    const componentPath = getContextPath();
    const renderedCode = [];

    if (Array.isArray(code)) {
        code.forEach((item, index) => {
            renderedCode.push(
                newRenderDashComponents(item, ["icon"], !isEmpty(componentPath) ? [...componentPath, 'props', 'code', index] : [])
            );
        });
    } else {
        renderedCode.push(
            newRenderDashComponents(code, ["icon"], !isEmpty(componentPath) ? [...componentPath, 'props', 'code'] : [])
        );
    }

    return (
        <CodeHighlightAdapterProvider adapter={highlightJsAdapter}>
            <MantineCodeHighlightTabs
                data-dash-is-loading={getLoadingState(loading_state) || undefined}
                code={renderedCode}
                {...others}
            />
        </CodeHighlightAdapterProvider>
    );
};

CodeHighlightTabs.dashChildrenUpdate = true

export default CodeHighlightTabs;