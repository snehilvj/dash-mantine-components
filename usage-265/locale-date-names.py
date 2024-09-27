
import dash_mantine_components as dmc
from dash import Dash, _dash_renderer, Input, Output
_dash_renderer._set_react_version("18.2.0")

scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.8/dayjs.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.8/locale/fr.min.js",
]
app = Dash(external_scripts=scripts, external_stylesheets=dmc.styles.ALL)


date_picker = dmc.DateInput(
    id="date-input-203=c",
    clearable=True,
    valueFormat="YYYY-MMMM-DD",
    label = "Date input YYYY-MMMM-DD",
    placeholder = "Date input",
    value="2024-01-15",
    pt=10
)

app.layout = dmc.MantineProvider(dmc.Box([
    dmc.Text("Localization (French) should appear at start - issue#203"),
    dmc.Text("Try changing month in input to 'avril'. Should be able to type month in French,  Note - it's necessary to include accents.  issue#264"),
    dmc.DatesProvider(date_picker, settings={"locale": "fr"})
], p=20))

if __name__ == "__main__":
    app.run(debug=True)

