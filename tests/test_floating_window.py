import json

import pytest
from dash import Dash, Input, Output, _dash_renderer, html
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait

import dash_mantine_components as dmc

_dash_renderer._set_react_version("19.2.4")


def report_window_state(app):
    @app.callback(
        Output("state", "children"),
        Input("window", "currentPosition"),
        Input("window", "currentSize"),
        Input("window", "dragging"),
        Input("window", "resizing"),
    )
    def report(position, size, dragging, resizing):
        return json.dumps(
            dict(position=position, size=size, dragging=dragging, resizing=resizing)
        )


def window_state(dash_duo):
    return json.loads(dash_duo.find_element("#state").text)


def test_001fw_drag_and_programmatic_position(dash_duo):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        [
            dmc.FloatingWindow(
                dmc.Text("Drag me", id="header"),
                id="window",
                initialPosition={"top": 100, "left": 100},
                w=240,
                h=140,
                withBorder=True,
                shadow="md",
            ),
            dmc.Button("Move", id="move"),
            dmc.Text(id="state"),
        ]
    )
    report_window_state(app)

    @app.callback(
        Output("window", "position"),
        Input("move", "n_clicks"),
        prevent_initial_call=True,
    )
    def move(n_clicks):
        return {"right": 30, "bottom": 40}

    dash_duo.start_server(app)
    window = dash_duo.wait_for_element("#window")
    dash_duo.wait_for_contains_text("#state", '"position"')
    assert window.rect["x"] == 100
    assert window.rect["y"] == 100
    assert window.value_of_css_property("position") == "fixed"
    assert window.value_of_css_property("z-index") == "400"
    assert window.value_of_css_property("border-top-width") == "1px"
    assert window.value_of_css_property("box-shadow") != "none"
    assert dash_duo.driver.execute_script(
        "return arguments[0].closest('[data-portal]') !== null", window
    )
    ActionChains(dash_duo.driver).click_and_hold(
        dash_duo.find_element("#header")
    ).move_by_offset(60, 40).perform()
    WebDriverWait(dash_duo.driver, 3).until(
        lambda _: window_state(dash_duo)["dragging"] is True
    )
    assert window_state(dash_duo)["position"] is None
    assert window.rect["x"] == 160
    assert window.rect["y"] == 140
    ActionChains(dash_duo.driver).release().perform()
    WebDriverWait(dash_duo.driver, 3).until(
        lambda _: window_state(dash_duo)["position"] == {"x": 160, "y": 140}
    )
    assert window_state(dash_duo)["dragging"] is False

    dash_duo.find_element("#move").click()
    viewport = dash_duo.driver.execute_script(
        "return {width: innerWidth, height: innerHeight}"
    )
    expected = {"x": viewport["width"] - 270, "y": viewport["height"] - 180}
    WebDriverWait(dash_duo.driver, 3).until(
        lambda _: window_state(dash_duo)["position"] == expected
    )
    assert window.rect["x"] == expected["x"]
    assert window.rect["y"] == expected["y"]

    ActionChains(dash_duo.driver).drag_and_drop_by_offset(
        dash_duo.find_element("#header"), -50, -30
    ).perform()
    WebDriverWait(dash_duo.driver, 3).until(
        lambda _: window_state(dash_duo)["position"]
        == {"x": expected["x"] - 50, "y": expected["y"] - 30}
    )
    assert dash_duo.get_logs() == []


