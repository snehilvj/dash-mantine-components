
from random import randint
import dash_mantine_components as dmc
from dash import Dash, _dash_renderer, callback, Input, Output
_dash_renderer._set_react_version("18.2.0")

app = Dash(external_stylesheets=dmc.styles.ALL)

chart = dmc.LineChart(
    id="linechart-animation",
    h=300,
    dataKey="date",
    data=[{}],
    tooltipAnimationDuration=500,
    lineProps={"isAnimationActive":True,
                    "animationDuration": 500,
                    "animationEasing": "ease-in-out",
                    "animationBegin": 500},
    series=[
        {"name": "Apples", "color": "indigo.6"},
        {"name": "Oranges", "color": "blue.6"},
        {"name": "Tomatoes", "color": "teal.6"},
    ],
)


app.layout = dmc.MantineProvider([
    dmc.Button("Update Chart", id="btn-linechart-animation"),
    chart
])

@callback(
    Output("linechart-animation", "data"),
    Input("btn-linechart-animation", "n_clicks")
)
def update(n):
    return [
    {"date": "Mar 22", "Apples": 2890, "Oranges": 2338, "Tomatoes": randint(1000, 4000)},
    {"date": "Mar 23", "Apples": 2756, "Oranges": 2103, "Tomatoes": randint(1000, 4000)},
    {"date": "Mar 24", "Apples": 3322, "Oranges": 986, "Tomatoes": randint(1000, 4000)},
    {"date": "Mar 25", "Apples": 3470, "Oranges": 2108, "Tomatoes": randint(1000, 4000)},
    {"date": "Mar 26", "Apples": 3129, "Oranges": 1726, "Tomatoes": randint(1000, 4000)}
]


if __name__ == "__main__":
    app.run(debug=True)