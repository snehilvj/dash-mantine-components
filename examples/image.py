from dash import Dash, html

import dash_mantine_components as dmc


app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Image(
            src="https://imgk.timesnownews.com/story/Delhi_Pollution.png?tr=w-600,h-450,fo-auto",
            caption="Funny Meme",
            style={"width": 400},
            withPlaceholder=True,
        ),
        dmc.Image(src="ada", height=200, withPlaceholder=True),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
