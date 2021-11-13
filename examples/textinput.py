import dash_mantine_components as dmc
from dash import Dash, Input, Output, html, State, dcc
from datetime import datetime, timedelta

app = Dash(__name__)


app.layout = html.Div(
    [
        dmc.TextInput(
            id="textinput", value="Pre filled text", placeholder="Enter value"
        ),
        dmc.Space(h=20),
        dmc.Text(id="text"),
    ]
)


@app.callback(Output("text", "children"), Input("textinput", "value"))
def radio(value):
    return value


if __name__ == "__main__":
    app.run_server(debug=True)
