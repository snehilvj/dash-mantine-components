from selenium.webdriver import ActionChains
from dash import Dash, Output, Input, callback
import dash_mantine_components as dmc
import json

data = {
    "2025-02-14": 2,
    "2025-02-11": 3,
    "2025-02-01": 4,
}

component = dmc.Group(
    [
        dmc.Heatmap(
            id="figure",
            data=data,
            startDate="2025-02-01",
            endDate="2025-02-30",
        ),
        dmc.Text(id="clickdata"),
        dmc.Text(id="hoverdata"),
    ]
)


def test_heatmap_click_hover(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(component)

    @callback(
        Output("clickdata", "children"),
        Output("hoverdata", "children"),
        Input("figure", "clickData"),
        Input("figure", "hoverData"),
    )
    def update(clickdata, hoverdata):
        return json.dumps(clickdata), json.dumps(hoverdata)

    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal("#clickdata", "null")

    # find heatmap cells
    cells = dash_duo.find_elements(
        ".mantine-Heatmap-rect:not([data-empty='true'])"
    )

    assert len(cells) > 0, "No heatmap cells found"

    actions = ActionChains(dash_duo.driver)

    # hover data
    actions.move_to_element(cells[0]).perform()

    dash_duo.wait_for_text_to_equal("#hoverdata", '{"2025-02-01": 4}')

    hover_value = json.loads(dash_duo.find_element("#hoverdata").text)
    assert isinstance(hover_value, dict)

    # click data
    actions.move_to_element(cells[0]).click().perform()

    dash_duo.wait_for_text_to_equal("#clickdata", '{"2025-02-01": 4}')

    click_value = json.loads(dash_duo.find_element("#clickdata").text)
    assert isinstance(click_value, dict)

    assert dash_duo.get_logs() == []