import { RichTextEditor as MantineRichTextEditor, Link } from '@mantine/tiptap';
import '@mantine/tiptap/styles.css';
import { Props } from '../RichTextEditor';
import { useDebouncedValue, useDidUpdate } from '@mantine/hooks';
import React, { useState } from 'react';

import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import Subscript from '@tiptap/extension-subscript';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import Placeholder from '@tiptap/extension-placeholder';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import Image from '@tiptap/extension-image';
import { getLoadingState, setPersistence } from '../../../../utils/dash3';

// Import all extensions directly
const extensionMap = {
    StarterKit,
    Underline,
    Link,
    Superscript,
    Subscript,
    Highlight,
    Table,
    TableCell,
    TableHeader,
    TableRow,
    TextAlign,
    Placeholder,
    Color,
    TextStyle,
    Image,
} as const;

/** RichTextEditor */
const RichTextEditor = ({
    setProps,
    loading_state,
    persistence,
    persisted_props,
    persistence_type,
    html,
    json,
    variant,
    extensions = [
        'StarterKit',
        'Underline',
        'Link',
        'Superscript',
        'Subscript',
        'Highlight',
        'Table',
        'TableCell',
        'TableHeader',
        'TableRow',
        { Placeholder: { placeholder: 'Write or paste content here...' } },
        { TextAlign: { types: ['heading', 'paragraph'] } },
        'Color',
        'TextStyle',
        'Image',
    ],
    toolbar,
    debounce = 100,
    n_blur = 0,
    selected,
    labels,
    ...others
}: Props) => {
    // Function to sync the html/json properties.
    const syncDashState = (extraProps = {}) => {
        // Return early if the editor is not yet created.
        if (!editor) {
            return;
        }
        // Update both props (they change together).
        setProps({
            html: editor.getHTML(),
            json: editor.getJSON(),
            ...extraProps,
        });
    };
    // Function to handle the blur event (when focus is lost).
    const onBlur = () => {
        if (!editor || debounce !== true) {
            return;
        }
        syncDashState({
            n_blur: n_blur + 1,
            selected: selectedValue,
        });
    };
    // The native format of tiptap is (ProseMirror) JSON, se we store the internal state of the RTE component as JSON.
    // As onUpdate is executed *before* the debounce, it's important that this call is not too expensive. A quick test
    // on my laptop shows ~ 0.1 ms (getJSON) vs. ~ 2 ms (getHTML) for ~ 10.000 words.
    const [value, setValue] = useState('');
    const onUpdate = ({ editor }) => {
        setValue(editor.getJSON());
    };
    // The call to Dash via setProps can be expensive (depending on attached callbacks), so we debounce it.
    const debounceTime = typeof debounce === 'number' ? debounce : 0;
    const [debounced] = useDebouncedValue(value, debounceTime);
    useDidUpdate(() => {
        if (typeof debounce !== 'number' && debounce !== false) {
            return;
        }
        syncDashState();
    }, [debounced]);
    // When content is updated from Dash, update the component's content and sync the html/json properties.
    useDidUpdate(() => {
        if (!editor || editor.getHTML() === html) {
            return;
        }
        editor.commands.setContent(html);
        syncDashState();
    }, [html]);
    useDidUpdate(() => {
        if (
            !editor ||
            JSON.stringify(editor.getJSON()) === JSON.stringify(json)
        ) {
            return;
        }
        editor.commands.setContent(json);
        syncDashState();
    }, [json]);
    // Function to handle the selection event (when text is selected).
    const [selectedValue, setSelectedValue] = useState('');
    const onSelectionUpdate = ({ editor }) => {
        if (!editor) {
            return;
        }
        const { from, to } = editor.state.selection;
        const text = editor.state.doc.textBetween(from, to, ' ');
        setSelectedValue(text);
    };
    // TODO: Maybe use a separate debounceTime for the selected text?
    const [debouncedSelected] = useDebouncedValue(selectedValue, debounceTime);
    useDidUpdate(() => {
        if (typeof debounce !== 'number' && debounce !== false) {
            return;
        }
        setProps({
            selected: debouncedSelected,
        });
    }, [debouncedSelected]);
    // Map any functional labels.
    const mappedLabels = labels && {
        ...labels,
        ...(labels.colorControlLabel && {
            colorControlLabel: (color: string) =>
                labels.colorControlLabel.replace('{color}', color),
        }),
        ...(labels.colorPickerColorLabel && {
            colorPickerColorLabel: (color: string) =>
                labels.colorPickerColorLabel.replace('{color}', color),
        }),
    };
    // Construct the toolbar. NB: Can't be updated after the editor is created.
    let mantineToolbar = undefined;
    if (toolbar !== undefined) {
        mantineToolbar = (
            <MantineRichTextEditor.Toolbar
                sticky={toolbar.sticky}
                stickyOffset={toolbar.stickyOffset}
            >
                {toolbar.controlsGroups.map((controlGroup, index) => (
                    <MantineRichTextEditor.ControlsGroup key={index}>
                        {controlGroup.map((ctl, i) => {
                            const control =
                                typeof ctl === 'string'
                                    ? ctl
                                    : Object.keys(ctl)[0];
                            const options =
                                typeof ctl === 'string' ? {} : ctl[control];
                            return React.createElement(
                                MantineRichTextEditor[control],
                                { key: i, ...options }
                            );
                        })}
                    </MantineRichTextEditor.ControlsGroup>
                ))}
            </MantineRichTextEditor.Toolbar>
        );
    }
    // If any extensions are specified, load them. NB: Can't be changed after the editor is created.
    const mantineExtensions = extensions.map((ext) => {
        if (typeof ext === 'string') {
            return extensionMap[ext];
        }
        const name = Object.keys(ext)[0];
        return extensionMap[name].configure(ext[name]);
    });
    // Create the editor, with json taking precedence over html as content
    const editor = useEditor({
        extensions: mantineExtensions,
        content: json || html,
        onUpdate: onUpdate,
        onBlur: onBlur,
        onSelectionUpdate: onSelectionUpdate,
        onCreate: syncDashState,
    });
    // Render the component tree.
    return (
        <MantineRichTextEditor
            variant={variant}
            editor={editor}
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            labels={mappedLabels}
            {...others}
        >
            {mantineToolbar}
            <MantineRichTextEditor.Content />
        </MantineRichTextEditor>
    );
};

setPersistence(RichTextEditor, ['html', 'json']);

export default RichTextEditor;
