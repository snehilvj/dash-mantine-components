"""Sample app for the Lightbox component.

Demonstrates image slides and video slides.

Run with:  python tests/lightbox_sample_app.py
"""

import dash_mantine_components as dmc
from dash import Dash, _dash_renderer

_dash_renderer._set_react_version("19.2.4")

app = Dash(__name__)

import dash_mantine_components as dmc

slides = [
    {
        "src": "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
    },
    {
        "type": "custom",
        "render": {"function": "renderCustomSlide"},
        "renderThumb": {"function": "renderCustomThumb"},
        "caption": "Custom slide with render function",
    },
    {
        "type": "custom",
        "render": {"function": "renderYouTube"},
        "renderThumb": {"function": "renderYouTubeThumb"},
        "caption": "Embedded YouTube video",
    },
    {
        "src": "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"
    },
]

dmc.Lightbox(
    id="lightbox",
    opened=False,
    slides=slides,
    currentIndex=0,
    withThumbnails=True,
)

dmc.Button(
    "Open lightbox with custom slides",
    id="open-lightbox",
)

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