import { RichTextEditor as MantineRichTextEditor, Link } from "@mantine/tiptap";
import React from "react";
// import { getLoadingState } from "../../../../utils/dash3";
import { Props }  from "../RichTextEditor"

import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';

const content =
  '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';


/** RichTextEditor */
const RichTextEditor = (props: Props) => {
    const { setProps, loading_state, ...others } = props;
    const editor = useEditor({
        extensions: [
          StarterKit,
          Underline,
          Link,
          Superscript,
          SubScript,
          Highlight,
          TextAlign.configure({ types: ['heading', 'paragraph'] }),
        ],
        content,
      });


    // return (
    //     <MantineRichTextEditor
    //         data-dash-is-loading={getLoadingState(loading_state) || undefined}
    //         {...others}
    //     />
    // );

    return (
        <MantineRichTextEditor editor={editor}>
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
