from dash import Dash, html, Output, Input, State, _dash_renderer, clientside_callback
import dash_mantine_components as dmc
from dash.testing.wait import until
import time

_dash_renderer._set_react_version("18.2.0")


def test_001oc_optional_components(dash_duo):
    app = Dash(__name__)

    min_step = 0
    max_step = 3
    active = 0

    layout = html.Div(
        [
            dmc.Stepper(
                id="stepper",
                active=active,
                children=[
                    dmc.StepperStep(
                        label="Step 1",
                        description=html.Div(dmc.Button(id='test_button', children='test', disabled=True)),
                        children="Step 1",
                    ),
                    dmc.StepperStep(
                        label="Step 2",
                        description="Verify email",
                        children="Step 2",
                    ),
                    dmc.StepperStep(
                        label="Step 3",
                        description="Get full access",
                        children="Step 3",
                    ),
                    dmc.StepperCompleted(
                        children=dmc.Text(
                            "Completed, click back button to get to previous step",
                            ta="center",
                        )
                    ),
                ],
            ),
            dmc.Group(
                justify="center",
                mt="xl",
                children=[
                    dmc.Button("Back", id="previous-button", variant="default"),
                    dmc.Button("Next step", id="next-button"),
                ],
            ),
            html.Div(id='output')
        ]
    )

    app.layout = dmc.MantineProvider(layout)

    clientside_callback("""(n)=> {
        if (n) {
            return `clicked ${n} times`
        }
    }""",
                        Output('output', 'children'),
    Input('test_button', 'n_clicks'),
    prevent_initial_call=True,
    suppress_callback_exceptions=True)

    clientside_callback(
        """(a) => {
            return a !== 0
        }""",
        Output('test_button', 'disabled'),
        Input('stepper', 'active'),
        suppress_callback_exceptions=True
    )

    clientside_callback(
        """(n, active) => n ? Math.max(active - 1, 0) : active""",
        Output("stepper", "active", allow_duplicate=True),
        Input("previous-button", "n_clicks"),
        State("stepper", "active"),
        prevent_initial_call=True,
    )

    clientside_callback(
        """(n, active) => n ? Math.min(active + 1, 2) : active""",
        Output("stepper", "active", allow_duplicate=True),
        Input("next-button", "n_clicks"),
        State("stepper", "active"),
        prevent_initial_call=True,
    )

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#test_button", "test")
    assert dash_duo.find_element('#test_button').get_attribute('disabled') is None

    step_buttons = dash_duo.find_elements("button.mantine-Stepper-step")
    for i, btn in enumerate(step_buttons):
        btn.click()
        dash_duo.wait_for_text_to_equal("div.mantine-Stepper-content", f"Step {i + 1}")

    dash_duo.find_element("#previous-button").click()
    dash_duo.wait_for_text_to_equal("div.mantine-Stepper-content", "Step 2")

    assert dash_duo.find_element('#test_button').get_attribute('disabled') == 'true'


    dash_duo.find_element("#previous-button").click()
    dash_duo.wait_for_text_to_equal("div.mantine-Stepper-content", "Step 1")

    until(lambda: dash_duo.find_element('#test_button').get_attribute('disabled') is None, timeout=3)

    for i in range(5):
        dash_duo.find_element('#test_button').click()
        dash_duo.wait_for_text_to_equal("#output", f"clicked {i+1} times")

    assert dash_duo.get_logs() == []
