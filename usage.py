from dash.dependencies import State
import dash_mantine_components as dmc
from dash import Dash, Input, Output, html

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Alert(
            [
                "This alert will disappear in 5 secs",
            ],
            title="Auto dismisable alert!",
            color="red",
            duration=5000,
            show=True,
            withCloseButton=True,
        ),
        dmc.Alert(
            [
                "Something terrible happened! You made a mistake and there is no going back, your data was lost forever! ",
            ],
            title="Bummer!",
            id="alert",
            color="violet",
            withCloseButton=True,
        ),
        dmc.Space(h=20),
        dmc.Button("Toggle alert", id="button"),
    ]
)


@app.callback(
    Output("alert", "show"),
    Input("button", "n_clicks"),
    State("alert", "show"),
    prevent_initial_call=True,
)
def restart(n_clicks, show):
    return not show


if __name__ == "__main__":
    app.run_server(debug=True)
