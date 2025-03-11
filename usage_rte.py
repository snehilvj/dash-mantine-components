from dash import Dash, html

import dash_mantine_components as dmc

app = Dash(__name__, external_stylesheets=dmc.styles.ALL)

app.layout = dmc.MantineProvider(
    html.Div(
        dmc.RichTextEditor(code="x", language="tsx", id="rte"), style=dict(margin="5px")
    )
)

if __name__ == "__main__":
    app.run(debug=True)
