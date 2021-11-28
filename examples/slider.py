import dash_mantine_components as dmc
from dash import Dash, Input, Output, html

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Space(h=20),
        dmc.Slider(
            id="slider",
            min=0,
            max=100,
            marks=[
                {"value": 20, "label": "20%"},
                {"value": 50, "label": "50%"},
                {"value": 80, "label": "80%"},
            ],
            size="md",
        ),
        dmc.Space(h=20),
        dmc.Text(id="output"),
        dmc.Text(id="drag"),
    ]
)


@app.callback(
    Output("output", "children"),
    Input("slider", "value"),
    prevent_initial_call=True,
)
def restart(value):
    return value


@app.callback(
    Output("drag", "children"),
    Input("slider", "drag_value"),
    prevent_initial_call=True,
)
def restart(value):
    return value


if __name__ == "__main__":
    app.run_server(debug=True)
