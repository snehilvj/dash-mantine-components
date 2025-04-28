import dash_mantine_components as dmc
from dash_iconify import DashIconify
from dash import Dash, Input, Output, _dash_renderer, clientside_callback
_dash_renderer._set_react_version("18.2.0")


def test_001sw_switch(dash_duo):
    theme_toggle = dmc.Switch(
        offLabel=DashIconify(icon="radix-icons:sun", width=15, color=dmc.DEFAULT_THEME["colors"]["yellow"][8]),
        onLabel=DashIconify(icon="fa6-regular:moon", width=15, color=dmc.DEFAULT_THEME["colors"]["yellow"][6]),
        id="color-scheme-switch",
    )

    app = Dash()

    app.layout = dmc.MantineProvider(
        [theme_toggle, dmc.Text("Your page content")],
        id='app-theme'
    )

    clientside_callback(
        """
        (switchOn) => {
           return [switchOn ? 'dark' : 'light', dash_clientside.no_update]
        }
        """,
        Output('app-theme', 'forceColorScheme'),
        Output("color-scheme-switch", "id"),
        Input("color-scheme-switch", "checked"),
    )

    dash_duo.start_server(app)

    # find the sun icon  (initial state)
    icon = dash_duo.find_element(".iconify.iconify--radix-icons")

    icon.click()

    # find the moon icon
    icon = dash_duo.find_element(".iconify.iconify--fa6-regular")

    assert dash_duo.get_logs() == []
