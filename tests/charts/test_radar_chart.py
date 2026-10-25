import dash_mantine_components as dmc
from dash import Dash

data = [
    {"product": "Apples", "sales_january": 120, "sales_february": 100},
    {"product": "Oranges", "sales_january": 98, "sales_february": 90},
    {"product": "Tomatoes", "sales_january": 86, "sales_february": 70},
    {"product": "Grapes", "sales_january": 99, "sales_february": 80},
    {"product": "Bananas", "sales_january": 85, "sales_february": 120},
    {"product": "Lemons", "sales_january": 65, "sales_february": 150},
]


def test_001rc_radar_chart_renders(dash_duo):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        dmc.RadarChart(
            id="radar-chart",
            h=300,
            data=data,
            dataKey="product",
            withPolarRadiusAxis=True,
            series=[
                {"name": "sales_january", "color": "lime.4", "opacity": 0.1},
                {"name": "sales_february", "color": "cyan.4", "opacity": 0.1},
            ],
        )
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_element(".mantine-RadarChart-root")

    ticks = dash_duo.find_elements(".recharts-polar-angle-axis-tick")
    assert len(ticks) == len(data)
    assert ticks[0].text == "Apples"

    assert dash_duo.get_logs() == []


def test_002rc_polar_angle_axis_props_accepts_function(dash_duo):
    """Regression test for #747: a function passed via polarAngleAxisProps must be resolved."""
    app = Dash(__name__, assets_folder="../assets")
    app.layout = dmc.MantineProvider(
        dmc.RadarChart(
            id="radar-chart",
            h=300,
            data=data,
            dataKey="product",
            polarAngleAxisProps={"tick": {"function": "radarTick"}},
            series=[
                {"name": "sales_january", "color": "lime.4", "opacity": 0.1},
                {"name": "sales_february", "color": "cyan.4", "opacity": 0.1},
            ],
        )
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_element(".mantine-RadarChart-root")

    ticks = dash_duo.find_elements(".custom-radar-tick")
    assert len(ticks) == len(data), "custom tick function was not applied"
    assert ticks[0].text == "Apples!"
    assert ticks[0].get_attribute("fill") == "red"

    assert dash_duo.get_logs() == []
