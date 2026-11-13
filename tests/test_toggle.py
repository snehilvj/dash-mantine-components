import dash_mantine_components as dmc
from dash import Dash, Input, Output, _dash_renderer, callback

_dash_renderer._set_react_version("19.2.4")


def test_001tg_toggle(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        [
            dmc.Toggle("Bold", id="toggle", autoWidth=True),
            dmc.Toggle("Preset", id="toggle-active", active=True, variant="light"),
            dmc.Toggle("Off", id="toggle-disabled", disabled=True),
            dmc.Text(id="out"),
        ]
    )

    @callback(Output("out", "children"), Input("toggle", "active"))
    def show(active):
        return f"active: {active}"

    dash_duo.start_server(app)
    # like Switch.checked, the prop is None until the user interacts or Python sets it
    dash_duo.wait_for_text_to_equal("#out", "active: None")

    toggle = dash_duo.find_element("#toggle")
    assert "mantine-Toggle-root" in toggle.get_attribute("class")
    assert toggle.get_attribute("aria-pressed") == "false"
    assert toggle.get_attribute("data-active") is None
    assert toggle.get_attribute("data-auto-width") is not None

    # click turns it on and the new state reaches the callback
    toggle.click()
    dash_duo.wait_for_text_to_equal("#out", "active: True")
    assert toggle.get_attribute("aria-pressed") == "true"
    assert toggle.get_attribute("data-active") is not None

    # click again turns it off
    toggle.click()
    dash_duo.wait_for_text_to_equal("#out", "active: False")
    assert toggle.get_attribute("aria-pressed") == "false"

    # initial active=True and variant are respected
    preset = dash_duo.find_element("#toggle-active")
    assert preset.get_attribute("aria-pressed") == "true"
    assert preset.get_attribute("data-variant") == "light"

    # disabled toggle ignores clicks
    disabled = dash_duo.find_element("#toggle-disabled")
    assert disabled.get_attribute("disabled") is not None
    assert disabled.get_attribute("aria-pressed") == "false"

    assert dash_duo.get_logs() == []
