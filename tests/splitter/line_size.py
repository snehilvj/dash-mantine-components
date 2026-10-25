from dash import Dash, Input, Output, _dash_renderer, callback
import dash_mantine_components as dmc
from dash_iconify import DashIconify

from usage import _controlled_component, _style_text_panes

color_swatches = [color[5] for color in dmc.DEFAULT_THEME["colors"].values()]
initial_color = dmc.DEFAULT_THEME["colors"]["gray"][5]
initial_line_size = 1
icons = [
    {"label": "Dots 2x3", "value": "tabler:grip-vertical"},
    {"label": "Dots 1x3", "value": "mdi:dots-vertical"},
    {"label": "Lines", "value": "fa7-solid:grip-lines-vertical"},
]
initial_handle_icon_name = "tabler:grip-vertical"

component = dmc.Splitter(
    id="splitter",
    h=200,
    handleColor=initial_color, # type: ignore
    handleIcon=DashIconify(icon=initial_handle_icon_name),
    lineSize=initial_line_size,
    children=[
        dmc.SplitterPane(
            "First pane",
            defaultSize=50,
            min=20,
        ),
        dmc.SplitterPane(
            "Second pane",
            defaultSize=50,
            min=20,
        ),
    ],
)
    
controls =[
    dmc.InputWrapper(
        label="Line size",
        children=dmc.Slider(id="line-size-slider", min=1, max=10, step=1, w="20rem", value=initial_line_size),
    ),
    dmc.ColorInput(
        label="Handle color",
        id="handle-color-input",
        value=initial_color,
        swatches=color_swatches
    ),
    dmc.Select(
        label="Handle icon",
        id="handle-icon-select",
        data=icons,
        value=initial_handle_icon_name
    )
]
        
@callback(
    Output("splitter", "lineSize"),
    Output("splitter", "handleColor"),
    Output("splitter", "handleIcon"),
    Input("line-size-slider", "value"),
    Input("handle-color-input", "value"),
    Input("handle-icon-select", "value"),
    prevent_initial_call=True
)
def handle_props_change(line_size, handle_color, handle_icon):
    return line_size, handle_color, DashIconify(icon=handle_icon)

if __name__ == "__main__":
    _dash_renderer._set_react_version("19.2.4")
    # TODO decide if "hidden" styling as in upstream Mantine should be replicated
    _style_text_panes(component, color="black")
    app = Dash(suppress_callback_exceptions=True)
    app.layout = dmc.MantineProvider(
        children=dmc.Container(
            children=[
                _controlled_component(component, controls),
            ]
        )
    )
    app.run(debug=True)
