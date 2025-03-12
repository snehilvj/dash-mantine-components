import time

from dash import Dash, Input, _dash_renderer

import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def test_001ri_rich_text_editor(dash_duo):
    app = Dash(__name__)
    cid = "rich-text-editor"
    content = "Hello, world!"
    to_add = " Bye, world!"
    # The expected value of the editor.
    json_value = {
        "type": "doc",
        "content": [
            {
                "type": "paragraph",
                "content": [{"type": "text", "text": "Hello, world! Bye, world!"}],
            }
        ],
    }
    # Track the number of times the callback is fired.
    counters = {"track_changes": 0}

    component = dmc.RichTextEditor(
        content=content,
        extensions=["StarterKit"],
        format="json",
        id=cid,
    )
    app.layout = dmc.MantineProvider(component)

    @app.callback(
        Input(cid, "content"),
    )
    def track_changes(content):
        counters["track_changes"] += 1
        assert content == json_value

    dash_duo.start_server(app)

    # Find the editor and assert its content.
    tiptap = dash_duo.find_element(".tiptap")
    assert tiptap.text == content

    # Add text to the editor.
    tiptap.send_keys(to_add)
    assert tiptap.text == content + to_add

    # Check that callback was fired.
    time.sleep(0.2)
    assert counters["track_changes"] == 1

    # Check that no (error) logs were produced.
    assert dash_duo.get_logs() == []
