import {
    InlineCodeHighlight as MantineInlineCodeHighlight,
    CodeHighlightAdapterProvider
} from "@mantine/code-highlight";
import '@mantine/code-highlight/styles.css';
import React from "react";
import { getLoadingState } from "../../../../utils/dash3";
import { Props }  from "../InlineCodeHighlight"
import { highlightJsAdapter } from '../../../../utils/highlightJsAdapter';


/** Highlight code inline with highlight.js */
const InlineCodeHighlight = (props: Props) => {
    const { setProps, loading_state, className, ...others } = props;

    return (
        <CodeHighlightAdapterProvider adapter={highlightJsAdapter}>
            <MantineInlineCodeHighlight
                data-dash-is-loading={getLoadingState(loading_state) || undefined}
                className="dmc-code"
                {...others}
            />
        </CodeHighlightAdapterProvider>
    );
};

export default InlineCodeHighlight;
