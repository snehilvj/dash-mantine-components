from dash import Dash, Output, Input, _dash_renderer, callback
import dash_mantine_components as dmc
import json

_dash_renderer._set_react_version("18.2.0")

data = [
    {"date": "Mar 22", "Apples": 2890, "Oranges": 2338, "Tomatoes": 2452},
    {"date": "Mar 23", "Apples": 2756, "Oranges": 2103, "Tomatoes": 2402},
    {"date": "Mar 24", "Apples": 3322, "Oranges": 986, "Tomatoes": 1821},
    {"date": "Mar 25", "Apples": 3470, "Oranges": 2108, "Tomatoes": 2809},
    {"date": "Mar 26", "Apples": 3129, "Oranges": 1726, "Tomatoes": 2290},
]

component = dmc.Group(
    [
        dmc.LineChart(
            id="figure-linechart",
            h=300,
            dataKey="date",
            data=data,
            withLegend=True,
            series=[
                {"name": "Apples", "color": "indigo.6"},
                {"name": "Oranges", "color": "blue.6"},
                {"name": "Tomatoes", "color": "teal.6"},
            ],
        ),
        dmc.Text(id="clickdata-linechart"),
    ]
)


def test_001li_linechart(dash_duo):
    app = Dash(__name__, external_stylesheets=dmc.styles.ALL)

    app.layout = dmc.MantineProvider(component)

    @callback(
        Output("clickdata-linechart", "children"),
        Input("figure-linechart", "clickData"),
    )
    def update(clickdata):
        return json.dumps(clickdata)

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#clickdata-linechart", "null")

    # Target the circle elements inside the g.recharts-line-dots group
    dots = dash_duo.find_elements(
        "g.recharts-line-dots circle.recharts-dot.recharts-line-dot"
    )

    assert len(dots) > 0, "No dots found in the chart"
    dots[0].click()

    expected_output = (
        '{"date": "Mar 22", "Apples": 2890, "Oranges": 2338, "Tomatoes": 2452}'
    )

    dash_duo.wait_for_text_to_equal("#clickdata-linechart", expected_output)

    assert dash_duo.get_logs() == []
