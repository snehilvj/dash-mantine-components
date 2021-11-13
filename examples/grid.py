import dash_mantine_components as dmc
from dash import Dash, Input, Output, html, State, dcc
from datetime import datetime, timedelta

app = Dash(__name__)

style = {"border": "1px solid"}
bg_style = {"backgroundColor": "#e5e5e5"}

app.layout = html.Div(
    [
        dmc.Grid(
            children=[
                dmc.Col(dmc.Center("1", style=bg_style), span=4, style=style),
                dmc.Col(dmc.Center("2", style=bg_style), span=4, style=style),
                dmc.Col(dmc.Center("3", style=bg_style), span=4, style=style),
            ]
        ),
        dmc.Space(h=50),
        dmc.Grid(
            gutter="xl",
            children=[
                dmc.Col(dmc.Center("1", style=bg_style), span=3, style=style),
                dmc.Col(dmc.Center("2", style=bg_style), span=3, style=style),
                dmc.Col(dmc.Center("3", style=bg_style), span=3, style=style),
            ],
        ),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
