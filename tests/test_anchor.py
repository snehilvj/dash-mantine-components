from dash import Dash, html, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def test_001an_anchor(dash_duo):
    app = Dash(__name__)

    anchor = dmc.Anchor(
        children='link',
        href='#',
        target='_blank',
        anchorProps={
            'download': 'file.txt'
        },
        id='anchor',
    )
    app.layout = dmc.MantineProvider(html.Div([anchor]))

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#anchor", "link")

    assert dash_duo.get_logs() == []