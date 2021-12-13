from dash import Dash, html
from dash.dependencies import Input, Output

import dash_mantine_components as dmc

app = Dash()

app.layout = html.Div(
    [
        dmc.Accordion(
            children=[
                dmc.AccordionItem(
                    children=["Contents 1"],
                    label="Contents 1",
                    description="Description of item 1",
                ),
                dmc.AccordionItem(
                    children=["Contents 2"],
                    label="Contents 2",
                    description="Description of item 2",
                ),
            ],
            id="accordion-1",
            state={"0": True},
        ),
        html.Div(id="output-1"),
        dmc.Accordion(
            children=[
                dmc.AccordionItem(
                    children=["Contents 3"],
                    label="Contents 3",
                    description="Description of item 3",
                ),
                dmc.AccordionItem(
                    children=["Contents 4"],
                    label="Contents 4",
                    description="Description of item 4",
                ),
            ],
            id="accordion-2",
            state={"1": True},
            multiple=True,
        ),
        html.Div(id="output-2"),
        dmc.Accordion(
            children=[
                dmc.AccordionItem(
                    children=["Contents 5"],
                    label="Contents 5",
                    description="Description of item 5",
                ),
                dmc.AccordionItem(
                    children=["Contents 6"],
                    label="Contents 6",
                    description="Description of item 6",
                ),
            ],
            id="accordion-3",
            multiple=True,
        ),
        html.Button("Set states", id="button"),
    ]
)


@app.callback(Output("output-1", "children"), Input("accordion-1", "state"))
def accordion1(state):
    if state:
        return f"{state}"


@app.callback(Output("output-2", "children"), Input("accordion-2", "state"))
def accordion2(state):
    if state:
        return f"{state}"


@app.callback(
    Output("accordion-3", "state"),
    Input("button", "n_clicks"),
    prevent_initial_call=True,
)
def accordion3(n_clicks):
    return {"0": True, "1": True}


if __name__ == "__main__":
    app.run_server(debug=True)
