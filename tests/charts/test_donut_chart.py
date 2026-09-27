from selenium.webdriver import ActionChains
from dash import Dash, Output, Input, _dash_renderer, callback
import dash_mantine_components as dmc
import json

_dash_renderer._set_react_version("19.2.4")

data = [
    {"name": "USA", "value": 400, "color": "indigo.6"},
    {"name": "India", "value": 300, "color": "yellow.6"},
    {"name": "Japan", "value": 100, "color": "teal.6"},
    {"name": "Other", "value": 200, "color": "gray.6"},
]

component = dmc.Group(
    [
        dmc.DonutChart(id="figure", data=data),
        dmc.Text(id="clickdata"),
        dmc.Text(id="clickseriesname"),
        dmc.Text(id="hoverdata"),
        dmc.Text(id="hoverseriesname"),
    ]
)


def test_001_donutchart(dash_duo):
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

    dash_duo.wait_for_text_to_equal("#clickdata", "null")


    # 2. Target the first slice path vector
    slice_selector = "#figure .recharts-pie-sector:nth-of-type(1) path"
    target_slice = dash_duo.find_element(slice_selector)

    dash_duo.driver.execute_script("arguments[0].dispatchEvent(new MouseEvent('click', {bubbles: true}));",
                                   target_slice)

    clickdata = json.loads(dash_duo.find_element("#clickdata").text)
    assert clickdata["name"] == "USA"
    assert clickdata["value"] == 400
    assert clickdata["color"] == "indigo.6"

    dash_duo.wait_for_text_to_equal("#clickseriesname", "USA")

    assert dash_duo.get_logs() == []
