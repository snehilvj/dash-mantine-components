import dash_mantine_components as dmc
from dash import Dash, Input, Output, html, State, dcc
from datetime import datetime, timedelta

app = Dash(__name__)


app.layout = html.Div(
    [
        dmc.SegmentedControl(
            id="radio",
            data=[
                {"value": "react", "label": "React"},
                {"value": "svelte", "label": "Svelte"},
                {"value": "ng", "label": "Angular"},
                {"value": "vue", "label": "Vue"},
            ],
        ),
        dmc.Space(h=50),
        dmc.Text(id="text"),
    ]
)


@app.callback(Output("text", "children"), Input("radio", "value"))
def radio(value):
    return value


if __name__ == "__main__":
    app.run_server(debug=True)
