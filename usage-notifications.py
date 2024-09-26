from dash import Dash, _dash_renderer, html, callback, Input, Output
import dash_mantine_components as dmc
from dash_iconify import DashIconify

_dash_renderer._set_react_version("18.2.0")

app = Dash(external_stylesheets=dmc.styles.ALL)

app.layout = dmc.MantineProvider(
    html.Div([
        dmc.NotificationProvider(position="bottom-right"),
        html.Div(id="notifications-container"),
        dmc.Button("Show Notification", id="notify"),
    ])
)


@callback(
    Output("notifications-container", "children"),
    Input("notify", "n_clicks"),
    prevent_initial_call=True,
)
def show(n_clicks):
    return dmc.Notification(
        title="Hey there!",
        id="simple-notify",
        action="show",
        message="Notifications in Dash, Awesome!",
        icon=DashIconify(icon="ic:round-celebration"),
    )

if __name__ == "__main__":
    app.run(debug=True)