import json

from dash import Dash, Input, Output, State, _dash_renderer
import dash_mantine_components as dmc
from selenium.webdriver.common.keys import Keys


_dash_renderer._set_react_version("19.2.4")


def test_001sp_splitter_controlled_collapse(dash_duo):
    """ Test collapsing and expanding a splitter pane """
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        [
            dmc.Splitter(
                id="splitter",
                step=5,
                collapsed=[],
                sizes=[40, 60],
                h=200,
                children=[
                    dmc.SplitterPane(
                        "Sidebar", defaultSize=30, min=20, collapsible=True, bg="blue"
                    ),
                    dmc.SplitterPane("Content", defaultSize=70, min=30, bg="teal"),
                ],
            ),
            dmc.Button("Toggle sidebar", id="toggle-button"),
            dmc.Text(id="state"),
        ]
    )

    @app.callback(
        Output("splitter", "collapsed"),
        Input("toggle-button", "n_clicks"),
        State("splitter", "collapsed"),
        prevent_initial_call=True,
    )
    def toggle_sidebar(n_clicks, collapsed):
        return [] if 0 in collapsed else [0]

    @app.callback(
        Output("state", "children"),
        Input("splitter", "sizes"),
        Input("splitter", "collapsed"),
    )
    def report_state(sizes, collapsed):
        return json.dumps([sizes, collapsed])

    dash_duo.start_server(app)
    # expect initially set sizes (default size has lower priority)
    dash_duo.wait_for_text_to_equal("#state", "[[40, 60], []]")
    # enlarge left pane by step=5 with arrow right key
    handle = dash_duo.find_element('#splitter [role="separator"]')
    handle.send_keys(Keys.ARROW_RIGHT)
    dash_duo.wait_for_text_to_equal("#state", "[[45, 55], []]")

    # collapse the left pane
    dash_duo.find_element("#toggle-button").click()
    dash_duo.wait_for_text_to_equal("#state", "[[0, 100], [0]]")
    # expand the left pane again and expect it to restore its previous size
    dash_duo.find_element("#toggle-button").click()
    dash_duo.wait_for_text_to_equal("#state", "[[45, 55], []]")



    assert dash_duo.get_logs() == []


def test_002sp_splitter_controlled_size(dash_duo):
    """ Test setting the size of the splitter panes """
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        [
            dmc.Splitter(
                id="splitter",
                step=5,
                h=200,
                children=[
                    dmc.SplitterPane(
                        "Sidebar", defaultSize=30, min=20, collapsible=True, bg="blue"
                    ),
                    dmc.SplitterPane("Content", defaultSize=70, min=30, bg="teal"),
                ],
            ),
            dmc.Button("50/50", id="size-button"),
            dmc.Text(id="state"),
        ]
    )

    @app.callback(
        Output("splitter", "sizes"),
        Input("size-button", "n_clicks"),
        prevent_initial_call=True,
    )
    def set_size(n_clicks):
        return [50, 50]

    @app.callback(
        Output("state", "children"),
        Input("splitter", "sizes"),
    )
    def report_state(sizes):
        return json.dumps(sizes)

    dash_duo.start_server(app)
    # expect initially no sizes set
    dash_duo.wait_for_text_to_equal("#state", "null")
    # set size using the button
    dash_duo.find_element("#size-button").click()
    dash_duo.wait_for_text_to_equal("#state", "[50, 50]")

    assert dash_duo.get_logs() == []
