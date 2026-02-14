import pytest
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.keys import Keys
from dash import Dash, html, callback, Output, Input, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


debounce = dmc.Stack(
    [
        dmc.NumberInput(
            id="debounce-true",
            debounce=True,
        ),
        dmc.Box(id="out-true"),
        dmc.NumberInput(
            id="debounce-false",
            debounce=False,
        ),
        dmc.Box(id="out-false"),
        dmc.NumberInput(
            id="debounce-2000",
            debounce=2000,
        ),
        dmc.Box(id="out-2000"),
    ]
)


def test_001nu_numberinput(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(debounce)

    @callback(
        Output("out-true", "children"),
        Output("out-false", "children"),
        Output("out-2000", "children"),
        Input("debounce-true", "value"),
        Input("debounce-false", "value"),
        Input("debounce-2000", "value"),
    )
    def update(d_true, d_false, d_2000):
        return d_true, d_false, d_2000

    dash_duo.start_server(app)
    # debounce=True
    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#out-true", "")
    # enter a value
    elem = dash_duo.find_element("#debounce-true")
    elem.send_keys("3")
    # verify the output has not been updated because debounce=True
    dash_duo.wait_for_text_to_equal("#out-true", "")
    elem.send_keys(Keys.TAB)
    # verify the output has been updated after input loses focus
    dash_duo.wait_for_text_to_equal("#out-true", "3")

    # debounce=False
    # verify output is blank
    dash_duo.wait_for_text_to_equal("#out-false", "")
    # enter a value
    elem = dash_duo.find_element("#debounce-false")
    elem.send_keys("3")
    # verify the output has been updated without pressing enter or losing focus
    dash_duo.wait_for_text_to_equal("#out-false", "3")

    # debounce is an number
    # expect that a long debounce does not call back in a short amount of time
    elem = dash_duo.find_element("#debounce-2000")
    elem.send_keys("3")
    with pytest.raises(TimeoutException):
        dash_duo.wait_for_text_to_equal("#out-2000", "3", timeout=1)

    # but do expect that it is eventually called
    dash_duo.wait_for_text_to_equal("#out-2000", "3")

    assert dash_duo.get_logs() == []



def test_002nu_numberinput_max(dash_duo):
    """
    Test that NumberInput(max=None) does not clamp values on blur   See issue #696
    """
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(dmc.NumberInput(max=None, value=1, id="max"))

    dash_duo.start_server(app)

    elem = dash_duo.find_element("#max")
    assert elem.get_attribute("value") == "1"

    elem.send_keys("3")
    assert elem.get_attribute("value") == "13"

    elem.send_keys(Keys.TAB)
    assert elem.get_attribute("value") == "13"

    assert dash_duo.get_logs() == []
