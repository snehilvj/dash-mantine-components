from dash import Dash, html, Output, Input, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def radiogroup_app(**kwargs):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        html.Div([
            dmc.RadioGroup(
                id="radio-group",
                children=dmc.Group([
                    dmc.Radio(value="option1", label="Option 1"),
                    dmc.Radio(value="option2", label="Option 2"),
                    dmc.Radio(value="option3", label="Option 3"),
                ]),
                **kwargs,
            ),
            html.Div(id="output")
        ])
    )

    @app.callback(
        Output("output", "children"),
        Input("radio-group", "value")
    )
    def update_output(selected_values):
        return f'Selected: {selected_values}'
    
    return app


def test_001ra_radio_group(dash_duo):

    app = radiogroup_app()
    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_element("div[aria-labelledby='radio-group-label']")

    option1 = dash_duo.find_element("input[value='option1']")
    option2 = dash_duo.find_element("input[value='option2']")
    option1.click()
    dash_duo.wait_for_text_to_equal("#output", "Selected: option1")
    option2.click()
    dash_duo.wait_for_text_to_equal("#output", "Selected: option2")
    # Not deselectable
    option2.click()
    dash_duo.wait_for_text_to_equal("#output", "Selected: option2")

    assert dash_duo.get_logs() == []


def test_002ra_radio_group_deselectable(dash_duo):

    app = radiogroup_app(deselectable=True)
    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_element("div[aria-labelledby='radio-group-label']")

    option1 = dash_duo.find_element("input[value='option1']")
    option1.click()
    dash_duo.wait_for_text_to_equal("#output", "Selected: option1")
    option1.click()
    dash_duo.wait_for_text_to_equal("#output", "Selected: None")

    assert dash_duo.get_logs() == []


def test_003ra_single_radio(dash_duo):

    app = Dash(__name__)

    app.layout = dmc.MantineProvider(dmc.Radio(label="Radio a", value="a", id="a"))

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_element("#a")

    assert dash_duo.get_logs() == []
