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

    component = dmc.RichTextEditor(
        content=content,
        format="json",
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
        Input(component, "content"),
    )
    def track_changes(content):
        return json.dumps(content)

    @app.callback(Output(component, "content"), Input(btn, "n_clicks"))
    def set_content(n_clicks):
        return n_clicks

    dash_duo.start_server(app)

    # Find the editor and assert its content.
    dash_duo.wait_for_text_to_equal(".tiptap", content)

    # Add text to the editor.
    dash_duo.find_element(".tiptap").send_keys(to_add)
    dash_duo.wait_for_text_to_equal(".tiptap", content + to_add)

    # Check that the "track_changes" callback was fired.
    dash_duo.wait_for_text_to_equal(f"#{log_id}", json.dumps(json_value))

    # Now, check that we can write from Dash to the component
    dash_duo.find_element(f"#{btn_id}").click()

    # Check that callback was fired.
    dash_duo.wait_for_text_to_equal(".tiptap", "1")
    dash_duo.wait_for_text_to_equal(f"#{log_id}", "1")

    # Check that no (error) logs were produced.
    assert dash_duo.get_logs() == []
