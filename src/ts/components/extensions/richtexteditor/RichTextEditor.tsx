import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { Suspense } from "react";

// eslint-disable-next-line no-inline-comments
const LazyRichTextEditor = React.lazy(() => import(/* webpackChunkName: "RichTextEditor" */ './fragments/RichTextEditor'));

/** Supported extensions (add more as needed). */
type Extension = "StarterKit" | "Underline" | "Underline" | "Link" | "Superscript" | "SubScript" | "Highlight" | "TextAlign" | "Table" | "TableCell" | "TableRow" | "TableHeader";

/** Supported controls (add more as needed). */
type Control = "Bold" | "Italic" | "Underline" | "Strikethrough" | "ClearFormatting" | "Highlight" | "Code" | "H1" | "H2" | "H3" | "H4" | "Blockquote" | "Hr" | "BulletList" | "OrderedList" | "Subscript" | "Superscript" | "Link" | "Unlink" | "AlignLeft" | "AlignCenter" | "AlignJustify" | "AlignRight" | "Undo" | "Redo";

/** Toolbar property definition. */
type Toolbar = {
  sticky?: boolean;
  controlsGroups?: Control[][];
}

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Editor content, be be input as an HTML string or a (ProseMirror) JSON object */
    content: string | object;

    /** JSON object (ProseMirror) representation of the editor content as returned by getHTML(). Only updated if 
     * 'track_html' is 'true'. The update frequency can be controlled via the 'debounce' property. */
    json?: object;

    /** If 'true', the 'json' property is updated when the editor content changes (optionally debounced). */
    track_json?: boolean;

    /** HTML string representation of the editor content as returned by getHTML(). Only updated if 'track_html' is true. 
     * The update frequency can be controlled via the 'debounce' property. */
    html?: string;

    /** If 'true', the 'html' property is updated when the editor content changes (optionally debounced). */
    track_html?: boolean;

    /** Debounce time in ms for updating the 'json' / 'html' property. Defaults to 100ms. */
    debounce?: number;

    /** Variant of the editor. */
    variant?: 'default' | 'subtle';

    /** Extensions to be loaded by the editor. */
    extensions?: Extension[];

    /** Toolbar property definition. */
    toolbar?: Toolbar;

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
