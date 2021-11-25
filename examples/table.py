import pandas as pd
from dash import Dash, html

import dash_mantine_components as dmc


df = pd.read_csv("https://raw.githubusercontent.com/plotly/datasets/master/solar.csv")
app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Table(
            striped=True,
            highlightOnHover=True,
            columns=df.columns,
            rows=df.values.tolist(),
        )
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
