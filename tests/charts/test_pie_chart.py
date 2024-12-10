from selenium.webdriver import ActionChains
from dash import Dash, Output, Input, _dash_renderer, callback
import dash_mantine_components as dmc
import json

_dash_renderer._set_react_version("18.2.0")

data = [
  { "name": "USA", "value": 400, "color": "indigo.6" },
  { "name": "India", "value": 300, "color": "yellow.6" },
  { "name": "Japan", "value": 100, "color": "teal.6" },
  { "name": "Other", "value": 200, "color": "gray.6" }
]

component = dmc.Group(
    [
        dmc.PieChart(id="figure", data=data),
        dmc.Text(id="clickdata"),
        dmc.Text(id="clickseriesname"),
        dmc.Text(id="hoverdata"),
        dmc.Text(id="hoverseriesname"),
    ]
)


def test_001pi_piechart(dash_duo):
    app = Dash(__name__, external_stylesheets=dmc.styles.ALL)

    app.layout = dmc.MantineProvider(component)

    @callback(
        Output("clickdata", "children"),
        Output("clickseriesname", "children"),
        Output("hoverdata", "children"),
        Output("hoverseriesname", "children"),
        Input("figure", "clickData"),
        Input("figure", "clickSeriesName"),
        Input("figure", "hoverData"),
        Input("figure", "hoverSeriesName"),
    )
    def update(clickdata, cname, hoverdata, hname):
        return json.dumps(clickdata), cname, json.dumps(hoverdata), hname

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#clickdata", "null")

    # Target the bars
    areas = dash_duo.find_elements(
        ".recharts-layer.recharts-pie-sector"
    )


    assert len(areas) > 0, "No areas found in the chart"
    actions = ActionChains(dash_duo.driver)
    actions.move_to_element(areas[0]).click().perform()

    expected_output = (
         '{"name": "USA", "value": 400, "color": "indigo.6"}'
    )

    dash_duo.wait_for_text_to_equal("#clickdata", expected_output)
    dash_duo.wait_for_text_to_equal("#hoverdata", expected_output)
    dash_duo.wait_for_text_to_equal("#hoverseriesname", "USA")
    dash_duo.wait_for_text_to_equal("#clickseriesname", "USA")

    assert dash_duo.get_logs() == []
