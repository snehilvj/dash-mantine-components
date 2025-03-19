from dash import Dash, _dash_renderer, dcc
from selenium.webdriver.common.by import By

import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def _get_effective_background_color(element):
    current_element = element
    while current_element:
        background_color = current_element.value_of_css_property("background-color")
        if background_color and not _is_transparent(background_color):
            return background_color
        parent = current_element.find_element(By.XPATH, "./..")
        if current_element == parent:
            break
        current_element = parent
    return None


def _is_transparent(color):
    return color in ("rgba(0, 0, 0, 0)", "transparent", "")


def test_001ts_typography_styles_provider(dash_duo):
    app = Dash(__name__)
    content = "<code>Hello world!</code>"

    app.layout = dmc.MantineProvider(
        [
            dcc.Markdown(content, dangerously_allow_html=True, id="default"),
            dmc.TypographyStylesProvider(
                dcc.Markdown(content, dangerously_allow_html=True, id="styled")
            ),
        ],
    )

    dash_duo.start_server(app)

    # The default code element should have a white background color.
    code_default = dash_duo.find_element("#default").find_element_by_tag_name("code")
    assert _get_effective_background_color(code_default) == "rgba(255, 255, 255, 1)"
    # The mantine styled code element should have a light gray background color.
    code_styled = dash_duo.find_element("#styled").find_element_by_tag_name("code")
    assert _get_effective_background_color(code_styled) == "rgba(248, 249, 250, 1)"

    assert dash_duo.get_logs() == []
