import dash_mantine_components as dmc
from dash import Dash, Input, Output, html, State, dcc
from datetime import datetime, timedelta

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Divider(label="Click on update button to refresh"),
        dmc.Space(h=20),
        dmc.Divider(
            label="This is a divider with centered content", labelPosition="center"
        ),
        dmc.Space(h=20),
        dmc.Divider(
            label="This is a dotted divider with content on the right",
            labelPosition="right",
            variant="dotted",
        ),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
