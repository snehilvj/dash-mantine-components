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
            ]
        )
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
