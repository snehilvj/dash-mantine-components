import dash_mantine_components as dmc
from dash import Dash, _dash_renderer

_dash_renderer._set_react_version("19.2.4")


def test_001mq_marquee(dash_duo):
    app = Dash(__name__)

    items = [dmc.Badge(name) for name in ["Alpha", "Beta", "Gamma"]]

    app.layout = dmc.MantineProvider(
        [
            dmc.Marquee(items, id="marquee-default"),
            dmc.Marquee(
                items,
                id="marquee-custom",
                orientation="vertical",
                reverse=True,
                pauseOnHover=True,
                fadeEdges=False,
                repeat=2,
                h=200,
            ),
        ]
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#marquee-default")

    default = dash_duo.find_element("#marquee-default")
    assert "mantine-Marquee-root" in default.get_attribute("class")
    assert default.get_attribute("data-orientation") == "horizontal"
    assert default.get_attribute("data-reverse") is None
    assert default.get_attribute("data-pause-on-hover") is None
    assert default.get_attribute("data-fade-edges") is not None
    # children are repeated `repeat` times (default 4) for seamless scrolling
    assert len(dash_duo.find_elements("#marquee-default .mantine-Marquee-group")) == 4
    assert len(dash_duo.find_elements("#marquee-default .mantine-Badge-root")) == 12

    custom = dash_duo.find_element("#marquee-custom")
    assert custom.get_attribute("data-orientation") == "vertical"
    assert custom.get_attribute("data-reverse") is not None
    assert custom.get_attribute("data-pause-on-hover") is not None
    assert custom.get_attribute("data-fade-edges") is None
    assert len(dash_duo.find_elements("#marquee-custom .mantine-Marquee-group")) == 2

    assert dash_duo.get_logs() == []
