import dash_mantine_components as dmc
from dash import Dash, html

app = Dash(__name__)

style = {"border": "1px solid"}
bg_style = {"backgroundColor": "#e5e5e5"}

app.layout = html.Div(
    [
        dmc.SimpleGrid(
            cols=3,
            children=[
                html.Div(dmc.Center("1", style=bg_style), style=style),
                html.Div(dmc.Center("2", style=bg_style), style=style),
                html.Div(dmc.Center("3", style=bg_style), style=style),
                html.Div(dmc.Center("4", style=bg_style), style=style),
                html.Div(dmc.Center("5", style=bg_style), style=style),
            ],
        ),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
