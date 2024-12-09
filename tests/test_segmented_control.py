from dash import Dash, html, Output, Input, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def test_001se_segmented_control(dash_duo):
    app = Dash()
    app.layout = dmc.MantineProvider(
        [
            dmc.SegmentedControl(
                id="segmented",
                data=[
                    {"label": "a", "value": "a"},
                    {"label": "b", "value": "b", "disabled": True},
                    {"label": "c", "value": "c"},
                ],
                value="a",
            ),
            html.Div(id="output"),
        ]
    )

    @app.callback(
        Output("output", "children"),
        Input("segmented", "value"),
    )
    def update(choice):
        return f"{choice=}"

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#output", "choice='a'")

    option_b = dash_duo.find_element("input[value='b']")

    # Verify that "b" is disabled
    assert option_b.get_attribute("disabled") == "true"

    option_c = dash_duo.find_element("input[value='c']").find_element_by_xpath("./..")
    option_c.click()
    dash_duo.wait_for_text_to_equal("#output", "choice='c'")

    assert dash_duo.get_logs() == []
