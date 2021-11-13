import dash_mantine_components as dmc
from dash import Dash, Input, Output, html, State, dcc
from datetime import datetime, timedelta

app = Dash(__name__)


app.layout = html.Div(
    [
        dmc.Tooltip(
            label=" Use this button to save this information in your profile, after that you will be able to access it any time and share it via email.",
            children=[dmc.Button("Button with a tooltip. Hover on it.")],
            wrapLines=True,
            width=220,
        )
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
