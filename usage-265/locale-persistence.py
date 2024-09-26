
import dash_mantine_components as dmc
from dash import Dash, _dash_renderer, Input, Output
_dash_renderer._set_react_version("18.2.0")


scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.8/dayjs.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.8/locale/fr.min.js",
]
app = Dash(external_scripts=scripts, external_stylesheets=dmc.styles.ALL)


date_picker = dmc.DateInput(
    id="date-input-203",
    clearable=True,
    valueFormat="YYYY-MM-DD",
    label = "Date input YYYY-MM-DD",
    placeholder = "Date input YYYY-MM-DD",
    persistence=True,
    value="2022-01-01"
)

app.layout = dmc.MantineProvider([
    dmc.Text("Select a date, refresh page.  Localization should persist - issue#203"),
    dmc.Text("Localization (French) should appear at start - issue#203"),
    dmc.DatesProvider(date_picker, settings={"locale": "fr"})
])

if __name__ == "__main__":
    app.run(debug=True)

