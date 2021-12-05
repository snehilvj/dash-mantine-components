import dash
from dash import Dash, Input, Output, html

import dash_mantine_components as dmc

app = Dash(__name__)


app.layout = html.Div(
    [
        dmc.NotificationsProvider(
            dmc.NotificationHandler(id="handler"),
            autoClose=False,
        ),
        dmc.Group(
            [
                dmc.Button("Show notifications", id="show"),
                dmc.Button("Update notifications", id="update"),
                dmc.Button("Hide notifications", id="hide"),
            ]
        ),
    ]
)


@app.callback(
    Output("handler", "task"),
    Input("show", "n_clicks"),
    Input("update", "n_clicks"),
    Input("hide", "n_clicks"),
    prevent_initial_call=True,
)
def notifications(show_click, update_click, hide_click):
    command = dash.callback_context.triggered[0]["prop_id"].split(".")[0]
    task = {
        "command": command,
        "id": "notification",
    }
    if command == "show":
        task = {
            **task,
            "props": {
                "color": "violet",
                "title": "This is a notification",
                "message": "Notifications in Dash Apps! Great!",
                "loading": True,
                "disallowClose": True,
            },
        }
    elif command == "update":
        task = {
            **task,
            "props": {
                "color": "green",
                "title": "All good",
                "message": "Data has been loaded.",
                "loading": False,
                "disallowClose": False,
                "autoClose": 3000,
            },
        }

    return task


if __name__ == "__main__":
    app.run_server(debug=True)
