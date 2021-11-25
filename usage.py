from dash import Dash, html

import dash_mantine_components as dmc

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Group(
            [
                dmc.Badge("Click Me!"),
                dmc.Badge("Click Me!", color="red"),
                dmc.Badge("Click Me!", variant="outline"),
                dmc.Badge("Click Me!", variant="dot"),
                dmc.Badge(
                    "Click Me!",
                    variant="gradient",
                    gradient={"from": "teal", "to": "lime", "deg": 105},
                ),
                dmc.Badge("Click Me!", size="lg"),
                dmc.Badge("Click Me!", radius="xs"),
            ]
        )
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
