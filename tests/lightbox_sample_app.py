"""Sample app for the Lightbox component.

Demonstrates image slides and video slides.

Run with:  python tests/lightbox_sample_app.py
"""

import dash_mantine_components as dmc
from dash import Dash, _dash_renderer

_dash_renderer._set_react_version("19.2.4")

app = Dash(__name__)

slides = [
    {
        "src": "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
        "alt": "Image 1",
    },
    {
        "src": "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
        "alt": "Image 2",
    },
    {
        "src": "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
        "alt": "Image 3",
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
                opened=True,
            ),
        ],
        size="lg",
        p="lg",
    )
)


if __name__ == "__main__":
    app.run(debug=True)