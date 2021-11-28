import dash_mantine_components as dmc
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Affix(
            dmc.Alert("I'm in top left!", title="I am in affix component"),
            position={"top": 20, "left": 20},
        ),
        dmc.Affix(dmc.Button("I'm in top right!"), position={"top": 20, "right": 20}),
        dmc.Affix(
            dmc.Button("I'm in bottom right!"), position={"bottom": 20, "right": 20}
        ),
        dmc.Affix(
            dmc.Button("I'm in bottom left!"), position={"bottom": 20, "left": 20}
        ),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
