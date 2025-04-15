from dash import Dash, html, Output, Input, _dash_renderer, callback
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def test_001po_popover(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        html.Div(
            [
                html.Div("Click Outside", id="click-outside", style={"background": "grey"}),
                dmc.Popover(
                    [
                        dmc.PopoverTarget(dmc.Button("Toggle Popover", id="btn")),
                        dmc.PopoverDropdown(dmc.Text("This popover is opened")),
                    ],
                    id="popover",
                    opened=False,
                ),
                html.Div(id="output"),
            ]
        )
    )

    @app.callback(Output("output", "children"), Input("popover", "opened"))
    def update_output(opened):
        return str(opened)

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#output", "False")

    # Open Popover
    popover_btn = dash_duo.find_element("#btn")
    popover_btn.click()

    # Verify the Popover opens when clicking the target
    dash_duo.wait_for_text_to_equal("#output", "True")

    # Close Popover
    popover_btn.click()

    # Verify the Popover closes when clicking the target
    dash_duo.wait_for_text_to_equal("#output", "False")

    #Open Popover
    popover_btn.click()

    # Verify the Popover is open
    dash_duo.wait_for_text_to_equal("#output", "True")

    # Click outside
    click_outside = dash_duo.find_element("#click-outside")
    click_outside.click()

    # Verify the Popover closes when clicking outside
    dash_duo.wait_for_text_to_equal("#output", "False")

    assert dash_duo.get_logs() == []

# test for issue #557
def test002po_popover(dash_duo):

    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        dmc.Center(
            [
                dmc.Stack(
                    [
                        dmc.Button(
                            "Update Select",
                            id="update-select"
                        ),
                        dmc.Popover(
                            [
                                dmc.PopoverTarget(
                                    dmc.Button(
                                        "Toggle Popover",
                                        id="btn"
                                    )
                                ),
                                dmc.PopoverDropdown(
                                    dmc.Select(
                                        label="Select your favorite library",
                                        placeholder="Select one",
                                        id="framework-select",
                                        comboboxProps={"withinPortal": False}
                                    ),
                                    p="sm",
                                    w="fit-content"
                                ),
                            ]
                        ),
                    ]
                )
            ],
            style={"height": '100vh', "width": "100vw"}
        )
    )

    @callback(
        Output("framework-select", "value"),
        Output("framework-select", "data"),
        Input("update-select", "n_clicks"),
        prevent_initial_call=True
    )
    def update_select(_):
        value = "pd"
        data = ["pd", "np"]
        return value, data

    dash_duo.start_server(app)



    # Open Popover
    popover_btn = dash_duo.find_element("#btn")
    popover_btn.click()

    select = dash_duo.find_element("#framework-select")
    # assert that there is no value prop in the select
    assert select.get_dom_attribute("value") == ""

    # update select in popover
    update_select_btn = dash_duo.find_element("#update-select")
    update_select_btn.click()

    popover_btn = dash_duo.find_element("#btn")
    popover_btn.click()

    select = dash_duo.find_element("#framework-select")
    # verify that the select value was updated in the callback
    assert select.get_dom_attribute("value") == "pd"

    assert dash_duo.get_logs() == []





