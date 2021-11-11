import dash_mantine_components as dmc
from dash import Dash, Input, Output, html, State

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Chips(
            options=[
                {"value": "react", "label": "React"},
                {"value": "ng", "label": "Angular"},
                {"value": "svelte", "label": "Svelte"},
                {"value": "vue", "label": "Vue"},
            ],
        ),
        dmc.Space(h=20),
        dmc.Chips(
            id="chips",
            color="orange",
            variant="filled",
            options=[
                {"value": "react", "label": "React"},
                {"value": "ng", "label": "Angular"},
                {"value": "svelte", "label": "Svelte"},
                {"value": "vue", "label": "Vue"},
            ],
            value="vue",
        ),
        dmc.Space(h=20),
        html.Div(id="output"),
    ]
)


@app.callback(
    Output("output", "children"),
    Input("chips", "value"),
    prevent_initial_call=True,
)
def restart(value):
    return dmc.Text(value)


if __name__ == "__main__":
    app.run_server(debug=True)
