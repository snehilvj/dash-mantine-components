import dash_mantine_components as dmc
from dash import Dash, Input, Output, html, State, dcc
from datetime import datetime, timedelta

app = Dash(__name__)

style = {"border": "1px solid", "height": "100px", "marginBottom": "40px"}

app.layout = html.Div(
    [
        dcc.Location(id="url"),
        dmc.DatePicker(
            id="date", format="dddd, MMMM D, YYYY", style={"width": "250px"}
        ),
        dmc.Space(h=20),
        dmc.Text(id="text"),
        dmc.Space(h=20),
        html.Div(id="date-container"),
    ]
)


@app.callback(Output("text", "children"), Input("date", "date"))
def datepicker(date):
    return date


@app.callback(Output("date-container", "children"), Input("url", "pathname"))
def datepicker(date):
    return [
        dmc.DateRangePicker(
            dates=[
                str(datetime.now().date() - timedelta(days=4)),
                str(datetime.now().date()),
            ]
        )
    ]


if __name__ == "__main__":
    app.run_server(debug=True)
