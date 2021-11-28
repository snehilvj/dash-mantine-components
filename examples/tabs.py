import dash_mantine_components as dmc
from dash import Dash, Input, Output, html

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Tabs(
            [
                dmc.Tab(label="Tab 1", children=["Tab 1"]),
                dmc.Tab(label="Tab 2", children=["Tab 2"]),
                dmc.Tab(label="Tab 3", children=["Tab 3"]),
            ],
            active=1,
            id="tabs",
            position="center",
        ),
        dmc.Space(h=20),
        dmc.Text(id="active-tab"),
        dmc.Space(h=20),
        dmc.SegmentedControl(
            id="variant",
            data=[
                {"label": "Default", "value": "default"},
                {"label": "Outline", "value": "outline"},
                {"label": "Pills", "value": "pills"},
            ],
        ),
    ]
)


@app.callback(
    Output("tabs", "variant"), Input("variant", "value"), prevent_initial_call=True
)
def change_variant(value):
    return value


@app.callback(Output("active-tab", "children"), Input("tabs", "active"))
def active_tab(value):
    return f"Active tab is: {value+1}"


if __name__ == "__main__":
    app.run_server(debug=True)
