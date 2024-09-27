
import dash_mantine_components as dmc
from dash import Dash, _dash_renderer

_dash_renderer._set_react_version("18.2.0")


app = Dash(external_stylesheets=dmc.styles.ALL)


date_picker = dmc.DateInput(
    id="date-input-308-2",
    clearable=True,
    valueFormat="DD/MM/YYYY",
    value="2022-10=15",
    label = "Date input format DD/MM/YYYY",
    placeholder = "Date input DD/MM/YYYY"
)


date_picker2 = dmc.DateInput(
    id="date-input-308",
    clearable=False,
    valueFormat="DD/MM/YYYY HH:mm:ss",
    value="2022-10=15",
    label = "Date input format DD/MM/YYYY HH:mm:ss",
    placeholder = "Date input DD/MM/YYYY HH:mm:ss"
)

date_picker3 = dmc.DateInput(
            id="dateinput2",
            label="Enter a date",
            description="You can type a date or select from the calendar",
            w=300,
        )

app.layout = dmc.MantineProvider(dmc.Box([
    dmc.Text("Issue #308 and #249 - ability to enter date and time according to valueFormat"),
    dmc.Text("Note - The entire date needs to be entered before the parser works correctly"),
    dmc.Text("Note - the DateProvider is not necessary", pb=20),
    date_picker,
    date_picker2,
    date_picker3
],p=20))

if __name__ == "__main__":
    app.run(debug=True)

