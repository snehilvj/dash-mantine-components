from dash import Dash, html
import dash_mantine_components as dmc


def test_001hi_highlight_component(dash_duo):
    app = Dash(__name__)


    app.layout = dmc.MantineProvider(
        dmc.Highlight(
            "You can change styles of highlighted parts",
            highlight=["highlighted"],
            highlightStyles={
                "backgroundColor": "blue",
                "color": "white",
            },
            id="highlight-text"
        )
    )

    dash_duo.start_server(app)

    # Wait for app to load
    dash_duo.wait_for_text_to_equal("#highlight-text", "You can change styles of highlighted parts")

    # Find the highlighted element within the dmc.Highlight component
    highlight_element = dash_duo.find_element("#highlight-text mark")

    # Check if the "highlighted" text has a blue background and white text
    assert highlight_element.value_of_css_property("background-color") == "rgba(0, 0, 255, 1)"  # Blue background
    assert highlight_element.value_of_css_property("color") == "rgb(255, 255, 255)"  # White text

    assert dash_duo.get_logs() == []
