from dash import Dash, html, Input, Output, no_update, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def test_001pi_pininput(dash_duo):
    app = Dash()

    layout = html.Div(
        [
            dmc.PinInput(id="pin", value="1234"),
            dmc.Button("Press to set value", id="button", n_clicks=0),
            html.Div(id="div"),
        ]
    )

    app.layout = dmc.MantineProvider(layout)

    @app.callback(Output("pin", "value"), Input("button", "n_clicks"))
    def set_value(n_clicks):
        if n_clicks > 0:
            return "abcd"
        return no_update

    @app.callback(Output("div", "children"), Input("pin", "value"))
    def display_value(value):
        return value

    dash_duo.start_server(app)

    inputs = dash_duo.find_elements("#pin input")
    initial_value = "".join(input_el.get_attribute("value") for input_el in inputs)
    assert initial_value == "1234"

    button = dash_duo.find_element("#button")
    button.click()
    dash_duo.wait_for_text_to_equal("#div", "abcd")


    pin_input = dash_duo.find_element("#pin input")  # Mantine renders each digit as input
    pin_input.send_keys("wxyz")
    dash_duo.wait_for_text_to_equal("#div", "wxyz")

    assert dash_duo.get_logs() == []
