from dash.dependencies import Input, Output
import pandas as pd
from dash import Dash, html

import dash_mantine_components as dmc


df = pd.read_csv("https://raw.githubusercontent.com/plotly/datasets/master/solar.csv")
app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Table(
            id="table",
            striped=True,
            highlightOnHover=True,
        ),
        dmc.Space(h=20),
        dmc.Button("Fill table", id="btn"),
    ]
)


@app.callback(
    [Output("table", "rows"), Output("table", "columns")],
    Input("btn", "n_clicks"),
    prevent_initial_call=True,
)
def fill_table(n_clicks):
    return df.values.tolist(), df.columns


if __name__ == "__main__":
    app.run_server(debug=True)
