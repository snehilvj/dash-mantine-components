import { RichTextEditor as MantineRichTextEditor } from '@mantine/tiptap';
import '@mantine/tiptap/styles.css';
import { Props } from '../RichTextEditor';
import { useDebouncedValue, useDidUpdate } from '@mantine/hooks';
import React, { useState, useEffect } from 'react';
import { resolveProp } from '../../../../utils/prop-functions';

import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import Subscript from '@tiptap/extension-subscript';
import {
    Table,
    TableCell,
    TableHeader,
    TableRow,
} from '@tiptap/extension-table';

import { Placeholder } from '@tiptap/extensions';
import {
    TextStyle,
    Color,
    BackgroundColor,
    FontFamily,
    FontSize,
    LineHeight,
} from '@tiptap/extension-text-style';
import Image from '@tiptap/extension-image';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { createLowlight } from 'lowlight';
import ts from 'highlight.js/lib/languages/typescript';
import js from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import css from 'highlight.js/lib/languages/css';
import plaintext from 'highlight.js/lib/languages/plaintext';
import bash from 'highlight.js/lib/languages/bash';

import {
    getLoadingState,
    setPersistence,
    newRenderDashComponent,
    getContextPath,
} from '../../../../utils/dash3';

import { editorInstances } from '../../../../utils/editorRegistry';

const lowlight = createLowlight();
lowlight.register({
    ts,
    js,
    python,
    py: python,
    css,
    bash,
    shell: bash,
    text: plaintext,
});

// Import all extensions directly
const extensionMap = {
    StarterKit,
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
    BackgroundColor,
    FontFamily,
    FontSize,
    LineHeight,
    Image,
    CodeBlockLowlight,
} as const;

const CustomControl = (props) => {
    const { i, componentPath, editor, onClick, children, ...others } = props;
    return (
        <MantineRichTextEditor.Control
            onClick={(event) => {
                if (editor) {
                    resolveProp(onClick)({ editor, event });
                }
            }}
            {...others}
        >
            {newRenderDashComponent(children, i, [
                ...componentPath,
                'CustomControl',
                'children',
            ])}
        </MantineRichTextEditor.Control>
    );
};

/** RichTextEditor */
const RichTextEditor = ({
    id,
    setProps,
    loading_state,
    persistence,
    persisted_props,
    persistence_type,
    html,
    json,
    variant,
    extensions = [
        { StarterKit: { codeBlock: false } },
        { CodeBlockLowlight: { lowlight } },
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
        'BackgroundColor',
        'FontFamily',
        'FontSize',
        'LineHeight',
        'Image',
    ],
    toolbar,
    debounce = 100,
    n_blur = 0,
    selected,
    labels,
    focus,
    editable = true,
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

    // If any extensions are specified, load them. NB: Can't be changed after the editor is created.
    const mantineExtensions = extensions
        .map((ext) => {
            // Case 1: String extension
            if (typeof ext === 'string') {
                // Special handling for CodeBlockLowlight (since can't pass lowlight from Python app)
                if (ext === 'CodeBlockLowlight') {
                    return extensionMap.CodeBlockLowlight.configure({
                        lowlight,
                    });
                }

                // Validate and return other string extensions
                if (!(ext in extensionMap)) {
                    throw new Error(`Unknown extension: "${ext}"`);
                }
                return extensionMap[ext];
            }

            // Case 2: Object extension
            if (!ext || typeof ext !== 'object') {
                throw new Error(`Invalid extension format: ${ext}`);
            }

            const keys = Object.keys(ext);

            if (keys.length === 0) {
                throw new Error('Empty extension object');
            }

            if (keys.length > 1) {
                throw new Error(
                    `Extension object should have one key, got: ${keys.join(', ')}`
                );
            }

            const name = keys[0];

            if (!(name in extensionMap)) {
                throw new Error(`Unknown extension: "${name}"`);
            }

            // Special handling for CodeBlockLowlight - merge with lowlight
            if (name === 'CodeBlockLowlight') {
                return extensionMap.CodeBlockLowlight.configure({
                    lowlight,
                    ...(ext.CodeBlockLowlight || {}),
                });
            }

            // Handle all other extensions
            return extensionMap[name].configure(ext[name]);
        })
        .filter(Boolean); // Remove any null entries

    // Create the editor, with json taking precedence over html as content
    const editor = useEditor({
        extensions: mantineExtensions,
        content: json || html,
        onUpdate: onUpdate,
        onBlur: onBlur,
        onSelectionUpdate: onSelectionUpdate,
        onCreate: syncDashState,
        shouldRerenderOnTransaction: true,
    });

    // Register editor instance
    useEffect(() => {
        if (editor && id) {
            editorInstances[id] = editor;
        }
        // Cleanup: remove from registry when component unmounts
        return () => {
            if (id) {
                delete editorInstances[id];
            }
        };
    }, [editor, id]);

    // Handle focus prop changes.
    useEffect(() => {
        if (!editor || focus === undefined) {
            return;
        }

        if (focus === false) {
            editor.commands.blur();
        } else {
            editor.commands.focus(focus === true ? undefined : focus);
        }
        setProps({ focus: undefined });
    }, [focus, editor]);

    // handle editable prop changes.
    useEffect(() => {
        if (!editor) {
            return;
        }

        editor.setEditable(editable);
    }, [editable, editor]);

    const renderControl = (ctl, i, editor, componentPath) => {
        // Case 1: Built-in control name
        if (typeof ctl === 'string') {
            return React.createElement(MantineRichTextEditor[ctl], { key: i });
        }

        // Case 2: Built-in control with options
        const controlName = Object.keys(ctl)[0];
        const options = ctl[controlName];

        if (controlName !== 'CustomControl') {
            return React.createElement(MantineRichTextEditor[controlName], {
                key: i,
                ...options,
            });
        } else {
            return (
                <CustomControl
                    i={i}
                    key={`custom-${i}`}
                    componentPath={componentPath}
                    editor={editor}
                    {...options}
                />
            );
        }
    };

    if (toolbar !== undefined && editable) {
        const componentPath = getContextPath();
        mantineToolbar = (
            <MantineRichTextEditor.Toolbar
                sticky={toolbar.sticky}
                stickyOffset={toolbar.stickyOffset}
            >
                {toolbar.controlsGroups.map((controlGroup, index) => (
                    <MantineRichTextEditor.ControlsGroup key={index}>
                        {controlGroup.map((ctl, i) =>
                            renderControl(ctl, i, editor, [
                                ...componentPath,
                                'props',
                                'toolbar',
                                'controlsGroups',
                                index,
                                i,
                            ])
                        )}
                    </MantineRichTextEditor.ControlsGroup>
                ))}
            </MantineRichTextEditor.Toolbar>
        );
    }

    // Render the component tree.
    return (
        <MantineRichTextEditor
            id={id}
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
