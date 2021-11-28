from dash.dependencies import Input, Output
import dash_mantine_components as dmc
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Group(
            [
                dmc.Button("Click Me!"),
                dmc.Button("Click Me!", color="red"),
                dmc.Button("Click Me!", variant="outline"),
                dmc.Button(
                    "Click Me!",
                    variant="gradient",
                    gradient={"from": "teal", "to": "lime", "deg": 105},
                ),
                dmc.Button("Click Me!", loading=True),
                dmc.Button("Click Me!", compact=True),
                dmc.Button("Click Me!", size="lg"),
                dmc.Button("Click Me!", radius="lg"),
                dmc.Button(
                    ["Click Me!", dmc.Space(w=9), dmc.Badge(id="badge")],
                    id="click",
                ),
            ]
        )
    ]
)


@app.callback(Output("badge", "children"), Input("click", "n_clicks"))
def counter(n_clicks):
    return "0" if not n_clicks else str(n_clicks)


if __name__ == "__main__":
    app.run_server(debug=True)
