import dash_mantine_components as dmc
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Title("This is h1 title", order=1),
        dmc.Title("This is h2 title", order=2),
        dmc.Title("This is h3 title", order=3),
        dmc.Title("This is h4 title", order=4),
        dmc.Title("This is h5 title", order=5),
        dmc.Title("This is h6 title", order=6),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
