import dash_mantine_components as dmc
from dash import Dash, Input, Output, html

app = Dash(__name__)

app.layout = html.Div(
    [
        html.Div(
            id="alert-container",
            children=[
                dmc.Alert(
                    " Something terrible happened! You made a mistake and there is no going back, your data was lost forever!",
                    title="Bummer!",
                    color="violet",
                )
            ],
        ),
        dmc.Space(h=20),
        dmc.Button("Restart Process", id="restart-button"),
    ]
)


@app.callback(
    Output("alert-container", "children"),
    Input("restart-button", "n_clicks"),
    prevent_initial_call=True,
)
def restart(n_clicks):
    return dmc.Alert(
        "The process restart was successful.", title="Success!", color="green"
    )


if __name__ == "__main__":
    app.run_server(debug=True)
