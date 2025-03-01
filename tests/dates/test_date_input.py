import pytest
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.keys import Keys
from dash import Dash, html, callback, Output, Input, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


debounce = dmc.Stack(
    [
        dmc.DateInput(
            id="debounce-true",
            debounce=True,
        ),
        dmc.Box(id="out-true"),
        dmc.DateInput(
            id="debounce-false",
            debounce=False,
        ),
        dmc.Box(id="out-false"),
        dmc.DateInput(
            id="debounce-2000",
            debounce=2000,
        ),
        dmc.Box(id="out-2000"),

        # ensure clearButton children and icon can render with components without error
        dmc.DateInput(
            id="date-input-clearable",
            value="2025-01-01",
            clearable=True,
            clearButtonProps = {
                "children": html.Div("x", id="id1"),
                "icon": html.Div("y",  id="id2"),
            }
        )
    ]
)


def test_001da_dateinput(dash_duo):
    app = Dash(__name__, external_stylesheets=dmc.styles.ALL)

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
    elem.send_keys("1 2")  # just need to enter a month and day for it to find a date
    # verify the output has not been updated because debounce=True
    dash_duo.wait_for_text_to_equal("#out-true", "")
    elem.send_keys(Keys.TAB)
    # verify the output has been updated after input loses focus
    dash_duo.wait_for_text_to_equal("#out-true", "2001-01-02")

    # debounce=False
    # verify output is blank
    dash_duo.wait_for_text_to_equal("#out-false", "")
    # enter a value
    elem = dash_duo.find_element("#debounce-false")
    elem.send_keys("1 2")
    # verify the output has been updated without pressing enter or losing focus
    dash_duo.wait_for_text_to_equal("#out-false", "2001-01-02")

    # debounce is an number
    # expect that a long debounce does not call back in a short amount of time
    elem = dash_duo.find_element("#debounce-2000")
    elem.send_keys("1 2")
    with pytest.raises(TimeoutException):
        dash_duo.wait_for_text_to_equal("#out-2000", "2001-01-02", timeout=1)

    # but do expect that it is eventually called
    dash_duo.wait_for_text_to_equal("#out-2000", "2001-01-02")

    assert dash_duo.get_logs() == []
