from dash import Dash, html

import dash_mantine_components as dmc


app = Dash(__name__)

app.layout = html.Div(
    [
        dmc.Accordion(
            children=[
                dmc.AccordionItem(
                    dmc.Group(
                        [dmc.Button("Click Me!"), dmc.Badge("adda I am an bdage")],
                        direction="column",
                    ),
                    label="This is cool",
                    description="I am a desciption",
                ),
                dmc.AccordionItem("haha I'm greattpp ", label="This is grrat"),
            ],
            iconPosition="right",
            multiple=True,
            initialItem=0,
        )
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
