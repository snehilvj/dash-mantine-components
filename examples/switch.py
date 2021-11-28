import dash_mantine_components as dmc
from dash import Dash, Input, Output, html

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Switch(id="switch", label="This is a switch.", color="green"),
        dmc.Space(h=20),
        dmc.Text(id="output"),
    ]
)


@app.callback(
    Output("output", "children"),
    Input("switch", "checked"),
)
def restart(value):
    return "On" if value else "Off"


if __name__ == "__main__":
    app.run_server(debug=True)
