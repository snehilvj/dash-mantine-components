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
    /** JSON object (ProseMirror) representation of the editor content. */
    json?: object;

    /** HTML string representation of the editor content. */
    html?: string;

    /** If True, changes to input will be sent back to the Dash server only on enter or when losing focus. If it's False, it will send the value back on every change. If a number, it will not send anything back to the Dash server until the user has stopped typing for that number of milliseconds. */
    debounce?: boolean | number;

    /** An integer that represents the number of times that this element has lost focus */
    n_blur?: number;

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
