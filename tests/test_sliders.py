import time
from dash import Dash, html, _dash_renderer, callback, Input, Output, State
import dash_mantine_components as dmc
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By

_dash_renderer._set_react_version("18.2.0")


def test_001sl_slider(dash_duo):
    app = Dash(__name__)

    component = dmc.Box(
        children=[
            dmc.Button(id="add_100", children="Add 100 to max"),
            dmc.Slider(
                id="slider",
                min=0,
                max=100,
                value=100,
                step=1,
            ),
            dmc.Text(id="slider-value")
        ],
        p="md"
    )

    app.layout = dmc.MantineProvider(component)

    @callback(
        Output("slider", "max"),
        Input("add_100", "n_clicks"),
        State("slider", "max"),
        prevent_initial_call=True
    )
    def add(n_clicks, max):
        return max + 100

    @callback(
        Output("slider-value", "children"),
        Input("slider", "value")
    )
    def update(v):
        return v



    app.layout = dmc.MantineProvider(html.Div([component]))

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#slider-value", "100")

    # update the max prop
    dash_duo.find_element("#add_100").click()
    time.sleep(1)

    # drag the slider to a new value
    slider = dash_duo.find_element("#slider")
    handle = slider.find_element(By.CLASS_NAME, "mantine-Slider-thumb")
    action = ActionChains(dash_duo.driver)
    action.click_and_hold(handle).move_by_offset(75, 0).release().perform()

    dash_duo.wait_for_text_to_equal("#slider-value", "108")

    assert dash_duo.get_logs() == []
