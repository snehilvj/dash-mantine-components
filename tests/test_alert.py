
from dash import Dash, html, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def test_001al_alert(dash_duo):
    app = Dash(__name__)

    avatar = dmc.Alert("Alert text", id="alert", duration=200)

    app.layout = dmc.MantineProvider(html.Div([avatar]))

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#alert", "Alert text")

    assert dash_duo.get_logs() == []
