from dash import Dash, html

import dash_mantine_components as dmc


app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Blockquote(
            " Life is like an npm install – you never know what you are going to get.",
            cite="- Forrest Gump",
            color="violet",
        )
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
