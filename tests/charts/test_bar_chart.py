from selenium.webdriver import ActionChains
from dash import Dash, Output, Input, _dash_renderer, callback
import dash_mantine_components as dmc
import json

_dash_renderer._set_react_version("18.2.0")

data = [
    {"month": "January", "Smartphones": 1200, "Laptops": 900, "Tablets": 200},
    {"month": "February", "Smartphones": 1900, "Laptops": 1200, "Tablets": 400},
    {"month": "March", "Smartphones": 400, "Laptops": 1000, "Tablets": 200},
    {"month": "April", "Smartphones": 1000, "Laptops": 200, "Tablets": 800},
    {"month": "May", "Smartphones": 800, "Laptops": 1400, "Tablets": 1200},
    {"month": "June", "Smartphones": 750, "Laptops": 600, "Tablets": 1000}
]

component = dmc.Group(
    [
        dmc.BarChart(
            id="figure",
            h=300,
            dataKey="month",
            data=data,
            type="stacked",
            series=[
                {"name": "Smartphones", "color": "violet.6"},
                {"name": "Laptops", "color": "blue.6"},
                {"name": "Tablets", "color": "teal.6"},
            ],
            withLegend=True,
            withTooltip=False,
        ),
        dmc.Text(id="data"),
        dmc.Text(id="name"),
    ]
)


def test_001ba_barchart(dash_duo):
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
         '{"month": "January", "Smartphones": 1200, "Laptops": 900, "Tablets": 200}'
    )

    dash_duo.wait_for_text_to_equal("#data", expected_output)
    dash_duo.wait_for_text_to_equal("#name", "Smartphones")

    assert dash_duo.get_logs() == []


def test_002ba_barchart(dash_duo):
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
        '{"month": "January", "Smartphones": 1200, "Laptops": 900, "Tablets": 200}'
    )

    dash_duo.wait_for_text_to_equal("#data", expected_output)
    dash_duo.wait_for_text_to_equal("#name", "Smartphones")

    assert dash_duo.get_logs() == []


def test_value_labels_on_bar_chart(dash_duo):
    component = dmc.Group(
        [
            dmc.Title(
                "BarChart with valueLabelProps (position: inside, fill: white)",
                order=3,
                mt="xl",
            ),
            dmc.BarChart(
                id="custom-chart",
                h=300,
                data=data,
                dataKey="month",
                withBarValueLabel=True,
                valueLabelProps={"position": "inside", "fill": "white"},
                series=[
                    {"name": "Smartphones", "color": "violet.6"},
                    {"name": "Laptops", "color": "blue.6"},
                    {"name": "Tablets", "color": "teal.6"},
                ],
            ),
        ]
    )
    app = Dash(__name__, external_stylesheets=dmc.styles.ALL)
    app.layout = dmc.MantineProvider(component)

    dash_duo.start_server(app)

    # Target the bars
    value_labels = dash_duo.find_elements(".recharts-layer.recharts-label-list text")

    assert len(value_labels) > 0, "No value labels found in the chart"
    for value_label in value_labels:
        assert value_label.get_attribute("fill") == "white", (
            "Value label 'fill' should be 'white', but found: "
            + value_label.get_attribute("text-anchor")
        )
