from dash import Dash, html, Output, Input, State, _dash_renderer, ctx, no_update
import dash_mantine_components as dmc
from selenium.webdriver.common.keys import Keys

_dash_renderer._set_react_version("18.2.0")


def test_001mo_modal(dash_duo):
    app = Dash(__name__)

    component = html.Div(
        [
            dmc.Button("Open Modal", id="modal-demo-button"),
            dmc.Modal(
                title="New Modal",
                id="modal-simple",
                closeButtonProps={
                    "children": html.Div(" close", id="my-component"),
                    "icon": html.Div("x", id="modal-custom-close"),
                },
                children=[
                    dmc.Text("I am in a modal component."),
                ],
            ),
        ]
    )

    app.layout = dmc.MantineProvider(
       component
    )

    @app.callback(
        Output("modal-simple", "opened"),
        Input("modal-demo-button", "n_clicks"),
        State("modal-simple", "opened"),
        prevent_initial_call=True,
    )
    def modal_demo(_, opened):
        return not opened

    dash_duo.start_server(app)

    # Open modal
    modal_btn = dash_duo.find_element("#modal-demo-button")
    modal_btn.click()

    # Close modal
    modal_close_btn = dash_duo.find_element("#modal-custom-close")
    modal_close_btn.click()

    assert dash_duo.get_logs() == []




def test_002mo_modalstack(dash_duo):
    app = Dash(__name__)

    component = dmc.ModalStack(
        children=[
            dmc.ManagedModal(title="first", id="first", children=[dmc.Button("Modal Btn", id="btn")]),
            dmc.ManagedModal(title="second", id="second")
        ],
        id="stack-modal"
    )

    app.layout = dmc.MantineProvider([
        dmc.Button("open model 1 & 2", id="btn1", n_clicks=0),
        dmc.Button("open model 2", id="btn2", n_clicks=0),
        component,
        dmc.Text(id="out")
    ])

    @app.callback(
        Output("out", "children"),
        Input("btn", "n_clicks"),
        Input("stack-modal", "state")
    )
    def update(n, s):
        return f"clicked {n}, state {s}"

    @app.callback(
        Output("stack-modal", "open"),
        Input("btn1", "n_clicks"),
        Input("btn2", "n_clicks")
    )
    def update(n, n2):
        if ctx.triggered_id == "btn1":
            return ["first", "second"]
        if ctx.triggered_id == "btn2":
            return "second"
        return no_update

    dash_duo.start_server(app)

    btn1 = dash_duo.find_element("#btn1")
    btn2 = dash_duo.find_element("#btn2")

    # Click first button (open both modals)
    btn1.click()
    dash_duo.wait_for_text_to_equal("#out", "clicked None, state {'first': True, 'second': True}")


    # Send ESCAPE key to close top modal (second)
    btn1.send_keys(Keys.ESCAPE)

    # Wait for state update to reflect second modal closed
    dash_duo.wait_for_text_to_equal(
        "#out", "clicked None, state {'first': True, 'second': False}"
    )


    # Click the button inside the modal
    modal_btn = dash_duo.find_element("#btn")
    modal_btn.click()
    dash_duo.wait_for_text_to_equal("#out", "clicked 1, state {'first': True, 'second': False}")

    # Send ESCAPE key to close top modal (first)
    btn1.send_keys(Keys.ESCAPE)

    # Wait for state update to reflect first modal closed
    dash_duo.wait_for_text_to_equal(
        "#out", "clicked 1, state {'first': False, 'second': False}"
    )

    # Click second button (only second modal open)
    btn2.click()
    dash_duo.wait_for_text_to_equal("#out", "clicked 1, state {'first': False, 'second': True}")


    assert dash_duo.get_logs() == []

