import dash_mantine_components as dmc
from dash import Dash, Input, Output, html

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Chips(
            data=[
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
            data=[
                {"value": "react", "label": "React"},
                {"value": "ng", "label": "Angular"},
                {"value": "svelte", "label": "Svelte"},
                {"value": "vue", "label": "Vue"},
            ],
            value="vue",
        ),
        dmc.Space(h=20),
        dmc.Chips(
            id="multiple",
            color="red",
            multiple=True,
            variant="filled",
            data=[
                {"value": "react", "label": "React"},
                {"value": "ng", "label": "Angular"},
                {"value": "svelte", "label": "Svelte"},
                {"value": "vue", "label": "Vue"},
            ],
            value=["vue"],
        ),
        dmc.Space(h=20),
        html.Div(id="output"),
        dmc.Space(h=20),
        html.Div(id="multiple-output"),
    ]
)


@app.callback(
    Output("output", "children"),
    Input("chips", "value"),
    prevent_initial_call=True,
)
def restart(value):
    return dmc.Text(value)


@app.callback(
    Output("multiple-output", "children"),
    Input("multiple", "value"),
    prevent_initial_call=True,
)
def restart(value):
    return dmc.Text(", ".join(value))


if __name__ == "__main__":
    app.run_server(debug=True)
