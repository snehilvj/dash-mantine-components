import time

from dash import Dash, html, Output, Input, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def checkboxgroup_app(**kwargs):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        html.Div(
            [
                dmc.CheckboxGroup(
                    id="checkbox-group",
                    children=dmc.Group(
                        [
                            dmc.Checkbox(value="option1", label="Option 1"),
                            dmc.Checkbox(value="option2", label="Option 2", disabled=True),
                            dmc.Checkbox(value="option3", label="Option 3"),
                        ]
                    ),
                    **kwargs,
                ),
                html.Div(id="output"),
            ]
        )
    )

    @app.callback(Output("output", "children"), Input("checkbox-group", "value"))
    def update_output(selected_values):
        return f"Selected: {selected_values}"

    return app


def test_001chb_checkbox_group(dash_duo):

    app = checkboxgroup_app()
    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_element("div[aria-labelledby='checkbox-group-label']")

    option1 = dash_duo.find_element("input[value='option1']")
    option1.click()
    dash_duo.wait_for_text_to_equal("#output", "Selected: option1")

    option2 = dash_duo.find_element("input[value='option2']")
    option2.click()  # Not clickable
    time.sleep(0.3)
    dash_duo.wait_for_text_to_equal("#output", "Selected: option1")

    option3 = dash_duo.find_element("input[value='option3']")
    option3.click()
    dash_duo.wait_for_text_to_equal("#output", "Selected: option3")

    assert dash_duo.get_logs() == []


def test_002chb_single_checkbox(dash_duo):

    app = Dash(__name__)

    app.layout = dmc.MantineProvider(dmc.Checkbox(label="Checkbox a", value="a", id="a"))

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_element("#a")

    assert dash_duo.get_logs() == []
