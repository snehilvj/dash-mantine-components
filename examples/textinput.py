import dash_mantine_components as dmc
from dash import Dash, Input, Output, html

app = Dash(__name__)


app.layout = html.Div(
    [
        dmc.TextInput(
            id="textinput",
            value="Pre filled text",
            label="Hi this is a textbox",
            placeholder="Enter value",
        ),
        dmc.Space(h=20),
        dmc.TextInput(value="Text input", placeholder="Enter value", type="password"),
        dmc.Space(h=20),
        dmc.Text(id="text"),
    ]
)


@app.callback(Output("text", "children"), Input("textinput", "value"))
def radio(value):
    return value


if __name__ == "__main__":
    app.run_server(debug=True)
