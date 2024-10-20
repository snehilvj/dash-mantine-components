from dash import Dash, html, Output, Input, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")

def test_001po_popover(dash_duo):
    app = Dash(__name__, external_stylesheets=dmc.styles.ALL)

    component = dmc.Carousel(
        [
            dmc.CarouselSlide(dmc.Center("Slide-0", bg="blue", c="white", p=60)),
            dmc.CarouselSlide(dmc.Center("Slide-1", bg="blue", c="white", p=60)),
            dmc.CarouselSlide(dmc.Center("Slide-2", bg="blue", c="white", p=60)),
        ],
        id="carousel",
        autoplay={"delay": 500, "stopOnMouseEnter": True, "stopOnLastSnap": True},
    )

    app.layout = dmc.MantineProvider(
        html.Div([
            component,
            html.Div(id='output')
        ])
    )

    @app.callback(
        Output('output', 'children'),
        Input('carousel', 'active')
    )
    def update_output(n):
        return f"slide index {n}"

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#output", "slide index 0")
    # autoplay is set to show 3 slides
    dash_duo.wait_for_text_to_equal("#output", "slide index 1")
    dash_duo.wait_for_text_to_equal("#output", "slide index 2")

    assert dash_duo.get_logs() == []
