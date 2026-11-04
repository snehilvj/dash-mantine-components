import dash_mantine_components as dmc
from dash import Dash, Output, Input, State, callback, html, ALL, ctx
from dash import _dash_renderer

_dash_renderer._set_react_version("19.2.4")

app = Dash()

images = [
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
]

slides = [
    {
        "src": images[0],
        "alt": "Mountain lake at sunrise",
        "caption": "Mountain lake at sunrise",
    },
    {
        "type": "video",
        "src": "https://www.w3schools.com/html/mov_bbb.mp4",
        "poster": images[1],
        "caption": "Video slide",
        "autoPlay": True,
    },
    {"src": images[2], "alt": "Coast at sunset", "caption": "Coast at sunset"},
    {"src": images[3], "alt": "Forest in the fog", "caption": "Forest in the fog"},
    {"src": images[4], "alt": "City skyline at night", "caption": "City skyline at night"},
]

component = html.Div(
    [
        dmc.Title("Lightbox", order=3),
        dmc.Text("Click an image to open the full-screen lightbox.", c="dimmed", mb="md"),
        dmc.SimpleGrid(
            [
                html.Div(
                    dmc.Image(src=src, radius="md"),
                    id={"type": "gallery-image", "index": i},
                    style={"cursor": "pointer"},
                )
                for i, src in enumerate(images)
            ],
            cols=3,
        ),
        dmc.Lightbox(
            id="lightbox",
            slides=slides,
            withZoom=True,
            withThumbnails=True,
            withFullscreen=True,
            withDownload=True,
        ),
        dmc.Text(id="lightbox-out", mt="md", c="dimmed"),
    ]
)


app.layout = dmc.MantineProvider(component)


@callback(
    Output("lightbox", "opened"),
    Output("lightbox", "currentIndex"),
    Input({"type": "gallery-image", "index": ALL}, "n_clicks"),
    State("lightbox", "opened"),
    prevent_initial_call=True,
)
def open_lightbox(_, opened):
    index = ctx.triggered_id["index"]
    return True, index


@callback(
    Output("lightbox-out", "children"),
    Input("lightbox", "opened"),
    Input("lightbox", "currentIndex"),
)
def update_out(opened, index):
    if opened:
        return f"Slide {index + 1} van {len(slides)}"
    return "Lightbox is gesloten"


if __name__ == "__main__":
    app.run(debug=True)