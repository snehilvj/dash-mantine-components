from dash import Dash, html, Output, Input, _dash_renderer
import dash_mantine_components as dmc
from flaky import flaky
import time

_dash_renderer._set_react_version("18.2.0")


def test_001mu_multi_select(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        html.Div(
            [
                dmc.MultiSelect(
                    id="multi-select",
                    data=[
                        {"value": "option1", "label": "Option 1"},
                        {"value": "option2", "label": "Option 2"},
                        {"value": "option3", "label": "Option 3"},
                    ],
                    placeholder="Select options",
                ),
                html.Div(id="output"),
            ]
        )
    )

    @app.callback(Output("output", "children"), Input("multi-select", "value"))
    def update_output(selected_values):
        return f"Selected: {selected_values}"

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#output", "Selected: None")

    # Select options
    multi_select = dash_duo.find_element("#multi-select")
    multi_select.click()

    # Select 'Option 1' and 'Option 2'
    option1 = dash_duo.find_element("div[value='option1']")
    option2 = dash_duo.find_element("div[value='option2']")
    option1.click()
    option2.click()

    # Verify the output
    dash_duo.wait_for_text_to_equal("#output", "Selected: ['option1', 'option2']")

    # Take a snapshot
    dash_duo.percy_snapshot("multi-select-test")

    # Deselect 'Option 1'
    option1.click()

    # Verify the output again
    dash_duo.wait_for_text_to_equal("#output", "Selected: ['option2']")

    assert dash_duo.get_logs() == []

# ensure  data and value and SearchValue can be updated in a callback
@flaky(max_runs=3)
def test_002mu_multi_select(dash_duo):

    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        dmc.Box(
            [
                dmc.Button("Update Select", id="update-select"),
                dmc.MultiSelect(id="select"),
                dmc.Box(id="out")
            ],
        )
    )

    @app.callback(
        Output("select", "data"),
        Output("select", "value"),
        Output("select", "searchValue"),
        Input("update-select", "n_clicks"),
        prevent_initial_call=True
    )
    def update_select(_):
        return ["a", "b", "c"], ["b"], "a"

    @app.callback(
        Output("out", "children"),
        Input("select", "value"),
        Input("select", "searchValue")
    )
    def update(val, search):
        return f"{val=} {search=}"


    dash_duo.start_server(app)
    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#out", "val=None search=None" )

    dash_duo.find_element("#update-select").click()
    time.sleep(1)

    dash_duo.wait_for_text_to_equal("#out", "val=['b'] search='a'")

    assert dash_duo.get_logs() == []
