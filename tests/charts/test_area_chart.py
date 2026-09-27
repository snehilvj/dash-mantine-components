from selenium.webdriver import ActionChains
from dash import Dash, Output, Input, _dash_renderer, callback
import dash_mantine_components as dmc
import json

_dash_renderer._set_react_version("19.2.4")

data = [
    {"date": "Mar 22", "Apples": 2890, "Oranges": 2338, "Tomatoes": 2452},
    {"date": "Mar 23", "Apples": 2756, "Oranges": 2103, "Tomatoes": 2402},
    {"date": "Mar 24", "Apples": 3322, "Oranges": 986, "Tomatoes": 1821},
    {"date": "Mar 25", "Apples": 3470, "Oranges": 2108, "Tomatoes": 2809},
    {"date": "Mar 26", "Apples": 3129, "Oranges": 1726, "Tomatoes": 2290},
]

component = dmc.Group(
    [
        dmc.AreaChart(
            id="figure",
            h=300,
            dataKey="date",
            data=data,
            withLegend=True,
            series=[
                {"name": "Apples", "color": "indigo.6"},
                {"name": "Oranges", "color": "blue.6"},
                {"name": "Tomatoes", "color": "teal.6"},
            ],
            areaProps={"dot": True},
        ),
        dmc.Text(id="data"),
        dmc.Text(id="name"),
    ]
)


def get_tomatoes_dot(dash_duo, index):
    dots = dash_duo.find_elements(
        ".recharts-dot"
    )

    tomatoes_dots = [
        dot
        for dot in dots
        if "teal" in (dot.get_attribute("stroke") or "")
    ]

    assert len(tomatoes_dots) == 5, (
        f"Expected 5 Tomatoes dots, found {len(tomatoes_dots)}"
    )

    return tomatoes_dots[index]


def test_001ar_areachart(dash_duo):
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

    dash_duo.wait_for_text_to_equal("#data", "null")

    # Third Tomatoes point = Mar 24
    dot = get_tomatoes_dot(dash_duo, 2)

    ActionChains(dash_duo.driver).move_to_element(dot).click().perform()

    expected_output = (
        '{"date": "Mar 24", "Apples": 3322, "Oranges": 986, "Tomatoes": 1821}'
    )

    dash_duo.wait_for_text_to_equal("#data", expected_output)
    dash_duo.wait_for_text_to_equal("#name", "Tomatoes")

    assert dash_duo.get_logs() == []


def test_002ar_areachart(dash_duo):
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

    dash_duo.wait_for_text_to_equal("#data", "null")

    # Third Tomatoes point = Mar 24
    dot = get_tomatoes_dot(dash_duo, 2)

    ActionChains(dash_duo.driver).move_to_element(dot).perform()

    expected_output = (
        '{"date": "Mar 24", "Apples": 3322, "Oranges": 986, "Tomatoes": 1821}'
    )

    dash_duo.wait_for_text_to_equal("#data", expected_output)
    dash_duo.wait_for_text_to_equal("#name", "Tomatoes")

    assert dash_duo.get_logs() == []