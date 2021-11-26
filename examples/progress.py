from dash import Dash, html, Output, Input
import random

import dash_mantine_components as dmc

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Progress(
            id="progress",
            value=69,
            size="xl",
        ),
        dmc.Space(h=20),
        dmc.Button("Update Progress with random number", id="button"),
    ]
)


@app.callback(Output("progress", "value"), Input("button", "n_clicks"))
def progress(n_clicks):
    return random.randint(1, 100)


if __name__ == "__main__":
    app.run_server(debug=True)
