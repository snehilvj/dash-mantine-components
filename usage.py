from dash import Dash, html, no_update
from dash.dependencies import Input, Output

import dash_mantine_components as dmc
import time

app = Dash(__name__)

app.layout = html.Div([dmc.Button("Iam a button", id="button"), dmc.Text(id="text")])


@app.callback(
    Output("text", "children"),
    Input("button", "n_clicks"),
    prevent_initial_call=True,
)
def but(n_clicks):
    time.sleep(1)
    return n_clicks, no_update


if __name__ == "__main__":
    app.run_server(debug=True)
