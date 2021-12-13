from dash import Dash, html, Output, Input
import dash_mantine_components as dmc
from time import sleep


def test_accordion_simple(dash_duo):
    app = Dash()
    app.layout = html.Div(
        [
            dmc.Accordion(
                children=[
                    dmc.AccordionItem(
                        children=["Contents 1"],
                        label="Contents 1",
                        description="Description of item 1",
                    ),
                    dmc.AccordionItem(
                        children=["Contents 2"],
                        label="Contents 2",
                        description="Description of item 2",
                    ),
                ],
                id="accordion",
                state={"0": True},
            ),
            html.Div(id="output"),
        ]
    )

    @app.callback(Output("output", "children"), Input("accordion", "state"))
    def accordion(state):
        if state:
            return f"{state}"

    dash_duo.start_server(app)

    assert dash_duo.wait_for_text_to_equal("#output", "{'0': True}")

    dash_duo.multiple_click("#accordion-1", 1)
    assert dash_duo.wait_for_text_to_equal("#output", "{'0': False, '1': True}")


def test_accordion_multiple(dash_duo):
    app = Dash()
    app.layout = html.Div(
        [
            dmc.Accordion(
                children=[
                    dmc.AccordionItem(
                        children=["Contents 1"],
                        label="Contents 1",
                        description="Description of item 1",
                    ),
                    dmc.AccordionItem(
                        children=["Contents 2"],
                        label="Contents 2",
                        description="Description of item 2",
                    ),
                ],
                id="accordion",
                state={"1": True},
                multiple=True,
            ),
            html.Div(id="output"),
        ]
    )

    @app.callback(Output("output", "children"), Input("accordion", "state"))
    def accordion(state):
        if state:
            return f"{state}"

    dash_duo.start_server(app)

    assert dash_duo.wait_for_text_to_equal("#output", "{'1': True}")

    dash_duo.multiple_click("#accordion-0", 1)
    assert dash_duo.wait_for_text_to_equal("#output", "{'0': True, '1': True}")


def test_accordion_controlled(dash_duo):
    app = Dash()
    app.layout = html.Div(
        [
            dmc.Accordion(
                children=[
                    dmc.AccordionItem(
                        children=["Contents 1"],
                        label="Contents 1",
                        description="Description of item 1",
                    ),
                    dmc.AccordionItem(
                        children=["Contents 2"],
                        label="Contents 2",
                        description="Description of item 2",
                    ),
                ],
                id="accordion",
                multiple=True,
            ),
            html.Button("Set states", id="button"),
        ]
    )

    @app.callback(
        Output("accordion", "state"),
        Input("button", "n_clicks"),
        prevent_initial_call=True,
    )
    def accordion(n_clicks):
        return {"0": True, "1": True}

    dash_duo.start_server(app)

    item1 = dash_duo.find_element("#accordion-0")
    item2 = dash_duo.find_element("#accordion-1")
    assert item1.get_attribute("aria-expanded") == "false"
    assert item2.get_attribute("aria-expanded") == "false"

    dash_duo.multiple_click("#button", 1)
    assert item1.get_attribute("aria-expanded") == "true"
    assert item2.get_attribute("aria-expanded") == "true"
