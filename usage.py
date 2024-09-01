import dash_mantine_components as dmc
from dash import Dash, _dash_renderer
_dash_renderer._set_react_version("18.2.0")

app = Dash(external_stylesheets=dmc.styles.ALL)

data = [
    {"month": "January", "Smartphones": 1200, "Laptops": 900, "Tablets": 200},
    {"month": "February", "Smartphones": 1900, "Laptops": 1200, "Tablets": 400},
    {"month": "March", "Smartphones": 400, "Laptops": 1000, "Tablets": 200},
    {"month": "April", "Smartphones": 1000, "Laptops": 200, "Tablets": 800},
    {"month": "May", "Smartphones": 800, "Laptops": 1400, "Tablets": 1200},
    {"month": "June", "Smartphones": 750, "Laptops": 600, "Tablets": 1000}
]


component = dmc.BarChart(
    h=300,
    dataKey="month",
    data=data,
    orientation="vertical",
    yAxisProps={"width": 80},
    barProps= {"radius": 50},
    series=[{"name": "Smartphones", "color": "violet.6"}],
)

app.layout = dmc.MantineProvider(
    component
)

if __name__ == "__main__":
    app.run(debug=True)
