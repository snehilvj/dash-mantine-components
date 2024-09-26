import dash_mantine_components as dmc
from dash import Dash, _dash_renderer, Input, Output
_dash_renderer._set_react_version("18.2.0")

scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.8/dayjs.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.8/locale/fr.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.8/locale/de.min.js",
]
app = Dash(external_scripts=scripts, external_stylesheets=dmc.styles.ALL)


def make_date_picker(id):
    return  dmc.DateInput(
    id=id,
    clearable=True,
    valueFormat="YYYY-MMMM-DD",
    label = "Date input YYYY-MMMM-DD",
    placeholder = "Date input",
    value="2024-01-15",
    pt=10
)

app.layout = dmc.MantineProvider(dmc.Box([
    dmc.Text("Demos multiple locales in one layout plus updating locale in a callback", py=10),

    dmc.DatesProvider(make_date_picker("fr"), settings={"locale": "fr"}),
    dmc.DatesProvider(make_date_picker("de"), settings={"locale": "de"}),

    dmc.Button("change language", id="btn", n_clicks=0, mt=20),
    dmc.DatesProvider(make_date_picker("de"), settings={"locale": "de"}, id="dates-provider"),

], p=20))

@app.callback(
    Output("dates-provider", "settings"),
    Input("btn", "n_clicks")
)
def update(n):
    if n % 2 == 0:
        return {"locale": "de"}
    return {"locale": "fr"}

if __name__ == "__main__":
    app.run(debug=True)

