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

/** Map of supported extensions. Must be synced with the `extensions` prop in `RichTextEditor` (!). */
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

/** RichTextEditor */
const RichTextEditor = (props: Props) => {
    const { setProps, loading_state, content, format, variant, extensions, ...others } = props;
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
    // Create the editor.
    const editor = useEditor({
        extensions: extensions.map(ext => extensionMap[ext]),
        content,
        onUpdate,
      });
    // Render the component tree.
    return (
        <MantineRichTextEditor variant={variant} editor={editor} data-dash-is-loading={getLoadingState(loading_state) || undefined}>
          <MantineRichTextEditor.Toolbar sticky>
            <MantineRichTextEditor.ControlsGroup>
              <MantineRichTextEditor.Bold />
              <MantineRichTextEditor.Italic />
              <MantineRichTextEditor.Underline />
              <MantineRichTextEditor.Strikethrough />
              <MantineRichTextEditor.ClearFormatting />
              <MantineRichTextEditor.Highlight />
              <MantineRichTextEditor.Code />
            </MantineRichTextEditor.ControlsGroup>
    
            <MantineRichTextEditor.ControlsGroup>
              <MantineRichTextEditor.H1 />
              <MantineRichTextEditor.H2 />
              <MantineRichTextEditor.H3 />
              <MantineRichTextEditor.H4 />
            </MantineRichTextEditor.ControlsGroup>
    
            <MantineRichTextEditor.ControlsGroup>
              <MantineRichTextEditor.Blockquote />
              <MantineRichTextEditor.Hr />
              <MantineRichTextEditor.BulletList />
              <MantineRichTextEditor.OrderedList />
              <MantineRichTextEditor.Subscript />
              <MantineRichTextEditor.Superscript />
            </MantineRichTextEditor.ControlsGroup>
    
            <MantineRichTextEditor.ControlsGroup>
              <MantineRichTextEditor.Link />
              <MantineRichTextEditor.Unlink />
            </MantineRichTextEditor.ControlsGroup>
    
            <MantineRichTextEditor.ControlsGroup>
              <MantineRichTextEditor.AlignLeft />
              <MantineRichTextEditor.AlignCenter />
              <MantineRichTextEditor.AlignJustify />
              <MantineRichTextEditor.AlignRight />
            </MantineRichTextEditor.ControlsGroup>
    
            <MantineRichTextEditor.ControlsGroup>
              <MantineRichTextEditor.Undo />
              <MantineRichTextEditor.Redo />
            </MantineRichTextEditor.ControlsGroup>
          </MantineRichTextEditor.Toolbar>
    
          <MantineRichTextEditor.Content />
        </MantineRichTextEditor>
      );
};

export default RichTextEditor;