@pytest.mark.parametrize("axis", ["x", "y"])
def test_002fw_axis_handles_and_enabled(dash_duo, axis):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        [
            dmc.FloatingWindow(
                [
                    dmc.Box(
                        [
                            dmc.Text("Drag", id="header"),
                            dmc.Button("Excluded", id="excluded", className="no-drag"),
                        ],
                        className="handle",
                    ),
                    dmc.Text("Body", id="body"),
                ],
                id="window",
                initialPosition={"left": 100, "top": 100},
                dragHandleSelector=".handle",
                excludeDragHandleSelector=".no-drag",
                axis=axis,
                w=240,
                h=160,
            ),
            dmc.Button("Disable", id="disable"),
            dmc.Text(id="state"),
        ]
    )
    report_window_state(app)

    @app.callback(
        Output("window", "enabled"),
        Output("disable", "children"),
        Input("disable", "n_clicks"),
        prevent_initial_call=True,
    )
    def disable(n_clicks):
        return False, "Disabled"

    dash_duo.start_server(app)
    window = dash_duo.wait_for_element("#window")
    dash_duo.wait_for_contains_text("#state", '"position"')
    for selector in ("#body", "#excluded"):
        ActionChains(dash_duo.driver).drag_and_drop_by_offset(
            dash_duo.find_element(selector), 40, 30
        ).perform()
        assert window.rect["x"] == 100
        assert window.rect["y"] == 100
    ActionChains(dash_duo.driver).drag_and_drop_by_offset(
        dash_duo.find_element("#header"), 40, 30
    ).perform()
    expected = {"x": 140 if axis == "x" else 100, "y": 130 if axis == "y" else 100}
    WebDriverWait(dash_duo.driver, 3).until(
        lambda _: window_state(dash_duo)["position"] == expected
    )
    dash_duo.find_element("#disable").click()
    dash_duo.wait_for_text_to_equal("#disable", "Disabled")
    ActionChains(dash_duo.driver).drag_and_drop_by_offset(
        dash_duo.find_element("#header"), 40, 30
    ).perform()
    assert window.rect["x"] == expected["x"]
    assert window.rect["y"] == expected["y"]
    assert dash_duo.get_logs() == []


def test_003fw_viewport_constraints_and_initial_position(dash_duo):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        [
            dmc.FloatingWindow(
                [
                    "Constrained",
                    dmc.FloatingWindowResizeHandle("Resize", id="constrained-handle"),
                ],
                id="constrained",
                position={"left": -100, "top": -100},
                constrainOffset=20,
                w=120,
                h=80,
                dimensions={"maxWidth": 5000, "maxHeight": 5000},
            ),
            dmc.FloatingWindow(
                "Unconstrained",
                id="free",
                initialPosition={"left": -50, "top": 150},
                constrainToViewport=False,
                w=120,
                h=80,
            ),
        ]
    )
    dash_duo.start_server(app)
    constrained = dash_duo.wait_for_element("#constrained")
    assert constrained.rect["x"] == 20
    assert constrained.rect["y"] == 20
    dash_duo.find_element("#constrained-handle").send_keys(Keys.END)
    viewport = dash_duo.driver.execute_script(
        "return {width: innerWidth, height: innerHeight}"
    )
    assert constrained.rect["width"] == viewport["width"] - 40
    assert constrained.rect["height"] == viewport["height"] - 40
    assert dash_duo.find_element("#free").rect["x"] == -50
    ActionChains(dash_duo.driver).drag_and_drop_by_offset(
        constrained, -40, -30
    ).perform()
    assert constrained.rect["x"] == 20
    assert constrained.rect["y"] == 20
    assert dash_duo.get_logs() == []


