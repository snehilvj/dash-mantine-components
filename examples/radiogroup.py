import dash_mantine_components as dmc
from dash import Dash, Input, Output, html, State, dcc
from datetime import datetime, timedelta

app = Dash(__name__)


app.layout = html.Div(
    [
        dmc.RadioGroup(
            id="radio",
            label="Select your favorite framework/library",
            description="This is anonymous",
            error="This is an error message",
            spacing="lg",
            color="lime",
            required=True,
            options=[
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
