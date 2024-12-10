from dash import Dash, html, Output, Input, _dash_renderer, callback
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def test_001bu_burger(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        html.Div(
            [dmc.Burger(id="burger-button", opened=False, lineSize=2, ), dmc.Text(id="burger-state", mt="md")]
        )
    )

    @callback(Output("burger-state", "children"), Input("burger-button", "opened"))
    def is_open(opened):
        return str(opened)

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#burger-state", "False")

    # Open Burger
    burger = dash_duo.find_element("#burger-button")
    burger.click()

    # Verify the Burger opens when clicking the button
    dash_duo.wait_for_text_to_equal("#burger-state", "True")

    # Close Popover
    burger.click()

    # Verify the Burger closes when clicked again
    dash_duo.wait_for_text_to_equal("#burger-state", "False")

    assert dash_duo.get_logs() == []

