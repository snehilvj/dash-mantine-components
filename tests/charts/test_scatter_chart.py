from selenium.webdriver import ActionChains
from dash import Dash, Output, Input, _dash_renderer, callback
import dash_mantine_components as dmc
import json

_dash_renderer._set_react_version("18.2.0")

data = [
    {
        "color": "blue.5",
        "name": "Group 1",
        "data": [
            {"age": 25, "BMI": 20},
            {"age": 30, "BMI": 22},
            {"age": 35, "BMI": 18},
            {"age": 40, "BMI": 25},
        ]
    }
]

component = dmc.Group(
    [
        dmc.ScatterChart(
            id="figure",
            h=300,
            data=data,
            dataKey={"x": "age", "y": "BMI"},
            xAxisLabel="Age",
            yAxisLabel="BMI",
        ),

        dmc.Text(id="clickdata"),
        dmc.Text(id="clickseriesname"),
        dmc.Text(id="hoverdata"),
        dmc.Text(id="hoverseriesname"),
    ]
)


def test_001sc_scatterchart(dash_duo):
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
        ".recharts-layer.recharts-scatter-symbol"
    )


    assert len(areas) > 0, "No areas found in the chart"
    actions = ActionChains(dash_duo.driver)
    actions.move_to_element(areas[0]).click().perform()

    expected_output = (
         '{"age": 25, "BMI": 20, "name": "Group 1"}'
    )

    dash_duo.wait_for_text_to_equal("#clickdata", expected_output)
    dash_duo.wait_for_text_to_equal("#hoverdata", expected_output)
    dash_duo.wait_for_text_to_equal("#hoverseriesname", "Group 1")
    dash_duo.wait_for_text_to_equal("#clickseriesname", "Group 1")

    assert dash_duo.get_logs() == []
