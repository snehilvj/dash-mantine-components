from dash.dependencies import Output
import dash_mantine_components as dmc
from dash import Dash, html, Output, Input, dcc
from time import sleep

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Affix(
            dmc.Button("I'm in top left!"),
            position={"top": 20, "left": 20},
            id="affix",
        )
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True, port=8070)
