import time

import dash
from dash import  callback, Input, Output, ctx, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def test_001di_direction_provider(dash_duo):
    """Test that DirectionProvider sets the HTML dir attribute"""

    app = dash.Dash()

    app.layout = dmc.DirectionProvider([
        dmc.MantineProvider([
            dmc.Button("Set RTL", id="rtl-btn"),
            dmc.Button("Set LTR", id="ltr-btn"),
        ])
    ], direction="ltr", id="direction-provider")

    @callback(
        Output("direction-provider", "direction"),
        Input("rtl-btn", "n_clicks"),
        Input("ltr-btn", "n_clicks"),
        prevent_initial_call=True
    )
    def set_direction(rtl_clicks, ltr_clicks):
        if ctx.triggered_id == "rtl-btn":
            return "rtl"
        elif ctx.triggered_id == "ltr-btn":
            return "ltr"
        return dash.no_update

    dash_duo.start_server(app)

    # Test RTL
    dash_duo.find_element("#rtl-btn").click()
    time.sleep(.5)

    # Check that HTML dir attribute is set
    html_element = dash_duo.driver.find_element("tag name", "html")
    assert html_element.get_attribute("dir") == "rtl"

    # Test LTR
    dash_duo.find_element("#ltr-btn").click()
    time.sleep(.5)
    html_element = dash_duo.driver.find_element("tag name", "html")

    assert html_element.get_attribute("dir") == "ltr"

    assert dash_duo.get_logs() == []