from dash import Dash, Input, Output, _dash_renderer, callback
import dash_mantine_components as dmc

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

controls = [
    dmc.SegmentedControl(
        id="orientation-control",
        data=[
            {"label": "Horizontal", "value": "horizontal"},
            {"label": "Vertical", "value": "vertical"},
        ],
    )
]    

@callback(
    Output("splitter", "orientation"),
    Input("orientation-control", "value"),
    prevent_initial_call=True,
)
def handle_orientation_change(value):
    return value

def _controlled_component(component, controls):
    return dmc.Stack(
        [
            component,
            dmc.Group(align="flex-start", children=controls),
        ],
    )

def _style_text_panes(component, color: str | None ="white"):
    if isinstance(component, dmc.SplitterPane) and isinstance(component.children, str):
        if color:
            component.c = color # type: ignore
        component.fw = 500
        component.style = {
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
        }
    elif isinstance(component, (dmc.Splitter, dmc.SplitterPane)):
        for child in component.children:
            _style_text_panes(child, color=color)

if __name__ == "__main__":
    _dash_renderer._set_react_version("19.2.4")
    # TODO decide if "hidden" styling as in upstream Mantine should be replicated
    _style_text_panes(component)
    app = Dash()
    app.layout = dmc.MantineProvider(
        children=dmc.Container(
            children=[
                _controlled_component(component, controls),
            ]
        )
    )
    app.run(debug=True)
