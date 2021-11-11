import dash_mantine_components as dmc
from dash import Dash, Input, Output, html

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Center(
            dmc.Text("I'm in the center component!"),
            style={"height": "200px", "border": "1px solid black"},
        )
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
