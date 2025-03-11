
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { Suspense } from "react";

// eslint-disable-next-line no-inline-comments
const LazyRichTextEditor = React.lazy(() => import(/* webpackChunkName: "RichTextEditor" */ './fragments/RichTextEditor'));

/** Supported extensions. */
type Extension = "StarterKit" | "Underline" | "Underline" | "Link" | "Superscript" | "SubScript" | "Highlight" | "TextAlign";
export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Editor content, be be input as an HTML string or a (ProseMirror) JSON object */
    content: string | object;

    /** Data format to bring back to Dash. If not specified, the editor content is not tracked. */
    format?: "html" | "json";

    /** Variant of the editor. */
    variant?: 'default' | 'subtle';

    /** Extensions to be loaded by the editor. */
    extensions?: Extension[];
}

/** RichTextEditor */
const RichTextEditor = (props: Props) => {
    return (
      <Suspense fallback={null}>
        <LazyRichTextEditor {...props} />
      </Suspense>
    );
}



export default RichTextEditor;
