from dash import Dash, _dash_renderer
import dash_mantine_components as dmc

from usage import _style_text_panes

component = dmc.Splitter(
    redistribute="nearest",
    h=200,
    children=[
        dmc.SplitterPane(
            "Panel A",
            defaultSize=25,
            min=10,
            bg="blue",
        ),
        dmc.SplitterPane(
            "Panel B",
            defaultSize=25,
            min=10,
            bg="teal",
        ),
        dmc.SplitterPane(
            "Panel C",
            defaultSize=25,
            min=10,
            bg="grape",
        ),
        dmc.SplitterPane(
            "Panel D",
            defaultSize=25,
            min=10,
            bg="orange",
        ),
    ],
)

if __name__ == "__main__":
    _dash_renderer._set_react_version("19.2.4")
    # TODO decide if "hidden" styling as in upstream Mantine should be replicated
    _style_text_panes(component)
    app = Dash(suppress_callback_exceptions=True)
    app.layout = dmc.MantineProvider(
        children=dmc.Container(
            children=[
                component,
            ]
        )
    )
    app.run(debug=True)
