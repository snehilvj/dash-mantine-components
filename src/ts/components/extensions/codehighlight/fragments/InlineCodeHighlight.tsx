import {
    InlineCodeHighlight as MantineInlineCodeHighlight,
    CodeHighlightAdapterProvider,
    createHighlightJsAdapter
} from "@mantine/code-highlight";
import '@mantine/code-highlight/styles.css';
import React from "react";
import { getLoadingState } from "../../../../utils/dash3";
import { Props }  from "../InlineCodeHighlight"
import hljs from 'highlight.js/lib/core';
import { registerTopLanguages } from '../../../../utils/code-highlight';

registerTopLanguages(hljs);
const highlightJsAdapter = createHighlightJsAdapter(hljs);

/** Highlight code inline with highlight.js */
const InlineCodeHighlight = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <CodeHighlightAdapterProvider adapter={highlightJsAdapter}>
            <MantineInlineCodeHighlight
                data-dash-is-loading={getLoadingState(loading_state) || undefined}
                {...others}
            />
        </CodeHighlightAdapterProvider>
    );
};

export default InlineCodeHighlight;
