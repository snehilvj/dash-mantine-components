from dash import Dash,  Output, Input
import dash_mantine_components as dmc
from dash_iconify import DashIconify


def make_app():
    app = Dash(__name__)

    component = dmc.ColorSchemeToggle(
        lightIcon=DashIconify(icon="radix-icons:sun", width=20),
        darkIcon=DashIconify(icon="radix-icons:moon", width=20),
        color="yellow",
        size="lg",
        m="xl",
        id="color-scheme-toggle",
    )

    app.layout = dmc.MantineProvider(
        [
            component,
            dmc.Text(id="color-scheme-output"),
        ],
        defaultColorScheme="dark",
    )

    @app.callback(
        Output("color-scheme-output", "children"),
        Input("color-scheme-toggle", "computedColorScheme"),
    )
    def update(scheme):
        return f"Current color scheme: {scheme}"

    return app



def test_co01_color_scheme_toggle(dash_duo):
    app = make_app()
    dash_duo.start_server(app)

    toggle = dash_duo.find_element("#color-scheme-toggle")

    # Initial state (defaultColorScheme="dark")
    dash_duo.wait_for_text_to_equal(
        "#color-scheme-output",
        "Current color scheme: dark",
    )

    toggle.click()

    dash_duo.wait_for_text_to_equal(
        "#color-scheme-output",
        "Current color scheme: light",
    )

    # Read localStorage directly from the browser
    stored_scheme = dash_duo.driver.execute_script(
        'return window.localStorage.getItem("mantine-color-scheme-value");'
    )

    assert stored_scheme == "light"

    assert dash_duo.get_logs() == []

