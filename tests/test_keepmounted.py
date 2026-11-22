"""
Regression test for third-party components that are not compatible with
React 19's Activity component when used with keepMountedMode="activity".
DashIconify 0.1.2 is one example. The test verifies that callbacks still
update content inside a collapsed Accordion when using the "display-none"
keep-mounted behavior.
issue # 768
"""


from dash import Dash, Input, Output, _dash_renderer
from dash_iconify import DashIconify

import dash_mantine_components as dmc
_dash_renderer._set_react_version("19.2.4")
import time

def test_accordion_callback_with_dash_iconify(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider([
        dmc.Button("Open", id="open-accordion"),
        dmc.Accordion(
            id="accordion",
          #  keepMountedMode="display-none",  This is the new default
            children=[
                dmc.AccordionItem(
                    value="item",
                    children=[
                        dmc.AccordionControl(

                            dmc.Group(
                                [
                                    DashIconify(
                                        icon="fxemoji:franceflag",
                                        width=30,
                                    ),
                                    dmc.Title("Accordion (open this)", order=3),
                                ]
                            ),
                            id="accordion-control",
                        ),
                        dmc.AccordionPanel(
                            dmc.Text(
                                "Not updated by callback",
                                id="root-text",
                            )
                        ),
                    ],
                )
            ],
        )
    ])

    @app.callback(
        Output("root-text", "children"),
        Input("root-text", "id"),
    )
    def initialise(_):
        return "Updated by callback"

    @app.callback(
        Output("accordion", "value"),
        Input("open-accordion", "n_clicks"),
        prevent_initial_call=True,
    )
    def open_accordion(n):
        return "item"

    dash_duo.start_server(app)

    time.sleep(.5)
    # Open the Accordion and verify the updated content is displayed.
    button = dash_duo.wait_for_element("#open-accordion")
    button.click()

    dash_duo.wait_for_text_to_equal(
        "#root-text",
        "Updated by callback",
    )