import dash_mantine_components as dmc
from dash import Dash, Input, Output, html, State

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Checkbox(id="check1", label="This is a checkbox. Do you agree?"),
        dmc.Space(h=20),
        dmc.Checkbox(id="check2", label="This might not be..", checked=True),
        dmc.Space(h=20),
        html.Div(id="output"),
    ]
)


@app.callback(
    Output("output", "children"),
    Input("check1", "checked"),
    State("check2", "checked"),
    prevent_initial_call=True,
)
def restart(checked1, checked2):
    return dmc.Text(
        f"Checkbox 1 is {'Checked' if checked1 else 'Unchecked'} and Checkbox 2 is {'Checked' if checked2 else 'Unchecked'}"
    )


if __name__ == "__main__":
    app.run_server(debug=True)
