import dash_mantine_components as dmc
from dash import Dash, Input, Output, html

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Affix(dmc.Button("I'm at the top left!"), position={"top": 20, "left": 20}),
        dmc.Affix(
            dmc.Button("I'm at the top right!"), position={"top": 20, "right": 20}
        ),
        dmc.Affix(
            dmc.Button("I'm at the bottom right!"), position={"bottom": 20, "right": 20}
        ),
        dmc.Affix(
            dmc.Button("I'm at the bottom left!"), position={"bottom": 20, "left": 20}
        ),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
