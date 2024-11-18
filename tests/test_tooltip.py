import time
from dash import Dash, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def test_001to_tooltip(dash_duo):
    app = Dash(__name__)

    component = dmc.Tooltip(
        dmc.Text("Text", id="text"),
        label="Tooltip text",
    )

    app.layout = dmc.MantineProvider(component)

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#text", "Text")
    dash_duo.find_element("#text").click()
    time.sleep(.2)

    # Find tooltip and assert its content
    tooltip = dash_duo.find_element(".mantine-Tooltip-tooltip")
    assert tooltip.text == "Tooltip text"

    assert dash_duo.get_logs() == []
