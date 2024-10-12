from dash import Dash, html, Output, Input, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def chipgroup_app(**kwargs):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        html.Div([
            dmc.ChipGroup(
                id="chip-group",
                children=dmc.Group([
                    dmc.Chip(value="option1", children="Option 1"),
                    dmc.Chip(value="option2", children="Option 2"),
                    dmc.Chip(value="option3", children="Option 3"),
                ]),
                **kwargs,
            ),
            html.Div(id="output")
        ])
    )

    @app.callback(
        Output("output", "children"),
        Input("chip-group", "value")
    )
    def update_output(selected_values):
        return f'Selected: {selected_values}'
    
    return app


def test_001ch_chip_group(dash_duo):

    app = chipgroup_app()
    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_element("div.mantine-Group-root")

    option1 = dash_duo.find_element("input[value='option1']").find_element_by_xpath("./..")
    option2 = dash_duo.find_element("input[value='option2']").find_element_by_xpath("./..")
    option1.click()
    dash_duo.wait_for_text_to_equal("#output", "Selected: option1")
    option2.click()
    dash_duo.wait_for_text_to_equal("#output", "Selected: option2")
    # Not deselectable
    option2.click()
    dash_duo.wait_for_text_to_equal("#output", "Selected: option2")


def test_002ch_chip_group_deselectable(dash_duo):

    app = chipgroup_app(deselectable=True)
    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_element("div.mantine-Group-root")

    option1 = dash_duo.find_element("input[value='option1']").find_element_by_xpath("./..")
    option1.click()
    dash_duo.wait_for_text_to_equal("#output", "Selected: option1")
    option1.click()
    dash_duo.wait_for_text_to_equal("#output", "Selected: None")


def test_003ch_chip_group_deselectable_multiple(dash_duo):

    app = chipgroup_app(deselectable=True, multiple=True)
    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_element("div.mantine-Group-root")

    option1 = dash_duo.find_element("input[value='option1']").find_element_by_xpath("./..")
    option2 = dash_duo.find_element("input[value='option2']").find_element_by_xpath("./..")
    option1.click()
    dash_duo.wait_for_text_to_equal("#output", "Selected: ['option1']")
    option2.click()
    dash_duo.wait_for_text_to_equal("#output", "Selected: ['option1', 'option2']")
    option2.click()
    dash_duo.wait_for_text_to_equal("#output", "Selected: ['option1']")
    option1.click()
    dash_duo.wait_for_text_to_equal("#output", "Selected: []")


def test_004ch_single_chip(dash_duo):

    app = Dash(__name__)

    app.layout = dmc.MantineProvider(dmc.Chip("Radio a", value="a", id="a"))

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_element("#a")

    assert not dash_duo.get_logs()
