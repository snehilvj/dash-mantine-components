from dash import Dash, Input, html

import dash_mantine_components as dmc

# Content from the Mantine example.
content = """<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>"""

# Colors from the Mantine example.
colors = [
    "#25262b",
    "#868e96",
    "#fa5252",
    "#e64980",
    "#be4bdb",
    "#7950f2",
    "#4c6ef5",
    "#228be6",
    "#15aabf",
    "#12b886",
    "#40c057",
    "#82c91e",
    "#fab005",
    "#fd7e14",
]

# Setup the Dash app.
app = Dash(__name__, external_stylesheets=dmc.styles.ALL)
app.layout = dmc.MantineProvider(
    html.Div(
        dmc.RichTextEditor(
            # html=content,
            extensions=[
                "StarterKit",
                "Underline",
                "Link",
                "Superscript",
                "Subscript",
                "Highlight",
                "Color",
                "TextStyle",
                {"Placeholder": {"placeholder": "Write something..."}},
                {"TextAlign": {"types": ["heading", "paragraph"]}},
            ],
            toolbar={
                "sticky": True,
                "controlsGroups": [
                    [
                        "Bold",
                        "Italic",
                        "Underline",
                        "Strikethrough",
                        "ClearFormatting",
                        "Highlight",
                        "Code",
                    ],
                    ["H1", "H2", "H3", "H4"],
                    [
                        "Blockquote",
                        "Hr",
                        "BulletList",
                        "OrderedList",
                        "Subscript",
                        "Superscript",
                    ],
                    ["Link", "Unlink"],
                    ["AlignLeft", "AlignCenter", "AlignJustify", "AlignRight"],
                    ["Undo", "Redo"],
                    [
                        {"Color": {"color": "red"}},
                        {"Color": {"color": "green"}},
                        {"Color": {"color": "blue"}},
                    ],
                    [
                        {"ColorPicker": {"colors": colors}},
                        "UnsetColor",
                    ],
                    # ["Color", "ColorPicker", "UnsetColor"],
                ],
            },
            id="rte",
        ),
        style=dict(margin="5px"),
    )
)


# Read the selected text from the editor.
@app.callback(Input("rte", "selected"))
def update_content(content: str):
    print(content)


if __name__ == "__main__":
    app.run(debug=True)
