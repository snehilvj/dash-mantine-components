"""Sample app for the Lightbox component.

Demonstrates image slides, video slides and custom slides, following the
Mantine custom slides example: https://mantine.dev/x/lightbox/#custom-slides

Run with:  python tests/lightbox_sample_app.py
"""

import dash_mantine_components as dmc
from dash import Dash, html, _dash_renderer

_dash_renderer._set_react_version("19.2.4")

app = Dash(__name__)

slides = [
    {
        "src": "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
        "alt": "Image 1",
    },
    {
        "type": "custom",
        "thumbSrc": "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
        "caption": "Custom slide with Dash children",
    },
    {
        "type": "custom",
        "thumbSrc": "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
        "caption": "Embedded YouTube video",
    },
    {
        "src": "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
        "alt": "Image 2",
    },
    {
        "type": "video",
        "src": "https://www.w3schools.com/html/mov_bbb.mp4",
        "poster": "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
        "caption": "Video slide",
        "autoPlay": True,
    },
]

app.layout = dmc.MantineProvider(
    dmc.Container(
        [
            dmc.Title("Lightbox sample app", order=2, mb="xs"),
            dmc.Text("Open the lightbox to see the slides.", c="dimmed", mb="lg"),
            dmc.Button("Open Lightbox", id="open-lightbox"),
            dmc.Lightbox(
                id="lightbox",
                slides=slides,
                withThumbnails=True,
                withZoom=True,
                # Each child is rendered in its corresponding custom slide
                # (one-to-one, in order).
                children=[
                    dmc.Center(
                        dmc.Text("This is a custom slide", c="white", size="xl", fw=700),
                        h="100%",
                    ),
                    html.Iframe(
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ",
                        title="YouTube video",
                        allow="fullscreen",
                        style={
                            "width": "80vw",
                            "height": "45vw",
                            "maxHeight": "70vh",
                            "border": "none",
                            "borderRadius": 8,
                        },
                    ),
                ],
                opened=True,
            ),
        ],
        size="lg",
        p="lg",
    )
)


if __name__ == "__main__":
    app.run(debug=True)