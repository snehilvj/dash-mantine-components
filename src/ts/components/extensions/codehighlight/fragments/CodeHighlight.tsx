import {
    CodeHighlight as MantineCodeHighlight,
    CodeHighlightAdapterProvider,
    createHighlightJsAdapter
} from "@mantine/code-highlight";
import '@mantine/code-highlight/styles.css';
import './dmc-code.css';
import React from "react";
import { getLoadingState } from "../../../../utils/dash3";
import { Props }  from "../CodeHighlight"
import hljs from 'highlight.js/lib/core';
import { registerTopLanguages } from '../../../../utils/code-highlight';

registerTopLanguages(hljs);
const highlightJsAdapter = createHighlightJsAdapter(hljs);

/** Highlight code with highlight.js*/
const CodeHighlight = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <CodeHighlightAdapterProvider adapter={highlightJsAdapter}>
            <MantineCodeHighlight
                data-dash-is-loading={getLoadingState(loading_state) || undefined}
                {...others}
            />
        </CodeHighlightAdapterProvider>

    );
};

export default CodeHighlight;
