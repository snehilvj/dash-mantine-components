from dash import Dash
from dash_iconify import DashIconify  # noqa: needs to be imported to enable window.dash_iconify
from selenium.webdriver.common.by import By

import dash_mantine_components as dmc


def test_001au_autocomplete_renderOption(dash_duo):
    app = Dash(__name__, assets_folder="../assets")

    app.layout = dmc.MantineProvider(
        [
            dmc.Title("Autocomplete + renderOption", order=3),
            dmc.Autocomplete(
                id="icon-autocomplete",
                label="Choose alignment",
                placeholder="Type...",
                data=[
                    {"value": "left", "label": "Align Left"},
                    {"value": "center", "label": "Align Center"},
                    {"value": "invalid", "label": "Align Invalid"},
                    {"value": "justify", "label": "Justify"},
                ],
                renderOption={"function": "renderAutocompleteOption"},
            ),
        ]
    )

    dash_duo.start_server(app)

    # Type to trigger the dropdown
    input_el = dash_duo.find_element("#icon-autocomplete")
    input_el.send_keys("A")  # Trigger dropdown

    dash_duo.wait_for_element(".custom-icon-label")

    options = dash_duo.find_elements(".custom-icon-label")

    # check that search is working correctly
    assert len(options) == 3

    for option in options:
        # make sure each option contains a span and svg
        span = option.find_element(by=By.TAG_NAME, value="span")
        svg = option.find_element(by=By.TAG_NAME, value="svg")

        assert span.text.startswith("Align")
        assert svg is not None

    # Check no errors
    assert dash_duo.get_logs() == []
