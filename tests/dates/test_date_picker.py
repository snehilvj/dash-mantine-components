import pytest
import time
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import TimeoutException
from dash import Dash, html,  Output, Input, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def make_app(**kwargs):
    app = Dash(external_stylesheets=dmc.styles.ALL)

    debounce = dmc.Stack(
        [
            dmc.Box(id="out-true"),
            dmc.DatePicker(
                label="debounce=True",
                id="debounce-true",
                debounce=True,
                minDate="2024-10-01",
                maxDate="2024-10-31",
                **kwargs
            ),
            dmc.Box(id="out-false"),
            dmc.DatePicker(
                label="debounce=False",
                id="debounce-false",
                debounce=False,
                minDate="2024-10-01",
                maxDate="2024-10-31",
                **kwargs
            ),
            dmc.Box(id="out-2000"),
            dmc.DatePicker(
                label="debounce=2000",
                id="debounce-2000",
                debounce=2000,
                minDate="2024-10-01",
                maxDate="2024-10-31",
                **kwargs
            ),
        ]
    )

    app.layout = dmc.MantineProvider(debounce)

    @app.callback(
        Output("out-true", "children"),
        Output("out-false", "children"),
        Output("out-2000", "children"),
        Input("debounce-true", "value"),
        Input("debounce-false", "value"),
        Input("debounce-2000", "value"),
    )
    def update(d_true, d_false, d_2000):
        return str(d_true), str(d_false), str(d_2000)

    return app


# type=default (select one date)
def test_001dp_datepicker(dash_duo):

    app = make_app()

    dash_duo.start_server(app)
    # debounce=True
    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#out-true", "None")
    # enter a value
    input_elem = dash_duo.find_element("#debounce-true")
    # focus element to open calendar
    input_elem.click()

    picker_elem = dash_duo.find_element(".mantine-Popover-dropdown")

    # select a day from the calendar with the keyboard
    picker_elem.send_keys(Keys.TAB, Keys.TAB, Keys.ENTER, Keys.ESCAPE)

    # verify the output has not been updated because debounce=True
    dash_duo.wait_for_text_to_equal("#out-true", "None")

    input_elem.send_keys(Keys.TAB)
    # verify the output has been updated after input loses focus
    dash_duo.wait_for_text_to_equal("#out-true", "2024-10-01")

    # debounce=False
    # verify output is blank
    dash_duo.wait_for_text_to_equal("#out-false", "None")
    # enter a value
    input_elem = dash_duo.find_element("#debounce-false")
    # focus element to open calendar
    input_elem.click()


    time.sleep(.5)
    picker_elem2 = dash_duo.find_element(".mantine-Popover-dropdown")

    # select a day from the calendar with the keyboard
    picker_elem2.send_keys(Keys.TAB, Keys.TAB, Keys.ENTER, Keys.ESCAPE, Keys.TAB)
    # verify the output has been updated without pressing enter or losing focus
    dash_duo.wait_for_text_to_equal("#out-false", "2024-10-01")


    # debounce is an number
    input_elem = dash_duo.find_element("#debounce-2000")
    input_elem.click()

    time.sleep(.5)
    # select a day from the calendar with the keyboard
    picker_elem3 = dash_duo.find_element(".mantine-Popover-dropdown")
    picker_elem3.send_keys(Keys.TAB, Keys.TAB, Keys.ENTER)


    # initially no change
    time.sleep(.5)
    dash_duo.wait_for_text_to_equal("#out-2000", "None", timeout=1)

    # but do expect that it is eventually called
    dash_duo.wait_for_text_to_equal("#out-2000", "2024-10-01")

    assert dash_duo.get_logs() == []

# type=range
def test_002dp_datepicker(dash_duo):
    app = make_app(type="range")

    dash_duo.start_server(app)

    # 1. debounce=True
    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#out-true", "None")
    # enter a value
    input_elem = dash_duo.find_element("#debounce-true")
    # focus element to open calendar
    input_elem.click()

    picker_elem = dash_duo.find_element(".mantine-Popover-dropdown")

    # select a day from the calendar with the keyboard
    picker_elem.send_keys(Keys.TAB, Keys.TAB, Keys.ENTER, Keys.ARROW_DOWN, Keys.ENTER, Keys.ESCAPE)

    # verify the output has not been updated because debounce=True
    dash_duo.wait_for_text_to_equal("#out-true", "None")

    input_elem.send_keys(Keys.TAB)
    # verify the output has been updated after input loses focus
    dash_duo.wait_for_text_to_equal("#out-true", "['2024-10-01', '2024-10-08']")

    # 2. debounce=False
    # verify output is blank
    dash_duo.wait_for_text_to_equal("#out-false", "None")
    # enter a value
    input_elem = dash_duo.find_element("#debounce-false")
    # focus element to open calendar
    input_elem.click()

    time.sleep(.5)
    picker_elem2 = dash_duo.find_element(".mantine-Popover-dropdown")

    # select a day from the calendar with the keyboard
    picker_elem2.send_keys(Keys.TAB, Keys.TAB, Keys.ENTER, Keys.ARROW_DOWN, Keys.ENTER, Keys.ESCAPE)

    # verify the output has been updated without pressing enter or losing focus
    dash_duo.wait_for_text_to_equal("#out-false", "['2024-10-01', '2024-10-08']")

    # 3. debounce is an number
    input_elem = dash_duo.find_element("#debounce-2000")
    input_elem.click()

    time.sleep(.5)
    # select a day from the calendar with the keyboard
    picker_elem3 = dash_duo.find_element(".mantine-Popover-dropdown")
    picker_elem3.send_keys(Keys.TAB, Keys.TAB, Keys.ENTER, Keys.ARROW_DOWN, Keys.ENTER, Keys.ESCAPE)

    # initially no change
    with pytest.raises(TimeoutException):
        dash_duo.wait_for_text_to_equal("#out-2000", "['2024-10-01', '2024-10-08']", timeout=1)

    # but do expect that it is eventually called
    dash_duo.wait_for_text_to_equal("#out-2000", "['2024-10-01', '2024-10-08']")

    assert dash_duo.get_logs() == []

