import dash_mantine_components as dmc
from dash import Dash, Input, Output, html, State, dcc
from datetime import datetime, timedelta

app = Dash(__name__)


app.layout = html.Div(
    [
        dmc.Button("Open Modal", id="button"),
        dmc.Modal(
            [dmc.Text("I am in a modal component.")], title="New Modal", id="modal"
        ),
    ]
)


@app.callback(
    Output("modal", "opened"), Input("button", "n_clicks"), prevent_initial_call=True
)
def modal(n_clicks):
    return True


if __name__ == "__main__":
    app.run_server(debug=True)
