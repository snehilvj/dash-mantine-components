from dash import Dash, html

import dash_mantine_components as dmc

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Breadcrumbs(
            separator="-",
            items=[
                {"title": "Mantine", "href": "https://mantine.dev"},
                {
                    "title": "Mantine hooks",
                    "href": "https://mantine.dev/hooks/getting-started",
                },
                {"title": "use-id", "href": "https://mantine.dev/hooks/use-id"},
            ],
        )
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
