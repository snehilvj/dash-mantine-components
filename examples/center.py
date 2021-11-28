import dash_mantine_components as dmc
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Center(
            dmc.Text("I'm in the Center component!"),
            style={"height": "200px", "border": "1px solid black", "marginBottom": 10},
        ),
        dmc.Center(
            [
                dmc.Text("More than one components"),
                dmc.Button("Click Me!", style={"marginLeft": 5}),
            ],
            style={"height": "200px", "border": "1px solid black", "marginBottom": 10},
        ),
        dmc.Center(
            [
                dmc.Text("Use inline prop for inline components"),
                dmc.Button("Click Me!", style={"marginLeft": 5}),
            ],
            inline=True,
            style={"height": "200px", "border": "1px solid black", "marginBottom": 10},
        ),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
