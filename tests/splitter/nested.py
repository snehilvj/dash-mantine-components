from dash import Dash, _dash_renderer
import dash_mantine_components as dmc

from usage import _style_text_panes

component = dmc.Splitter(
    h=350,
    children=[
        dmc.SplitterPane(
            "Sidebar",
            defaultSize=30,
            min=15,
            bg="blue",
        ),
        dmc.SplitterPane(
            defaultSize=70,
            min=30,
            children=[
                dmc.Splitter(
                    orientation="vertical",
                    h="100%",
                    children=[
                        dmc.SplitterPane(
                            "Editor",
                            defaultSize=60,
                            min=20,
                            bg="teal",
                        ),
                        dmc.SplitterPane(
                            "Terminal",
                            defaultSize=40,
                            min=20,
                            bg="grape",
                        )
                    ]
                )
            ]
        )
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