def test_004fw_resize_pointer_keyboard_and_limits(dash_duo):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        [
            dmc.FloatingWindow(
                [
                    dmc.Text("Resize me"),
                    dmc.FloatingWindowResizeHandle(
                        "Resize",
                        id="handle",
                        pos="absolute",
                        right=0,
                        bottom=0,
                        w=60,
                        h=30,
                        **{"aria-label": "Resize panel"},
                    ),
                ],
                id="window",
                initialPosition={"left": 100, "top": 100},
                constrainToViewport=False,
                dimensions={
                    "initialWidth": 240,
                    "initialHeight": 160,
                    "minWidth": 200,
                    "minHeight": 120,
                    "maxWidth": 400,
                    "maxHeight": 300,
                },
            ),
            dmc.Text(id="state"),
        ]
    )
    report_window_state(app)
    dash_duo.start_server(app)
    window = dash_duo.wait_for_element("#window")
    dash_duo.wait_for_contains_text("#state", '"size"')
    handle = dash_duo.find_element("#handle")
    assert handle.get_attribute("role") == "separator"
    assert handle.get_attribute("aria-label") == "Resize panel"
    assert handle.get_attribute("aria-valuenow") == "240"
    assert handle.get_attribute("aria-valuemin") == "200"
    assert handle.get_attribute("aria-valuemax") == "400"
    assert window.rect["width"] == 240
    assert window.rect["height"] == 160
    handle.send_keys(Keys.ARROW_RIGHT, Keys.ARROW_DOWN)
    WebDriverWait(dash_duo.driver, 3).until(
        lambda _: window_state(dash_duo)["size"] == {"width": 250, "height": 170}
    )
    assert handle.get_attribute("aria-valuenow") == "250"
    handle.send_keys(Keys.HOME)
    WebDriverWait(dash_duo.driver, 3).until(
        lambda _: window_state(dash_duo)["size"] == {"width": 200, "height": 120}
    )
    ActionChains(dash_duo.driver).click_and_hold(handle).move_by_offset(
        50, 30
    ).perform()
    WebDriverWait(dash_duo.driver, 3).until(
        lambda _: window_state(dash_duo)["resizing"] is True
    )
    assert window_state(dash_duo)["size"] == {"width": 200, "height": 120}
    assert window.rect["width"] == 250
    assert window.rect["height"] == 150
    assert window.rect["x"] == 100
    assert window.rect["y"] == 100
    ActionChains(dash_duo.driver).release().perform()
    WebDriverWait(dash_duo.driver, 3).until(
        lambda _: window_state(dash_duo)["size"] == {"width": 250, "height": 150}
    )
    assert window_state(dash_duo)["resizing"] is False
    assert window_state(dash_duo)["dragging"] is None
    handle.send_keys(Keys.END)
    WebDriverWait(dash_duo.driver, 3).until(
        lambda _: window_state(dash_duo)["size"] == {"width": 400, "height": 300}
    )
    handle.send_keys(Keys.ARROW_RIGHT, Keys.ARROW_DOWN)
    assert window.rect["width"] == 400
    assert window.rect["height"] == 300
    assert dash_duo.get_logs() == []


def test_005fw_portal_and_styles(dash_duo):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        [
            html.Div(id="portal-target"),
            html.Div(
                dmc.FloatingWindow(
                    dmc.Text("Inline", id="content"),
                    id="inline",
                    withinPortal=False,
                    initialPosition={"top": 100, "left": 100},
                    w=200,
                    h=100,
                    p=12,
                    zIndex=450,
                    classNames={"root": "custom-window"},
                    styles={"root": {"backgroundColor": "rgb(255, 0, 0)"}},
                    **{"data-testid": "inline-window"},
                ),
                id="container",
            ),
            dmc.FloatingWindow(
                "Portal",
                id="portal",
                initialPosition={"top": 250, "left": 100},
                portalProps={"target": "#portal-target", "reuseTargetNode": False},
                w=200,
                h=100,
            ),
            dmc.Button("Update content", id="update"),
        ]
    )

    @app.callback(
        Output("content", "children"),
        Input("update", "n_clicks"),
        prevent_initial_call=True,
    )
    def update(n_clicks):
        return "Updated"

    dash_duo.start_server(app)
    inline = dash_duo.wait_for_element("#container #inline")
    dash_duo.wait_for_element("#portal-target #portal")
    assert "custom-window" in inline.get_attribute("class").split()
    assert inline.value_of_css_property("background-color") == "rgba(255, 0, 0, 1)"
    assert inline.value_of_css_property("padding-top") == "12px"
    assert inline.value_of_css_property("z-index") == "450"
    assert inline.get_attribute("data-testid") == "inline-window"
    dash_duo.find_element("#update").click()
    dash_duo.wait_for_text_to_equal("#content", "Updated")
    assert dash_duo.get_logs() == []
