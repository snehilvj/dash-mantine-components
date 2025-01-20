import dash_mantine_components as dmc
from dash import Dash, _dash_renderer

_dash_renderer._set_react_version("18.2.0")

app = Dash(external_stylesheets=dmc.styles.ALL)

app.layout = dmc.MantineProvider(
    [
        dmc.Text(
            [
                "You can highlight code inline ",
                dmc.InlineCodeHighlight(
                    code='<InlineCodeHighlight code="" language="tsx" />',
                    language="tsx",
                ),
                " Is not that cool?",
            ]
        )
    ]
)


if __name__ == "__main__":
    app.run(debug=True)
