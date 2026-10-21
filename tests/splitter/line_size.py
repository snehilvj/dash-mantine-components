from dash import Dash, Input, Output, _dash_renderer, callback
import dash_mantine_components as dmc

from usage import _controlled_component, _style_text_panes

component = dmc.Splitter(
    id="splitter",
    h=200,
    children=[
        dmc.SplitterPane(
            "First pane",
            defaultSize=50,
            min=20,
            bg="blue",
        ),
        dmc.SplitterPane(
            "Second pane",
            defaultSize=50,
            min=20,
            bg="teal",
        ),
    ],
)
    
controls =[
    dmc.InputWrapper(
        label="Line size",
        children=dmc.Slider(id="line-size-slider", min=1, max=10, step=1, w="20rem"),
    )
]
        
@callback(
    Output("splitter", "lineSize"),
    Input("line-size-slider", "value"),
    prevent_initial_call=True
)
def handle_line_size_change(value):
    return value

if __name__ == "__main__":
    _dash_renderer._set_react_version("19.2.4")
    # TODO decide if "hidden" styling as in upstream Mantine should be replicated
    _style_text_panes(component)
    app = Dash(suppress_callback_exceptions=True)
    app.layout = dmc.MantineProvider(
        children=dmc.Container(
            children=[
                _controlled_component(component, controls),
            ]
        )
    )
    app.run(debug=True)
