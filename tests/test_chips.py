from dash import Dash, html, Input, Output
import dash_mantine_components as dmc


def test_chips_single(dash_duo):
    app = Dash()

    app.layout = html.Div(
        [
            dmc.Chips(
                options=[{'label': 'test', 'value': 'test'}],
                id="chips",
            ),
            html.Div(id="output"),
        ]
    )

    @app.callback(
        Output('output', 'children'),
        Input('chips', 'value')
    )
    def show_chip_selection(value):
        return value

    dash_duo.start_server(app)
    assert dash_duo.wait_for_text_to_equal("#output", "None")
    dash_duo.multiple_click("#chips-0", 1)
    dash_duo.wait_for_text_to_equal("#output", 'test')


def test_chips_multiple(dash_duo):
    app = Dash()

    app.layout = html.Div(
        [
            dmc.Chips(
                options=[
                    {'label': 'test', 'value': 'test'},
                    {'label': 'test2', 'value': 'test2'},
                ],
                multi=True,
                id="chips",
            ),
            html.Div(id="output"),
        ]
    )

    @app.callback(
        Output('output', 'children'),
        Input('chips', 'value')
    )
    def show_chip_selection(value):
        return value

    dash_duo.start_server(app)
    assert dash_duo.wait_for_text_to_equal("#output", "None")
    dash_duo.multiple_click("#chips-0", 1)
    dash_duo.multiple_click("#chips-1", 1)
    dash_duo.wait_for_text_to_equal("#output", '["test", "test2"]')