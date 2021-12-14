from dash import Dash, html
import dash_mantine_components as dmc


def test_affix_simple(dash_duo):
    app = Dash()

    app.layout = html.Div(
        [
            dmc.Affix(
                dmc.Button("I'm in top left!"),
                position={"top": 20, "left": 20},
                id="affix",
            )
        ]
    )

    dash_duo.start_server(app)

    dash_duo.wait_for_style_to_equal("#affix", "position", "fixed")
    dash_duo.wait_for_style_to_equal("#affix", "top", "20px")
