from dash import Dash, html
from dash.dependencies import Input, Output
import dash_mantine_components as dmc

app = Dash(
    __name__,
    external_scripts=[
        "https://unpkg.com/dayjs@1.8.21/dayjs.min.js",
        "https://unpkg.com/dayjs@1.8.21/locale/ru.js",
    ],
)

app.layout = html.Div(
    [
        dmc.Group(
            children=[
                dmc.DatePicker(format="dddd, MMMM D, YYYY"),
                dmc.DatePicker(
                    amountOfMonths=2,
                    locale="ru",
                    id="datepicker",
                ),
            ]
        ),
        dmc.Text(id="date"),
    ]
)


@app.callback(
    Output("date", "children"), Input("datepicker", "date"), prevent_initial_call=True
)
def print_date(date):
    return date


if __name__ == "__main__":
    app.run_server(debug=True)
