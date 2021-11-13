import dash_mantine_components as dmc
from dash import Dash, Input, Output, html, State, dcc
from datetime import datetime, timedelta

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Group(
            [
                dmc.Button("Button 1"),
                dmc.Button("Button 2"),
                dmc.Button("Button 3"),
            ]
        ),
        dmc.Space(h=50),
        dmc.Group(
            [
                dmc.Button("Button 1"),
                dmc.Button("Button 2"),
                dmc.Button("Button 3"),
            ],
            direction="column",
        ),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
