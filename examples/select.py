import dash_mantine_components as dmc
from dash import Dash, Input, Output, html

app = Dash(__name__)


app.layout = html.Div(
    [
        dmc.Select(
            id="select",
            data=[
                {"value": "react", "label": "React"},
                {"value": "ng", "label": "Angular"},
                {"value": "svelte", "label": "Svelte"},
                {"value": "vue", "label": "Vue"},
                {"value": "riot", "label": "Riot"},
                {"value": "next", "label": "Next.js"},
                {"value": "blitz", "label": "Blitz.js"},
            ],
            initiallyOpened=True,
        ),
        dmc.Space(h=20),
        dmc.Text(id="text"),
    ]
)


@app.callback(
    Output("text", "children"), Input("select", "value"), prevent_initial_call=True
)
def modal(value):
    return value


if __name__ == "__main__":
    app.run_server(debug=True)
