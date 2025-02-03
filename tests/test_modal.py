from dash import Dash, html, Output, Input, State, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def test_001mo_modal(dash_duo):
    app = Dash(__name__)

    component = html.Div(
        [
            dmc.Button("Open Modal", id="modal-demo-button"),
            dmc.Modal(
                title="New Modal",
                id="modal-simple",
                closeButtonProps={
                    "children": html.Div(" close", id="my-component"),
                    "icon": html.Div("x", id="modal-custom-close"),
                },
                children=[
                    dmc.Text("I am in a modal component."),
                ],
            ),
        ]
    )

    app.layout = dmc.MantineProvider(
       component
    )

    @app.callback(
        Output("modal-simple", "opened"),
        Input("modal-demo-button", "n_clicks"),
        State("modal-simple", "opened"),
        prevent_initial_call=True,
    )
    def modal_demo(_, opened):
        return not opened

    dash_duo.start_server(app)

    # Open modal
    modal_btn = dash_duo.find_element("#modal-demo-button")
    modal_btn.click()

    # Close modal
    modal_close_btn = dash_duo.find_element("#modal-custom-close")
    modal_close_btn.click()

    assert dash_duo.get_logs() == []
