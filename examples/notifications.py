import dash_mantine_components as dmc
from dash import Dash, Input, Output, html, State, dcc
from datetime import datetime, timedelta

app = Dash(__name__)


app.layout = html.Div(
    [
        dmc.Notification(
            "This is default notification with title and body",
            title="Default notification",
        ),
        dmc.Space(h=20),
        dmc.Notification(
            "This is teal notification with icon",
            color="teal",
            title="Teal notification",
        ),
        dmc.Space(h=20),
        dmc.Notification("Bummer! Notification without title", color="red"),
        dmc.Space(h=20),
        dmc.Notification(
            "Please wait until data is uploaded, you cannot close this notification yet",
            loading=True,
            title="Uploading data to the server",
        ),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
