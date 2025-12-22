import pytest
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from dash import Dash, html, callback, Output, Input, State, _dash_renderer, ctx
import dash_mantine_components as dmc

from dash_iconify import DashIconify  # noqa: needs to be imported to enable window.dash_iconify

_dash_renderer._set_react_version("18.2.0")


def test_001au_autocomplete_renderOption(dash_duo):
    app = Dash(__name__, assets_folder="../assets")

    app.layout = dmc.MantineProvider(
        [
            dmc.Title("Autocomplete + renderOption", order=3),
            dmc.Autocomplete(
                id="icon-autocomplete",
                label="Choose alignment",
                placeholder="Type...",
                data=[
                    {"value": "left", "label": "Align Left"},
                    {"value": "center", "label": "Align Center"},
                    {"value": "invalid", "label": "Align Invalid"},
                    {"value": "justify", "label": "Justify"},
                ],
                renderOption={"function": "renderAutocompleteOption"},
            ),
        ]
    )

    dash_duo.start_server(app)

    # Type to trigger the dropdown
    input_el = dash_duo.find_element("#icon-autocomplete")
    input_el.send_keys("A")  # Trigger dropdown

    dash_duo.wait_for_element(".custom-icon-label")

    options = dash_duo.find_elements(".custom-icon-label")

    # check that search is working correctly
    assert len(options) == 3

    for option in options:
        # make sure each option contains a span and svg
        span = option.find_element(by=By.TAG_NAME, value="span")
        svg = option.find_element(by=By.TAG_NAME, value="svg")

        assert span.text.startswith("Align")
        assert svg is not None

    # Check no errors
    assert dash_duo.get_logs() == []



debounce = dmc.Stack(
    [
        dmc.Autocomplete(
            id="debounce-true",
            data=["aa", "ab", "ac"],
            value="a",
            debounce=True,
        ),
        dmc.Box(id="out-true"),
        dmc.Autocomplete(
            id="debounce-false",
            data=["dd", "de", "df"],
            value="d",
            debounce=False,
        ),
        dmc.Box(id="out-false"),
        dmc.Autocomplete(
            id="debounce-2000",
            data=["gg", "gh", "gi"],
            value="g",
            debounce=2000,
        ),
        dmc.Box(id="out-2000"),
    ]
)



def test_002au_autocomplete_debounce(dash_duo):
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
    dash_duo.wait_for_text_to_equal("#out-true", "a")

    # focus the select input
    elem = dash_duo.find_element("#debounce-true")
    elem.click()

    # select item from dropdown
    # Get all the options on the page
    options = dash_duo.find_elements(".mantine-Autocomplete-option")
    options[1].click()

    # verify the output has not been updated because debounce=True
    dash_duo.wait_for_text_to_equal("#out-true", "a")

    # make  input lose focus
    elem.send_keys(Keys.TAB)
    # verify the output has been updated after input loses focus
    dash_duo.wait_for_text_to_equal("#out-true", "ab")

    # debounce=False
    # focus the select input
    elem = dash_duo.find_element("#debounce-false")
    elem.click()
    # click on option in second dropdown
    options[4].click()
    # verify the output has  been updated because debounce=False
    dash_duo.wait_for_text_to_equal("#out-false", "de")

    # debounce is an number
    # expect that a long debounce does not call back in a short amount of time
    elem = dash_duo.find_element("#debounce-2000")
    # focus the select input
    elem.click()
    # click on option in second dropdown
    options[7].click()

    with pytest.raises(TimeoutException):
        dash_duo.wait_for_text_to_equal("#out-2000", "gh", timeout=1)

    # but do expect that it is eventually called
    dash_duo.wait_for_text_to_equal("#out-2000", "gh")

    assert dash_duo.get_logs() == []


