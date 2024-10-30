import pytest
import json
from selenium.webdriver import ActionChains
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.keys import Keys
from dash import Dash, html, callback, Output, Input, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")

debounce = dmc.Stack(
    [
        dmc.Box(id="out-true"),
        dmc.MultiSelect(
            id="debounce-true",
            data=["a", "b", "c"],
            value=["a"],
            debounce=True,
        ),
        dmc.Box(id="out-false"),
        dmc.MultiSelect(
            id="debounce-false",
            data=["d", "e", "f"],
            value=["d"],
            debounce=False,
        ),
        dmc.Box(id="out-2000"),
        dmc.MultiSelect(
            id="debounce-2000",
            data=["g", "h", "i"],
            value=["g"],
            debounce=2000,
        ),
    ]
)


def test_001mu_multi_select_debounce(dash_duo):
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
        return json.dumps(d_true), json.dumps(d_false), json.dumps(d_2000)

    dash_duo.start_server(app)
    # debounce=True
    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#out-true", '["a"]')
    #
    # # focus the select input
    elem = dash_duo.find_element("#debounce-true")
    actions = ActionChains(dash_duo.driver)
    actions.move_to_element(elem).click().perform()

    # # select item from dropdown
    # # Get all the options on the page
    options = dash_duo.find_elements(".mantine-MultiSelect-option")
    options[1].click()

    # verify the output has not been updated because debounce=True
    dash_duo.wait_for_text_to_equal("#out-true", '["a"]')

    # make  input lose focus
    elem.send_keys(Keys.TAB)
    # verify the output has been updated after input loses focus
    dash_duo.wait_for_text_to_equal("#out-true", '["a", "b"]')

    # debounce=False
    # focus the select input
    elem = dash_duo.find_element("#debounce-false")
    actions = ActionChains(dash_duo.driver)
    actions.move_to_element(elem).click().perform()
    # click on option in second dropdown
    options[4].click()
    # verify the output has  been updated because debounce=False
    dash_duo.wait_for_text_to_equal("#out-false", '["d", "e"]')
    # make  input lose focus and closes dropdown
    elem.send_keys(Keys.TAB)

    # debounce is an number
    # expect that a long debounce does not call back in a short amount of time
    elem = dash_duo.find_element("#debounce-2000")
    # focus the select input
    actions = ActionChains(dash_duo.driver)
    actions.move_to_element(elem).click().perform()
    # click on option in third dropdown
    options[7].click()

    with pytest.raises(TimeoutException):
        dash_duo.wait_for_text_to_equal("#out-2000", '["g", "h"]', timeout=1)

    # but do expect that it is eventually called
    dash_duo.wait_for_text_to_equal("#out-2000", '["g", "h"]')

    assert dash_duo.get_logs() == []
