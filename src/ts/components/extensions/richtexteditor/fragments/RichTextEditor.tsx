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

// Import all extensions directly
const extensionMap = {
    StarterKit,
    Underline,
    Link,
    Superscript,
    SubScript,
    Highlight,
    TextAlign: TextAlign.configure({ types: ['heading', 'paragraph'] })
} as const;

/** RichTextEditor */
const RichTextEditor = (props: Props) => {
    const { setProps, loading_state, content, format, variant, extensions, toolbar, ...others } = props;
    // Construct the toolbar.
    let mantineToolbar = undefined;
    if(toolbar !== undefined){
        mantineToolbar = <MantineRichTextEditor.Toolbar sticky={toolbar.sticky}>
            {toolbar.controlsGroups.map(controlGroup => <MantineRichTextEditor.ControlsGroup>
                {controlGroup.map(control => React.createElement(MantineRichTextEditor[control]))}
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
        mantineExtensions = extensions.map(extension => extensionMap[extension]);
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
