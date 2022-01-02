from dash import Dash, html
import dash_mantine_components as dmc


app = Dash(__name__, suppress_callback_exceptions=True)

app.layout = dmc.Container(style={"padding": 20}, children=[html.Div("Hi")])


if __name__ == "__main__":
    app.run_server(debug=True)
