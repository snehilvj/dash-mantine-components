import json

from dash import Dash, Input, Output, _dash_renderer, html

import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def test_001ri_rich_text_editor(dash_duo):
    app = Dash(__name__, prevent_initial_callbacks=True)
    rte_id = "rich-text-editor"
    btn_id = "click-me"
    log_id = "output"
    content = "Hello, world!"
    to_add = " Bye, world!"

    def _json_str(text) -> str:
        """Convert a text to a ProseMirror JSON string."""
        json_value = {
            "type": "doc",
            "content": [
                {
                    "type": "paragraph",
                    "content": [{"type": "text", "text": text}],
                }
            ],
        }
        return json.dumps(json_value)

    component = dmc.RichTextEditor(
        content=content,
        track_json=True,
        id=rte_id,
    )
    app.layout = dmc.MantineProvider(
        [
            component,
            btn := dmc.Button("Click me", id=btn_id),
            log := html.Div(id=log_id),
        ]
    )

    @app.callback(
        Output(log, "children"),
        Input(component, "json"),
    )
    def track_changes(content):
        return json.dumps(content)

    @app.callback(Output(component, "content"), Input(btn, "n_clicks"))
    def set_content(n_clicks):
        print(f"Setting content to {n_clicks}")
        return str(n_clicks)

    dash_duo.start_server(app)

    # Find the editor and check that content has been set correctly.
    dash_duo.wait_for_text_to_equal(".tiptap", content)

    # Add text to the editor. Check that the content is updated in the UI.
    dash_duo.find_element(".tiptap").send_keys(to_add)
    dash_duo.wait_for_text_to_equal(".tiptap", content + to_add)

    # Check that the data flows back to Dash (as JSON).
    dash_duo.wait_for_text_to_equal(f"#{log_id}", _json_str(content + to_add))

    # Check that we can write from Dash to the component after initialization.
    dash_duo.find_element(f"#{btn_id}").click()
    dash_duo.wait_for_text_to_equal(".tiptap", "1")
    dash_duo.wait_for_text_to_equal(f"#{log_id}", _json_str("1"))

    # Check that no (error) logs were produced.
    assert dash_duo.get_logs() == []
