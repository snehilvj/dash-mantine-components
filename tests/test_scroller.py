import time

import dash_mantine_components as dmc
from dash import Dash, _dash_renderer

_dash_renderer._set_react_version("19.2.4")


def _container_scroll_left(dash_duo):
    return dash_duo.driver.execute_script(
        "return document.querySelector('.mantine-Scroller-container').scrollLeft;"
    )


def test_001scr_scroller(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        dmc.Scroller(
            id="scroller",
            w=300,
            scrollAmount=150,
            children=dmc.Group(
                [dmc.Box(f"Item {i}", id=f"item-{i}") for i in range(20)],
                wrap="nowrap",
                w=2000,
            ),
        )
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#scroller")

    # children render
    assert dash_duo.find_element("#item-0").text == "Item 0"

    # content overflows, so the end control is shown and the start control hidden
    end_control = dash_duo.find_element("button[data-position='end']")
    assert end_control.get_attribute("data-hidden") is None
    start_control = dash_duo.find_element("button[data-position='start']")
    assert start_control.get_attribute("data-hidden") == "true"

    # clicking the end control scrolls the container to the right
    assert _container_scroll_left(dash_duo) == 0
    end_control.click()
    time.sleep(0.5)
    assert _container_scroll_left(dash_duo) > 0

    # once scrolled, the start control becomes visible
    assert (
        dash_duo.find_element("button[data-position='start']").get_attribute(
            "data-hidden"
        )
        is None
    )

    assert dash_duo.get_logs() == []
