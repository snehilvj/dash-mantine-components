from dash import Dash, html

import dash_mantine_components as dmc


app = Dash(__name__)

app.layout = html.Div([dmc.Anchor("Click on me!", href="/haha", target="_self")])


if __name__ == "__main__":
    app.run_server(debug=True)
