import { RichTextEditor as MantineRichTextEditor, Link } from "@mantine/tiptap";
import React from "react";
import { Props }  from "../RichTextEditor"

import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { getLoadingState } from "../../../../utils/dash3";

/** Map of supported extensions. Must be synced with the `Extension` prop in `RichTextEditor` (!). */
const extensionMap = {
    "StarterKit": StarterKit,
    "Underline": Underline,
    "Link": Link,
    "Superscript": Superscript,
    "SubScript": SubScript,
    "Highlight": Highlight,
    // TODO: Should we add support for configuration from Dash?
    "TextAlign": TextAlign.configure({ types: ['heading', 'paragraph'] }),
}

/** Map of supported controls. Must be synced with the `Control` prop in `RichTextEditor` (!). */
const controlMap = {
    "Bold": MantineRichTextEditor.Bold,
    "Italic": MantineRichTextEditor.Italic,
    "Underline": MantineRichTextEditor.Underline,
    "Strikethrough": MantineRichTextEditor.Strikethrough,
    "ClearFormatting": MantineRichTextEditor.ClearFormatting,
    "Highlight": MantineRichTextEditor.Highlight,
    "Code": MantineRichTextEditor.Code,
    "H1": MantineRichTextEditor.H1,
    "H2": MantineRichTextEditor.H2,
    "H3": MantineRichTextEditor.H3,
    "H4": MantineRichTextEditor.H4,
    "Blockquote": MantineRichTextEditor.Blockquote,
    "Hr": MantineRichTextEditor.Hr,
    "BulletList": MantineRichTextEditor.BulletList,
    "OrderedList": MantineRichTextEditor.OrderedList,
    "Subscript": MantineRichTextEditor.Subscript,
    "Superscript": MantineRichTextEditor.Superscript,
    "Link": MantineRichTextEditor.Link,
    "Unlink": MantineRichTextEditor.Unlink,
    "AlignLeft": MantineRichTextEditor.AlignLeft,
    "AlignCenter": MantineRichTextEditor.AlignCenter,
    "AlignJustify": MantineRichTextEditor.AlignJustify,
    "AlignRight": MantineRichTextEditor.AlignRight,
    "Undo": MantineRichTextEditor.Undo,
    "Redo": MantineRichTextEditor.Redo,
}

/** RichTextEditor */
const RichTextEditor = (props: Props) => {
    const { setProps, loading_state, content, format, variant, extensions, toolbar, ...others } = props;
    // Construct the toolbar.
    let mantineToolbar = undefined;
    if(toolbar !== undefined){
        mantineToolbar = <MantineRichTextEditor.Toolbar sticky={toolbar.sticky}>
            {toolbar.controlsGroups.map(controlGroup => <MantineRichTextEditor.ControlsGroup>
                {controlGroup.map(control => React.createElement(controlMap[control]))}
            </MantineRichTextEditor.ControlsGroup>)}
        </MantineRichTextEditor.Toolbar>
    }
    // If format is specified, route output to Dash.
    let onUpdate = undefined;
    if(format !== undefined){
        onUpdate = ({ editor }) => {
            if(format === "json"){
                setProps({content: editor.getJSON()});
            }
            if (format === "html"){
                setProps({content: editor.getHTML()});
            }
        };
    }
    // If any extensions are specified, load them.
    let mantineExtensions = [];
    if(extensions !== undefined){
        mantineExtensions = extensions.map(ext => extensionMap[ext]);
    }
    // Create the editor.
    const editor = useEditor({
        extensions: mantineExtensions,
        content,
        onUpdate,
      });
    // Render the component tree.
    return (
        <MantineRichTextEditor variant={variant} editor={editor} data-dash-is-loading={getLoadingState(loading_state) || undefined}>
          {mantineToolbar}
          <MantineRichTextEditor.Content />
        </MantineRichTextEditor>
      );
};

export default RichTextEditor;
