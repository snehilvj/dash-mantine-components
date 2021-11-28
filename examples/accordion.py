from dash import Dash, html
from dash.dependencies import Input, Output

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
            id="acc",
            state={"1": True},
        ),
        dmc.Space(h=20),
        dmc.Text(id="output"),
    ]
)


@app.callback(Output("output", "children"), Input("acc", "state"))
def accordion(state):
    if state:
        return f"{state}"


if __name__ == "__main__":
    app.run_server(debug=True)
