from dash import Dash, html, Output, Input, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def test_001_st_stepper(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        html.Div([
            dmc.Stepper(
                id="stepper",
                active=0,
                children=[
                    dmc.StepperStep(children="Step 1", label="Step 1"),
                    dmc.StepperStep(children="Step 2", label="Step 2"),
                    dmc.StepperStep(children="Step 3", label="Step 3"),
                ],
            ),
            html.Div(id="output")
        ])
    )

    @app.callback(
        Output("output", "children"),
        Input("multi-select", "value")
    )
    def update_output(selected_values):
        return f"Selected: {selected_values}"

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_element("#stepper")

    step_buttons = dash_duo.find_elements("button.mantine-Stepper-step")

    for i, btn in enumerate(step_buttons):
        btn.click()
        dash_duo.wait_for_text_to_equal("div.mantine-Stepper-content", f"Step {i + 1}")
