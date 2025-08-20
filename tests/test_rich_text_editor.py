import json

from dash import Dash, Input, Output, _dash_renderer, html

import dash_mantine_components as dmc
from dash_iconify import DashIconify

_dash_renderer._set_react_version("18.2.0")

rte_id = "rich-text-editor"
log_json_id = "output-json"
log_html_id = "output-html"
initial_content = "Hello, world!"


def _prose_mirror_json(text: str) -> dict:
    """Convert text to ProseMirror JSON paragraph."""
    return {
        "type": "doc",
        "content": [
            {
                "type": "paragraph",
                "attrs": {"textAlign": "left"},
                "content": [{"type": "text", "text": text}],
            }
        ],
    }


def _pmjs(text: str) -> str:
    """Convert text to ProseMirror JSON paragraph."""
    return json.dumps(_prose_mirror_json(text))


def _html(text: str) -> str:
    """Convert text to HTML paragraph."""
    return f"<p>{text}</p>"


def _validate_content(dash_duo, expected: str):
    dash_duo.wait_for_text_to_equal(".tiptap", expected)
    dash_duo.wait_for_text_to_equal(f"#{log_json_id}", _pmjs(expected))
    dash_duo.wait_for_text_to_equal(f"#{log_html_id}", _html(expected))


def _create_app(extra_components=None, **kwargs):
    extra_components = extra_components or []
    app = Dash(__name__)
    component = dmc.RichTextEditor(
        **kwargs,
        id=rte_id,
    )
    app.layout = dmc.MantineProvider(
        [
            component,
            html.Div(id=log_html_id),
            html.Div(id=log_json_id),
            *extra_components,
        ]
    )

    @app.callback(
        Output(log_html_id, "children"),
        Input(rte_id, "html"),
    )
    def track_changes_html(content):
        return content

    @app.callback(
        Output(log_json_id, "children"),
        Input(rte_id, "json"),
    )
    def track_changes_json(content):
        return json.dumps(content)

    return app


def test_001ri_rich_text_editor_init_html(dash_duo):
    btn_html_id = "btn-html"
    btn_json_id = "btn-json"
    set_via_html = "What is the answer to life the universe and everything?"
    set_via_json = "4"
    extra_components = [
        btn_html := dmc.Button("html", id=btn_html_id),
        btn_json := dmc.Button("json", id=btn_json_id),
    ]
    app = _create_app(extra_components=extra_components, html=_html(initial_content))

    @app.callback(
        Output(rte_id, "html"),
        Input(btn_html, "n_clicks"),
        prevent_initial_call=True,
    )
    def set_content_html(n_clicks):
        return _html(set_via_html)

    @app.callback(
        Output(rte_id, "json"),
        Input(btn_json, "n_clicks"),
        prevent_initial_call=True,
    )
    def set_content_json(n_clicks):
        return _prose_mirror_json(set_via_json)

    dash_duo.start_server(app)

    # Validate that the initial content is set correctly.
    _validate_content(dash_duo, initial_content)

    # Now, try to set a different content using HTML.
    dash_duo.find_element(f"#{btn_html_id}").click()
    _validate_content(dash_duo, set_via_html)

    # Now, try to set a different content using JSON.
    dash_duo.find_element(f"#{btn_json_id}").click()
    _validate_content(dash_duo, set_via_json)

    # Add text to the editor. Check that the content is updated in the UI.
    dash_duo.find_element(".tiptap").send_keys("2")
    dash_duo.wait_for_text_to_equal(".tiptap", set_via_json + "2")

    # Check that no (error) logs were produced.
    assert dash_duo.get_logs() == []


def test_002ri_rich_text_editor_init_json(dash_duo):
    app = _create_app(json=_prose_mirror_json(initial_content), debounce=True)
    dash_duo.start_server(app)

    # Validate that the initial content is set correctly.
    _validate_content(dash_duo, initial_content)

    # Add text to the editor. Check that the content is updated in the UI.
    dash_duo.find_element(".tiptap").send_keys("X")
    updated = initial_content + "X"

    # Validate that content IS updated on UI, but NOT yet in Dash.
    dash_duo.wait_for_text_to_equal(".tiptap", updated)
    dash_duo.wait_for_text_to_equal(f"#{log_json_id}", _pmjs(initial_content))
    dash_duo.wait_for_text_to_equal(f"#{log_html_id}", _html(initial_content))

    # Make the component lose focus. Check that the content is updated in Dash.
    dash_duo.find_element(f"#{log_json_id}").click()
    dash_duo.wait_for_text_to_equal(f"#{log_json_id}", _pmjs(updated))
    dash_duo.wait_for_text_to_equal(f"#{log_html_id}", _html(updated))

    # Check that no (error) logs were produced.
    assert dash_duo.get_logs() == []


def test_003ri_rich_text_editor_custom_controls(dash_duo):
    app = Dash(__name__)

    content = '<div>Click control to insert star emoji</div>'
    toolbar = {
        "controlsGroups": [
            [
                {
                    "CustomControl": {
                        "aria-label": "Insert Star",
                        "title": "Insert Star",
                        "children": DashIconify(icon="mdi:star", width=20, height=20),
                        "onClick": {"function": "insertContent", "options": "⭐"},
                    },
                },
            ],
        ],
    }

    app.layout = dmc.MantineProvider(
        dmc.RichTextEditor(
            html=content,
            toolbar=toolbar
        )
    )

    dash_duo.start_server(app)

    # Find the custom control (the star icon button)
    button = dash_duo.find_element("button[title='Insert Star']")

    # get original content
    content_div = dash_duo.find_element(".mantine-RichTextEditor-content")
    assert content_div.text == "Click control to insert star emoji"

    # Click the button to insert the emoji
    button.click()

    # check that emoji was added
    assert "⭐" in content_div.text
