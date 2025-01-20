from dash import Dash, html, Output, Input, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def tree_app(**kwargs):
    app = Dash(__name__)

    default_data = [
        {
            "label": "1",
            "value": "1",
            "children": [
                {
                    "label": "a",
                    "value": "1.a",
                    "children": [
                        {"label": "i", "value": "1.a.i"},
                        {"label": "ii", "value": "1.a.ii"},
                        {"label": "iii", "value": "1.a.iii"},
                    ],
                },
                {"label": "b", "value": "1.b"},
            ],
        },
        {"label": "2", "value": "2"},
    ]

    app.layout = dmc.MantineProvider(
        html.Div(
            [
                dmc.Tree(id="tree", data=kwargs.pop("data", default_data), **kwargs),
                html.Div(id="output-checked"),
                html.Div(id="output-data"),
                html.Div(id="output-expanded"),
                html.Div(id="output-selected"),
                html.Button(id="button-expand-all", children="expand all"),
                html.Button(id="button-clear-data", children="clear data"),
                html.Button(id="button-clear-selection", children="clear selection"),
                html.Button(id="button-clear-checked", children="clear checked"),
            ]
        )
    )

    @app.callback(Output("output-checked", "children"), Input("tree", "checked"))
    def update_output_checked(checked):
        return str(checked)

    @app.callback(Output("output-data", "children"), Input("tree", "data"))
    def update_output_data(data):
        return str(data)

    @app.callback(Output("output-expanded", "children"), Input("tree", "expanded"))
    def update_output_expanded(expanded):
        return str(expanded)

    @app.callback(Output("output-selected", "children"), Input("tree", "selected"))
    def update_output_selected(selected):
        return str(selected)

    @app.callback(
        Output("tree", "expanded"),
        Input("button-expand-all", "n_clicks"),
        prevent_initial_call=True,
    )
    def expand_all(n_clicks):
        return "*"

    @app.callback(
        Output("tree", "data"),
        Input("button-clear-data", "n_clicks"),
        prevent_initial_call=True,
    )
    def clear_data(n_clicks):
        return []

    @app.callback(
        Output("tree", "selected"),
        Input("button-clear-selection", "n_clicks"),
        prevent_initial_call=True,
    )
    def clear_selection(n_clicks):
        return []

    @app.callback(
        Output("tree", "checked"),
        Input("button-clear-checked", "n_clicks"),
        prevent_initial_call=True,
    )
    def clear_checked(n_clicks):
        return []

    return app


def test_001tr_tree_data(dash_duo):
    data = [{"label": "i", "value": "1.a.i"}]
    app = tree_app(data=data)
    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal("#output-data", str(data))
    clear_data = dash_duo.find_element("#button-clear-data")
    clear_data.click()
    dash_duo.wait_for_text_to_equal("#output-data", "[]")

    assert dash_duo.get_logs() == []


def test_002tr_tree_expand(dash_duo):
    app = tree_app(expanded=["1", "1.a"])
    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal("#output-expanded", "['1', '1.a']")
    root = dash_duo.find_element("div[data-value='1']")
    child = dash_duo.find_element("div[data-value='1.a']")
    child.click()
    dash_duo.wait_for_text_to_equal("#output-expanded", "['1']")
    root.click()
    dash_duo.wait_for_text_to_equal("#output-expanded", "[]")
    root.click()
    dash_duo.wait_for_text_to_equal("#output-expanded", "['1']")

    expand_all = dash_duo.find_element("#button-expand-all")
    expand_all.click()
    dash_duo.wait_for_text_to_equal(
        "#output-expanded", "['1', '2', '1.a', '1.a.i', '1.a.ii', '1.a.iii', '1.b']"
    )

    assert dash_duo.get_logs() == []


def test_003tr_tree_select(dash_duo):
    app = tree_app(selected=["2"], selectOnClick=True)
    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal("#output-selected", "['2']")
    root = dash_duo.find_element("div[data-value='1']")
    root.click()
    dash_duo.wait_for_text_to_equal("#output-selected", "['1']")

    clear_selection = dash_duo.find_element("#button-clear-selection")
    clear_selection.click()
    dash_duo.wait_for_text_to_equal("#output-selected", "[]")

    assert dash_duo.get_logs() == []


def test_004tr_tree_checked(dash_duo):
    app = tree_app(checked=["2", "1.b", "1.a.ii"], checkboxes=True, expanded="*")
    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal("#output-checked", "['2', '1.b', '1.a.ii']")
    checkbox = dash_duo.find_element("div[data-value='1.a'] div[data-checked]")
    checkbox.click()
    dash_duo.wait_for_text_to_equal(
        "#output-checked", "['2', '1.b', '1.a.ii', '1.a.i', '1.a.iii']"
    )

    clear_checked = dash_duo.find_element("#button-clear-checked")
    clear_checked.click()
    dash_duo.wait_for_text_to_equal("#output-checked", "[]")

    assert dash_duo.get_logs() == []


def test_005tr_tree_icon(dash_duo):
    app = tree_app(iconSide="right", expandedIcon="-", collapsedIcon="+")
    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal("div[data-value='1'] :last-child", "+")
    root = dash_duo.find_element("div[data-value='1']")
    root.click()
    dash_duo.wait_for_text_to_equal("div[data-value='1'] :last-child", "-")

    assert dash_duo.get_logs() == []
