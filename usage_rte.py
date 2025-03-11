from dash import Dash, Input, html

import dash_mantine_components as dmc

app = Dash(__name__, external_stylesheets=dmc.styles.ALL)

# content = """<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>"""
content = {
    "type": "doc",
    "content": [
        {
            "type": "paragraph",
            "attrs": {"textAlign": None},
            "content": [
                {"type": "text", "text": "Wow, this editor "},
                {"type": "text", "marks": [{"type": "bold"}], "text": "instance "},
                {"type": "text", "text": "exports its content as JSON."},
            ],
        }
    ],
}

app.layout = dmc.MantineProvider(
    html.Div(
        dmc.RichTextEditor(content=content, id="rte"),
        style=dict(margin="5px"),
    )
)


@app.callback(
    Input("rte", "content"),
)
def update_content(content: str):
    print(content)


if __name__ == "__main__":
    app.run(debug=True)
