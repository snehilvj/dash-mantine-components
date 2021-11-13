import dash_mantine_components as dmc
from dash import Dash, Input, Output, html
from datetime import datetime, timedelta

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.DatePicker(
            id="datepicker", format="dddd, MMMM D, YYYY", style={"width": "250px"}
        ),
        dmc.Space(h=20),
        dmc.Text(id="text"),
        dmc.Button("Click Me!"),
    ]
)


@app.callback(Output("text", "children"), Input("datepicker", "date"))
def datepicker(date):
    return date


if __name__ == "__main__":
    app.run_server(debug=True)
