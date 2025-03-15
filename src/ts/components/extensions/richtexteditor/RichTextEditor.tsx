import { RichTextEditorLabels } from "@mantine/tiptap";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { Suspense } from "react";

// eslint-disable-next-line no-inline-comments
const LazyRichTextEditor = React.lazy(() => import(/* webpackChunkName: "RichTextEditor" */ './fragments/RichTextEditor'));

/** Supported extensions (add more as needed). */
type ExtensionName =
  | "StarterKit"
  | "Underline"
  | "Link"
  | "Superscript"
  | "Subscript"
  | "Highlight"
  | "TextAlign"
  | "TextStyle"
  | "Table"
  | "TableCell"
  | "TableRow"
  | "TableHeader"
  | "Placeholder"
  | "Image"
  | "Color";

// TODO: Maybe add types for the extensions options explicitly?
type Extension =
  | ExtensionName
  | { [key in ExtensionName]?: Record<string, unknown> }; // Allow any options

/** Supported controls (add more as needed). */
type ControlName = "Bold" | "Italic" | "Underline" | "Strikethrough" | "ClearFormatting" | "Highlight" | "Code" | "H1" | "H2" | "H3" | "H4" | "Blockquote" | "Hr" | "BulletList" | "OrderedList" | "Subscript" | "Superscript" | "Link" | "Unlink" | "AlignLeft" | "AlignCenter" | "AlignJustify" | "AlignRight" | "Undo" | "Redo" | "Color" | "ColorPicker" | "UnsetColor";

// TODO: Maybe add types for the control options explicitly?
type Control =
  | ControlName
  | { [key in ControlName]?: Record<string, unknown> }; // Allow any options


/** Toolbar property definition. */
type Toolbar = {
  /** Determines whether `position: sticky` styles should be added to the toolbar, `false` by default */
  sticky?: boolean;
  /** Sets top style to offset elements with fixed position, `0` by default */
  stickyOffset?: React.CSSProperties['top'];
  /** Groups of controls to be displayed in the toolbar. */
  controlsGroups?: Control[][];
}

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** JSON object (ProseMirror) representation of the editor content. Affected by debounce. */
    json?: object;

    /** HTML string representation of the editor content. Affected by debounce. */
    html?: string;

    /** Currently selected text. Affected by debounce. */
    selected?: string;

    /** If True, changes will be sent back to Dash only when losing focus. If False, data will be sent on every change. If a number, data will be sent when the value has been stable for that number of milliseconds. */
    debounce?: boolean | number;

    /** An integer that represents the number of times that this element has lost focus. */
    n_blur?: number;

    /** Variant of the editor. */
    variant?: 'default' | 'subtle';

    /** Extensions to be loaded by the editor, ["StarterKit"] by default. */
    extensions?: Extension[];

    /** Toolbar property definition. Empty by default. */
    toolbar?: Toolbar;

    /** Determines whether code highlight styles should be added, true by default. */
    withCodeHighlightStyles?: boolean;

    /** Determines whether typography styles should be added, true by default. */
    withTypographyStyles?: boolean;

    /**	Labels that are used in controls. If not set, default labels are used. */
    labels?: Partial<RichTextEditorLabels>;
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
