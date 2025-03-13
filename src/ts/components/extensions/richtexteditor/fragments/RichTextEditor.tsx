import { RichTextEditor as MantineRichTextEditor, Link } from "@mantine/tiptap";
import { Props } from "../RichTextEditor";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import React, { useState } from "react";

import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";

import { getLoadingState } from "../../../../utils/dash3";

// Import all extensions directly
const extensionMap = {
    StarterKit,
    Underline,
    Link,
    Superscript,
    SubScript,
    Highlight,
    Table: Table.configure({ resizable: true }),
    TableCell,
    TableHeader,
    TableRow,
    TextAlign: TextAlign.configure({ types: ["heading", "paragraph"] }),
} as const;

/** RichTextEditor */
const RichTextEditor = ({
    setProps,
    loading_state,
    content,
    html,
    json,
    track_html = false,
    track_json = false,
    variant,
    extensions = ["StarterKit"],
    toolbar,
    debounce = 100,
    ...others
}: Props) => {
    // Function to sync the html/json properties.
    const syncDashState = () => {
        // TODO: Tracking here?
        if (track_html) {
            setProps({ html: editor.getHTML() });
        }
        if (track_json) {
            setProps({ json: editor.getJSON() });
        }
    };
    // Setup content tracking if enabled.
    let onUpdate = undefined;
    const trackContent = track_html || track_json;
    if (trackContent) {
        const [value, setValue] = useState("");
        // The native format of tiptap is (ProseMirror) JSON, se we store the internal state of the RTE component as JSON.
        // As onUpdate is executed *before* the debounce, it's important that this call is not too expensive. A quick test
        // on my laptop shows ~ 0.1 ms (getJSON) vs. ~ 2 ms (getHTML) for ~ 10.000 words).
        const onUpdate = ({ editor }) => {
            setValue(editor.getJSON());
        };
        // The call to Dash via setProps can be expensive (depending on attached callbacks), so we debounce it.
        const debounceValue = typeof debounce === "number" ? debounce : 0;
        const [debounced] = useDebouncedValue(value, debounceValue);
        useDidUpdate(() => {
            syncDashState();
        }, [debounced]);
    }
    // When content is updated from Dash, update the component's content and sync the html/json properties.
    useDidUpdate(() => {
        editor?.commands.setContent(content);
        syncDashState();
    }, [content]);
    // Construct the toolbar. NB: Can't be updated after the editor is created.
    let mantineToolbar = undefined;
    if (toolbar !== undefined) {
        mantineToolbar = (
            <MantineRichTextEditor.Toolbar sticky={toolbar.sticky}>
                {toolbar.controlsGroups.map((controlGroup) => (
                    <MantineRichTextEditor.ControlsGroup>
                        {controlGroup.map((control) =>
                            React.createElement(MantineRichTextEditor[control])
                        )}
                    </MantineRichTextEditor.ControlsGroup>
                ))}
            </MantineRichTextEditor.Toolbar>
        );
    }
    // If any extensions are specified, load them. NB: Can't be changed after the editor is created.
    let mantineExtensions = [];
    if (extensions !== undefined) {
        mantineExtensions = extensions.map(
            (extension) => extensionMap[extension]
        );
    }
    // Create the editor. And sync the html/json properties.
    const editor = useEditor({
        extensions: mantineExtensions,
        content: content,
        onUpdate: onUpdate,
    });
    syncDashState();
    // Render the component tree.
    return (
        <MantineRichTextEditor
            variant={variant}
            editor={editor}
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {mantineToolbar}
            <MantineRichTextEditor.Content />
        </MantineRichTextEditor>
    );
};

export default RichTextEditor;
