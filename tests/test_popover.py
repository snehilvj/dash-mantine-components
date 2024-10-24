from dash import Dash, html, Output, Input, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def test_001po_popover(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        html.Div(
            [
                dmc.Popover(
                    [
                        dmc.PopoverTarget(dmc.Button("Toggle Popover", id="btn")),
                        dmc.PopoverDropdown(dmc.Text("This popover is opened")),
                    ],
                    id="popover",
                    opened=False,
                ),
                html.Div(id="output"),
            ]
        )
    )

    @app.callback(Output("output", "children"), Input("popover", "opened"))
    def update_output(opened):
        return str(opened)

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#output", "False")

    popover_btn = dash_duo.find_element("#btn")
    popover_btn.click()

    # Verify the output
    dash_duo.wait_for_text_to_equal("#output", "True")

    popover_btn.click()
    dash_duo.wait_for_text_to_equal("#output", "False")

    assert dash_duo.get_logs() == []
