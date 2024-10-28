from selenium.webdriver import ActionChains
from dash import Dash, Output, Input, _dash_renderer, callback
import dash_mantine_components as dmc
import json

_dash_renderer._set_react_version("18.2.0")

data = [
    {
        "date": "Mar 22",
        "Apples": 2890,
        "Oranges": 2338,
        "Tomatoes": 2452,
    },
    {
        "date": "Mar 23",
        "Apples": 2756,
        "Oranges": 2103,
        "Tomatoes": 2402,
    },
    {
        "date": "Mar 24",
        "Apples": 3322,
        "Oranges": 986,
        "Tomatoes": 1821,
    },
]
component = dmc.Group(
    [
        dmc.CompositeChart(
            id="figure",
            h=300,
            data=data,
            dataKey="date",
            withLegend=True,
            maxBarWidth=30,
            series=[
                {"name": "Tomatoes", "color": "rgba(18, 120, 255, 0.2)", "type": "bar"},
                {"name": "Apples", "color": "red.8", "type": "line"},
                {"name": "Oranges", "color": "yellow.8", "type": "area"},
            ]
        ),
        dmc.Text(id="data"),
        dmc.Text(id="name"),
    ]
)


def test_001co_composite(dash_duo):
    app = Dash(__name__, external_stylesheets=dmc.styles.ALL)

    app.layout = dmc.MantineProvider(component)

    @callback(
        Output("data", "children"),
        Output("name", "children"),
        Input("figure", "clickData"),
        Input("figure", "clickSeriesName"),
    )
    def update(clickdata, name):
        return json.dumps(clickdata), str(name)

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#data", "null")

    # Target the bars
    bars = dash_duo.find_elements(
        ".recharts-layer.recharts-bar-rectangle"
    )


    assert len(bars) > 0, "No areas found in the chart"
    actions = ActionChains(dash_duo.driver)
    actions.move_to_element(bars[0]).click().perform()

    expected_output = (
         '{"date": "Mar 22", "Apples": 2890, "Oranges": 2338, "Tomatoes": 2452}'
    )

    dash_duo.wait_for_text_to_equal("#data", expected_output)
    dash_duo.wait_for_text_to_equal("#name", "Tomatoes")

    assert dash_duo.get_logs() == []


def test_002co_compositechart(dash_duo):
    app = Dash(__name__, external_stylesheets=dmc.styles.ALL)

    app.layout = dmc.MantineProvider(component)

    @callback(
        Output("data", "children"),
        Output("name", "children"),
        Input("figure", "hoverData"),
        Input("figure", "hoverSeriesName"),
    )
    def update(hoverdata, hovername):
        return json.dumps(hoverdata), str(hovername)

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#data", "null")

    # Target the bars
    bars = dash_duo.find_elements(
        ".recharts-layer.recharts-bar-rectangle"
    )

    assert len(bars) > 0, "No areas found in the chart"
    actions = ActionChains(dash_duo.driver)
    actions.move_to_element(bars[0]).perform()

    expected_output = (
        '{"date": "Mar 22", "Apples": 2890, "Oranges": 2338, "Tomatoes": 2452}'
    )

    dash_duo.wait_for_text_to_equal("#data", expected_output)
    dash_duo.wait_for_text_to_equal("#name", "Tomatoes")

    assert dash_duo.get_logs() == []
