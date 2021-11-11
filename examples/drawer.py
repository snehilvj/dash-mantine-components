import dash_mantine_components as dmc
from dash import Dash, Input, Output, html, State, dcc
from datetime import datetime, timedelta

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Drawer(
            id="drawer",
            padding="md",
            size=500,
            title="This is a drawer",
            children=[
                dmc.Button("Click me!"),
                dmc.Space(h=20),
                dmc.SegmentedControl(
                    data=[
                        {"value": "react", "label": "React"},
                        {"value": "ng", "label": "Angular"},
                        {"value": "svelte", "label": "Svelte"},
                        {"value": "vue", "label": "Vue"},
                    ]
                ),
            ],
        ),
        dmc.Button("Click to open drawer", id="button"),
        dmc.Space(h=20),
        dmc.Text(id="text"),
    ]
)


@app.callback(
    Output("drawer", "opened"), Input("button", "n_clicks"), prevent_initial_call=True
)
def drawer(n_clicks):
    return True


@app.callback(
    Output("text", "children"), Input("drawer", "opened"), prevent_initial_call=True
)
def drawer_closed(opened):
    return "Drawer closed"


if __name__ == "__main__":
    app.run_server(debug=True)
