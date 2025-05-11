import {
    CodeHighlight as MantineCodeHighlight,
    CodeHighlightAdapterProvider
} from "@mantine/code-highlight";
import '@mantine/code-highlight/styles.css';
import './dmc-code.css';
import React from "react";
import { getLoadingState } from "../../../../utils/dash3";
import { highlightJsAdapter } from '../../../../utils/highlightJsAdapter';
import { Props }  from "../CodeHighlight"

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
