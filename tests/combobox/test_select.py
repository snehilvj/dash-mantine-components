import pytest
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.keys import Keys
from dash import Dash, html, callback, Output, Input, State, _dash_renderer, ctx
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


debounce = dmc.Stack(
    [
        dmc.Select(
            id="debounce-true",
            data=["a", "b", "c"],
            value="a",
            debounce=True,
        ),
        dmc.Box(id="out-true"),
        dmc.Select(
            id="debounce-false",
            data=["d", "e", "f"],
            value="d",
            debounce=False,
        ),
        dmc.Box(id="out-false"),
        dmc.Select(
            id="debounce-2000",
            data=["g", "h", "i"],
            value="g",
            debounce=2000,
        ),
        dmc.Box(id="out-2000"),
    ]
)


def test_001se_select(dash_duo):
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
    options = dash_duo.find_elements(".mantine-Select-option")
    options[1].click()

    # verify the output has not been updated because debounce=True
    dash_duo.wait_for_text_to_equal("#out-true", "a")

    # make  input lose focus
    elem.send_keys(Keys.TAB)
    # verify the output has been updated after input loses focus
    dash_duo.wait_for_text_to_equal("#out-true", "b")

    # debounce=False
    # focus the select input
    elem = dash_duo.find_element("#debounce-false")
    elem.click()
    options = dash_duo.find_elements(".mantine-Select-option")
    options[1].click()

    # verify the output has  been updated because debounce=False
    dash_duo.wait_for_text_to_equal("#out-false", "e")

    # debounce is an number
    # expect that a long debounce does not call back in a short amount of time
    elem = dash_duo.find_element("#debounce-2000")
    # focus the select input
    elem.click()
    options = dash_duo.find_elements(".mantine-Select-option")
    options[1].click()

    with pytest.raises(TimeoutException):
        dash_duo.wait_for_text_to_equal("#out-2000", "h", timeout=1)

    # but do expect that it is eventually called
    dash_duo.wait_for_text_to_equal("#out-2000", "h")

    assert dash_duo.get_logs() == []


# ensure both data and value can be updated in a callback
def test_002se_select(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        dmc.Box(
            [
                dmc.Button("Update Select", id="update-select"),
                dmc.Select(id="select"),
                dmc.Box(id="out")
            ],
        )
    )

    @callback(
        Output("select", "data"),
        Output("select", "value"),
        Input("update-select", "n_clicks"),
        prevent_initial_call=True
    )
    def update_select(_):
        return ["a", "b", "c"], "b"

    @callback(
        Output("out", "children"),
        Input("select", "value")
    )
    def update(v):
        return str(v)


    dash_duo.start_server(app)
    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#out", "None" )

    dash_duo.find_element("#update-select").click()

    dash_duo.wait_for_text_to_equal("#out", "b")

    assert dash_duo.get_logs() == []


# test for clearSearchOnFocus prop
def test_003se_select(dash_duo):
    app = Dash()

    component = dmc.Select(
        data=["Pandas", "NumPy", "TensorFlow", "PyTorch"],
        value="Pandas",
        searchable=True,
        clearSearchOnFocus=True,
        id="select"
    )

    app.layout = dmc.MantineProvider(component)

    dash_duo.start_server(app)

    select_input = dash_duo.find_element("#select")
    assert select_input.get_attribute("value") == "Pandas"
    select_input.click()
    assert select_input.get_attribute("value") == ""

    assert dash_duo.get_logs() == []


# check that value and data update at the same time when data is updated
def test_004se_select(dash_duo):
    app = Dash()

    app.layout = dmc.MantineProvider(
        [
            dmc.Text(id="dmc-triggered"),
            dmc.Select(
                id="dmc-dropdown",
                data=["three", "four", "five"],
                value="four",
            ),
            dmc.Button("change options", id="change-options"),
        ]
    )

    @app.callback(
        Output("dmc-dropdown", "data"),
        Input("change-options", "n_clicks"),
        prevent_initial_call=True,
    )
    def change_options(n_clicks):
        return ["one", "two", "three"]

    # accumulate triggered history instead of overwriting
    @app.callback(
        Output("dmc-triggered", "children"),
        Input("dmc-dropdown", "value"),
        Input("dmc-dropdown", "data"),
        State("dmc-triggered", "children"),
    )
    def dmc_select_value(value, data, prev):
        prev = prev or ""
        return prev + "|" + str(ctx.triggered)

    dash_duo.start_server(app)

    # Initial trigger on app load
    dash_duo.wait_for_text_to_equal(
        "#dmc-triggered", "|[{'prop_id': '.', 'value': None}]"
    )

    dash_duo.find_element("#change-options").click()

    # Expect only one new entry appended -- to show callback triggerd only once
    dash_duo.wait_for_text_to_equal(
        "#dmc-triggered",
        "|[{'prop_id': '.', 'value': None}]"
        + "|[{'prop_id': 'dmc-dropdown.data', 'value': ['one', 'two', 'three']}, "
        + "{'prop_id': 'dmc-dropdown.value', 'value': None}]",
    )

    assert dash_duo.get_logs() == []






