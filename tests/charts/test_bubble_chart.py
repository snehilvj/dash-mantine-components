from selenium.webdriver import ActionChains
from dash import Dash, Output, Input, _dash_renderer, callback
import dash_mantine_components as dmc
import json

_dash_renderer._set_react_version("18.2.0")

data = [
    {"hour": "08:00", "index": 1, "value": 150},
    {"hour": "10:00", "index": 1, "value": 166},
    {"hour": "12:00", "index": 1, "value": 170},
    {"hour": "14:00", "index": 1, "value": 150},
]

component = dmc.Group(
    [
        dmc.BubbleChart(
            id="figure",
            gridColor="gray.5",
            textColor="gray.9",
            h=60,
            data=data,
            range=[16, 225],
            label="Sales/hour",
            color="lime.6",
            dataKey={"x": "hour", "y": "index", "z": "value"}
        ),

        dmc.Text(id="clickdata"),
        dmc.Text(id="hoverdata"),
    ]
)


def test_001bu_bubblechart(dash_duo):
    app = Dash(__name__, external_stylesheets=dmc.styles.ALL)

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

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#clickdata", "null")

    # Target the bars
    areas = dash_duo.find_elements(
        ".recharts-layer.recharts-scatter-symbol"
    )


    assert len(areas) > 0, "No areas found in the chart"
    actions = ActionChains(dash_duo.driver)
    actions.move_to_element(areas[0]).click().perform()

    expected_output = (
         '{"hour": "08:00", "index": 1, "value": 150}'
    )

    dash_duo.wait_for_text_to_equal("#clickdata", expected_output)
    dash_duo.wait_for_text_to_equal("#hoverdata", expected_output)

    assert dash_duo.get_logs() == []
