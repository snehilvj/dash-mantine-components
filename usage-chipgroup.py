
import dash_mantine_components as dmc
from dash import Dash, _dash_renderer, Input, Output
_dash_renderer._set_react_version("18.2.0")


app = Dash(external_stylesheets=dmc.styles.ALL)

chip_group = dmc.ChipGroup(
    children=dmc.Group([
        dmc.Chip("Chip a", value="a"),
        dmc.Chip("Chip b", value="b")
    ]),
    value="a",
    id ="chip-group",
    multiple=True
)


with_callback = dmc.Box([
        dmc.Text("Single Chip can be set at a time"),
        dmc.Text("Set chip with toggle button or clicking on chip"),
        dmc.Button("toggle", id="btn-chip-group", n_clicks=0 , m="sm"),
        chip_group,
        dmc.Text(id="chip-group-container"),
    ], p=20)

app.layout = dmc.MantineProvider([
    with_callback,
])

@app.callback(
    Output("chip-group", "value"),
    Input("btn-chip-group", "n_clicks")
)
def update(n):
    if n % 2 == 0:
        return "a"
    return "b"


@app.callback(
    Output("chip-group-container", "children"),
    Input("chip-group", "value")
)
def update(checked):
    return f"You selected: {checked}"


if __name__ == "__main__":
    app.run(debug=True)
