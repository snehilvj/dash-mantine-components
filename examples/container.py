import dash_mantine_components as dmc
from dash import Dash, Input, Output, html, State

app = Dash(__name__)

style = {"border": "1px solid", "height": "100px", "marginBottom": "40px"}

app.layout = html.Div(
    [
        dmc.Container("Default container", style=style),
        dmc.Container(
            "xs container with xs horizontal padding",
            size="xs",
            padding="xs",
            style=style,
        ),
        dmc.Container(
            "200px container width with 0 horizontal padding",
            size=200,
            padding=0,
            style=style,
        ),
        dmc.Container("Fluid container", fluid=True, style=style),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
