
from dash import Dash, html, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("19.2.4")


def test_001bu_button(dash_duo):
    app = Dash(__name__)

    component = dmc.Button("Button text", id="button", buttonProps={"type": "submit"})

    app.layout = dmc.MantineProvider(html.Div([component]))

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#button", "Button text")

    assert dash_duo.find_element('#button').get_attribute("type") == "submit"

    assert dash_duo.get_logs() == []
