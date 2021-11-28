import dash_mantine_components as dmc
from dash import Dash, Input, Output, html

app = Dash(__name__)


app.layout = html.Div(
    [
        dmc.MultiSelect(
            id="multi",
            data=[
                {"value": "react", "label": "React"},
                {"value": "ng", "label": "Angular"},
                {"value": "svelte", "label": "Svelte"},
                {"value": "vue", "label": "Vue"},
                {"value": "riot", "label": "Riot"},
                {"value": "next", "label": "Next.js"},
                {"value": "blitz", "label": "Blitz.js"},
            ],
            maxSelectedValues=4,
        ),
        dmc.Space(h=20),
        dmc.Text(id="text"),
    ]
)


@app.callback(
    Output("text", "children"), Input("multi", "value"), prevent_initial_call=True
)
def modal(value):
    return ", ".join(value) if value else ""


@app.callback(
    Output("multi", "error"), Input("multi", "value"), prevent_initial_call=True
)
def modal(value):
    return "You have selected more than 2 values" if len(value) > 2 else ""


if __name__ == "__main__":
    app.run_server(debug=True)
