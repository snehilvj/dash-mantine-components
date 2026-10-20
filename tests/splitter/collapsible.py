from dash import Dash, _dash_renderer
import dash_mantine_components as dmc
from dash import Input, Output, State, callback

from usage import _controlled_component, _style_text_panes

component = dmc.Splitter(
    id="splitter",
    h=200,
    children=[
        dmc.SplitterPane(
            "Collapsible sidebar",
            collapsible=True,
            defaultSize=30,
            min=20,
            bg="blue",
        ),
        dmc.SplitterPane(
            "Main content",
            defaultSize=70,
            min=30,
            bg="teal",
        ),
    ],
)

controls = [
    dmc.Button("Toggle Sidebar", id="toggle-button")
]

@callback(
    Output("splitter", "collapsed"),
    Input("toggle-button", "n_clicks"),
    State("splitter", "collapsed"),
    prevent_initial_call=True,
)
def toggle_sidebar(n_clicks, collapsed):
    return [0] if not collapsed or 0 not in collapsed else []

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
