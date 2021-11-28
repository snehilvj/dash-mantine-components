from datetime import datetime, timedelta

from dash import Dash, Input, Output, dcc, html
import dash_mantine_components as dmc

app = Dash(__name__)

app.layout = html.Div(
    [
        dcc.Location(id="url"),
        dmc.DatePicker(
            id="date",
            format="dddd, MMMM D, YYYY",
            disableOutsideEvents=True,
            style={"width": "250px"},
        ),
        dmc.Space(h=20),
        dmc.Text(id="text"),
        dmc.Space(h=20),
        html.Div(id="date-container"),
        dmc.Space(h=20),
        dmc.DatePicker(
            amountOfMonths=2,
            required=True,
            firstDayOfWeek="sunday",
            label="Select Date",
            initiallyOpened=True,
        ),
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
            ],
            amountOfMonths=2,
        )
    ]


if __name__ == "__main__":
    app.run_server(debug=True)
