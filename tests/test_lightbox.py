from dash import Dash, html, Output, Input, _dash_renderer
import dash_mantine_components as dmc
from selenium.webdriver.common.keys import Keys

_dash_renderer._set_react_version("19.2.4")

images = [
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
]
slides = [{"src": src, "alt": f"Image {i + 1}"} for i, src in enumerate(images)]


def test_001li_lightbox(dash_duo):
    app = Dash(__name__)

    component = html.Div(
        [
            dmc.Button("Open Lightbox", id="lightbox-demo-button"),
            dmc.Lightbox(
                id="lightbox-simple",
                slides=slides,
                withThumbnails=True,
            ),
            dmc.Text(id="out"),
        ]
    )

    app.layout = dmc.MantineProvider(component)

    @app.callback(
        Output("lightbox-simple", "opened"),
        Input("lightbox-demo-button", "n_clicks"),
        prevent_initial_call=True,
    )
    def open_lightbox(_):
        return True

    @app.callback(
        Output("out", "children"),
        Input("lightbox-simple", "opened"),
        Input("lightbox-simple", "currentIndex"),
    )
    def update_output(opened, index):
        return f"opened {opened}, index {index}"

    dash_duo.start_server(app)

    # Lightbox is closed on page load
    dash_duo.wait_for_text_to_equal("#out", "opened None, index None")

    # Open the lightbox
    dash_duo.find_element("#lightbox-demo-button").click()
    dash_duo.wait_for_text_to_equal("#out", "opened True, index None")

    # Navigate to the next slide with the arrow key
    dash_duo.find_element("body").send_keys(Keys.ARROW_RIGHT)
    dash_duo.wait_for_text_to_equal("#out", "opened True, index 1")

    # Close the lightbox with the escape key
    dash_duo.find_element("body").send_keys(Keys.ESCAPE)
    dash_duo.wait_for_text_to_equal("#out", "opened False, index 1")

    assert dash_duo.get_logs() == []


def test_002li_lightbox_custom_slide(dash_duo):
    app = Dash(__name__)

    component = html.Div(
        [
            dmc.Button("Open Lightbox", id="lightbox-demo-button"),
            dmc.Lightbox(
                id="lightbox-custom",
                slides=[
                    {"src": images[0], "alt": "Image 1"},
                    {"type": "custom", "thumbSrc": images[1]},
                ],
                withThumbnails=True,
                children=dmc.Center(
                    dmc.Text("Custom slide content", c="white", id="custom-slide-text"),
                    h="100%",
                ),
            ),
        ]
    )

    app.layout = dmc.MantineProvider(component)

    @app.callback(
        Output("lightbox-custom", "opened"),
        Input("lightbox-demo-button", "n_clicks"),
        prevent_initial_call=True,
    )
    def open_lightbox(_):
        return True

    dash_duo.start_server(app)

    # Open the lightbox
    dash_duo.find_element("#lightbox-demo-button").click()

    # Navigate to the second (custom) slide
    dash_duo.find_element("body").send_keys(Keys.ARROW_RIGHT)

    # The custom slide renders the Dash children
    custom_slide = dash_duo.find_element("#custom-slide-text")
    assert custom_slide.text == "Custom slide content"

    assert dash_duo.get_logs() == []


def test_003li_lightbox_labels_functions_as_props(dash_duo):
    app = Dash(__name__)

    component = html.Div(
        [
            dmc.Button("Open Lightbox", id="lightbox-demo-button"),
            dmc.Lightbox(
                id="lightbox-labels",
                slides=slides,
                withThumbnails=True,
                labels={
                    # functions defined in tests/assets/dashMantineFunctions.js
                    "slideLabel": {"function": "lightboxSlideLabel"},
                    "thumbnailLabel": {"function": "lightboxThumbnailLabel"},
                    "slidesLabel": "Slides",
                },
            ),
        ]
    )

    app.layout = dmc.MantineProvider(component)

    @app.callback(
        Output("lightbox-labels", "opened"),
        Input("lightbox-demo-button", "n_clicks"),
        prevent_initial_call=True,
    )
    def open_lightbox(_):
        return True

    dash_duo.start_server(app)

    # Open the lightbox
    dash_duo.find_element("#lightbox-demo-button").click()
    dash_duo.wait_for_element(".mantine-Lightbox-slide")

    # The slideLabel and thumbnailLabel functions are resolved and called
    # with the 1-based slide index and the total number of slides
    slide_label = dash_duo.driver.execute_script(
        "return document.querySelectorAll('.mantine-Lightbox-slide')[1].getAttribute('aria-label')"
    )
    assert slide_label == "Slide 2 of 3"

    thumbnail_label = dash_duo.driver.execute_script(
        "return document.querySelectorAll('.mantine-Lightbox-thumbnail')[1].getAttribute('aria-label')"
    )
    assert thumbnail_label == "Go to slide 2 of 3"

    assert dash_duo.get_logs() == []


def test_004li_lightbox_custom_slides_children(dash_duo):
    app = Dash(__name__)

    component = html.Div(
        [
            dmc.Button("Open Lightbox", id="lightbox-demo-button"),
            dmc.Lightbox(
                id="lightbox-custom-slides",
                slides=[
                    {"src": images[0], "alt": "Image 1"},
                    {
                        "type": "custom",
                        "thumbSrc": images[1],
                        "caption": "First custom slide",
                    },
                    {
                        "type": "custom",
                        "thumbSrc": images[2],
                        "caption": "Second custom slide",
                    },
                ],
                withThumbnails=True,
                # One child per custom slide: each child is rendered in its
                # corresponding custom slide, in order
                children=[
                    dmc.Center(
                        dmc.Text("First custom", c="white", id="custom-one"),
                        h="100%",
                    ),
                    dmc.Center(
                        dmc.Text("Second custom", c="white", id="custom-two"),
                        h="100%",
                    ),
                ],
            ),
        ]
    )

    app.layout = dmc.MantineProvider(component)

    @app.callback(
        Output("lightbox-custom-slides", "opened"),
        Input("lightbox-demo-button", "n_clicks"),
        prevent_initial_call=True,
    )
    def open_lightbox(_):
        return True

    dash_duo.start_server(app)

    # Open the lightbox
    dash_duo.find_element("#lightbox-demo-button").click()

    # Navigate to the second (custom) slide: renders the first child
    dash_duo.find_element("body").send_keys(Keys.ARROW_RIGHT)
    dash_duo.wait_for_text_to_equal("#custom-one", "First custom")

    # Navigate to the third slide: renders the second child
    dash_duo.find_element("body").send_keys(Keys.ARROW_RIGHT)
    dash_duo.wait_for_text_to_equal("#custom-two", "Second custom")

    assert dash_duo.get_logs() == []