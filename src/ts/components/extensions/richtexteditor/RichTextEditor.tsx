import { RichTextEditorLabels as MantineRichTextEditorLabels } from '@mantine/tiptap';
import { BoxProps } from 'props/box';
import { DashBaseProps, PersistenceProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { Suspense } from 'react';

// eslint-disable-next-line no-inline-comments
const LazyRichTextEditor = React.lazy(
    () =>
        import(
            /* webpackChunkName: "RichTextEditor" */ './fragments/RichTextEditor'
        )
);

/** Supported extensions (add more as needed). */
type ExtensionName =
    | 'StarterKit'
    | 'Underline'
    | 'Link'
    | 'Superscript'
    | 'Subscript'
    | 'Highlight'
    | 'TextAlign'
    | 'TextStyle'
    | 'Table'
    | 'TableCell'
    | 'TableRow'
    | 'TableHeader'
    | 'Placeholder'
    | 'Image'
    | 'BackgroundColor'
    | 'FontFamily'
    | 'FontSize'
    | 'LineHeight'
    | 'Color';

// TODO: Maybe add types for the extensions options explicitly?
type Extension =
    | ExtensionName
    | { [key in ExtensionName]?: Record<string, unknown> }; // Allow any options

/** Supported controls (add more as needed). */
type ControlName =
    | 'Bold'
    | 'Italic'
    | 'Underline'
    | 'Strikethrough'
    | 'ClearFormatting'
    | 'Highlight'
    | 'Code'
    | 'H1'
    | 'H2'
    | 'H3'
    | 'H4'
    | 'H5'
    | 'H6'
    | 'CodeBlock'
    | 'Blockquote'
    | 'Hr'
    | 'BulletList'
    | 'OrderedList'
    | 'Subscript'
    | 'Superscript'
    | 'Link'
    | 'Unlink'
    | 'AlignLeft'
    | 'AlignCenter'
    | 'AlignJustify'
    | 'AlignRight'
    | 'Undo'
    | 'Redo'
    | 'Color'
    | 'ColorPicker'
    | 'UnsetColor';

export type CustomControl = {
    'aria-label'?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    title?: string;
    onClick?: any;
};

type Control =
    | ControlName
    | { CustomControl }
    | { [key in ControlName]?: Record<string, unknown> }; // Allow any options;

/** Toolbar property definition. */
type Toolbar = {
    /** Determines whether `position: sticky` styles should be added to the toolbar, `false` by default */
    sticky?: boolean;
    /** Sets top style to offset elements with fixed position, `0` by default */
    stickyOffset?: React.CSSProperties['top'];
    /** Groups of controls to be displayed in the toolbar. Each item can be either a string with the control name (e.g. 'Bold') or an object with the control name as key and options as value (e.g. {'Color': {'color': 'red'}}). Empty by default. */
    controlsGroups?: Control[][];
};

/** Change function labels to strings. */
type RichTextEditorLabels = Omit<
    MantineRichTextEditorLabels,
    'colorControlLabel' | 'colorPickerColorLabel'
> & {
    /** An string containing '{color}' (replaced with the color) to go the color control label. */
    colorControlLabel: string;
    /** An string containing '{color}' (replaced with the color) to go the color picker control label. */
    colorPickerColorLabel: string;
};

export interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** JSON object (ProseMirror) representation of the editor content. Affected by debounce. If both json and html are provide, json takes precedence. */
    json?: object;

    /** HTML string representation of the editor content. Affected by debounce. If both json and html are provided, json takes precedence. */
    html?: string;

    /** Currently selected text. Affected by debounce. */
    selected?: string;

    /** If True, changes will be sent back to Dash only when losing focus. If False, data will be sent on every change. If a number, data will be sent when the value has been stable for that number of milliseconds. */
    debounce?: boolean | number;

    /** An integer that represents the number of times that this element has lost focus. */
    n_blur?: number;

    /** If True, the editor will be focused. If False, the editor will be blurred. Can also be a string ('start', 'end', 'all') or number to focus at a specific position. Positive values start at the beginning of the document - negative values at the end. */
    focus?: boolean | 'start' | 'end' | 'all' | number;

    /** If True, the editor will be editable. True by default. */
    editable?: boolean;

    /** Variant of the editor. */
    variant?: 'default' | 'subtle';

    /** List of extensions to be loaded by the editor. Each item can be either a string with the extension name (e.g. 'Color') or an object with the extension name as key and options as value (e.g. {'TextAlign': {'types': ['heading', 'paragraph']}}).
     * ['StarterKit',
        'Underline',
        'Link',
        'Superscript',
        'Subscript',
        'Highlight',
        'Table',
        'TableCell',
        'TableHeader',
        'TableRow',
        {'Placeholder': {'placeholder': 'Write or paste content here...'}},
        {'TextAlign': {'types': ['heading', 'paragraph']}},
        'Color',
        'TextStyle',
        'Image'] by default. */
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
};

export default RichTextEditor;
