from dash import Dash, html

import dash_mantine_components as dmc

app = Dash(__name__)

code = """class DumbMaths:
    def __init__(self) -> None:
        self.res = 0

    def add(a: int, b: int):
        return 0

    def mult(a: int, b: int):
        return 0
"""


app.layout = html.Div(
    [
        dmc.SimpleGrid(
            cols=2,
            children=[
                dmc.Prism(
                    language="python",
                    code=code,
                ),
                dmc.Prism(
                    colorScheme="dark",
                    language="python",
                    code=code,
                ),
            ],
        ),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
