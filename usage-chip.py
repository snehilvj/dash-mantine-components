
import dash_mantine_components as dmc
from dash import Dash, _dash_renderer, Input, Output
from dash_iconify import DashIconify
_dash_renderer._set_react_version("18.2.0")


app = Dash(external_stylesheets=dmc.styles.ALL)

with_callback =  dmc.Box([
        dmc.Text("Set chip with toggle button or clicking on chip", m="sm"),
        dmc.Button("toggle", id="btn-chip", n_clicks=0, mb="sm"),
        dmc.Chip("awesome chip", checked=True, id="chip", controlled=True),
        dmc.Text(id="chip-container"),
    ], p=20)

icon = dmc.Chip("Forbidden", icon=DashIconify(icon="bi-x-circle"), color="red", checked=True, m="sm", controlled=True)


tooltip = dmc.Tooltip(
    label="chip tooltip",
  #  refProp="rootRef",  Need to update Tootlip to add this prop but still works ok
    children=dmc.Chip("chip with tooltip", controlled=True)
)

add_props_to_root = dmc.Chip(
    "Chip with props added to root" ,
    wrapperProps={'data-testid': 'wrapper'},
    checked=True,
    controlled=True
)



app.layout = dmc.MantineProvider([
    with_callback,
    dmc.Divider(my="lg"),
    icon,
    dmc.Divider(my="lg"),
    tooltip,
    dmc.Divider(my="lg"),
    add_props_to_root
])


@app.callback(
    Output("chip", "checked"),
    Input("btn-chip", "n_clicks")
)
def update(n):
    if n %2 == 0:
        return True
    return False


@app.callback(
    Output("chip-container", "children"),
    Input("chip", "checked")
)
def update(checked):
    return f"You selected: {checked}"

if __name__ == "__main__":
    app.run(debug=True)
