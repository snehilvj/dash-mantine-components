import time
from dash import Dash, html, _dash_renderer, callback, Patch, Input, Output
import dash_mantine_components as dmc


_dash_renderer._set_react_version("18.2.0")


def test_001na_notification_autoclose(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        children=[
            dmc.NotificationProvider(),
            dmc.Affix(id='notify-container', position={"bottom": 20, "right": 20}),
            dmc.Button("Load Data", id="show-notification")
        ],
    )

    @callback(
        Output("notify-container", "children"),
        Input("show-notification", "n_clicks"),
        prevent_initial_call=True,
    )
    def notify(n):
        if n < 4:
            nots = Patch()
            nots.append(
                dmc.Notification(
                    id=f"my-notification-{n}",
                    title="Appointment booked",
                    message="Your appointment has been scheduled successfully",
                    color="green",
                    loading=False,
                    action="show",
                    autoClose=3000,
                )
            )
            return nots
        # triggers error which would display all children components without `hide` `onClose` event
        return 1 / 0

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#show-notification", "Load Data")
    button = dash_duo.find_element('#show-notification')
    for i in range(3):
        time.sleep(2)
        button.click()
        nots_holder = dash_duo.find_element(".mantine-Notifications-root[data-position='bottom-right'] > div")
        time.sleep(1)
        children = nots_holder.find_elements_by_xpath('./*')  # Finds all direct children
        assert len(children) == 1

    time.sleep(2)
    button.click()
    nots_holder = dash_duo.find_element(".mantine-Notifications-root[data-position='bottom-right'] > div")
    time.sleep(1)
    children = nots_holder.find_elements_by_xpath('./*')  # Finds all direct children
    assert len(children) == 0

def test_002nu_notification_update(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        children=[
            dmc.NotificationProvider(),
            dmc.Affix(id='notify-container', position={"bottom": 20, "right": 20}),
            dmc.Button("Load Data", id="show-notification")
        ],
    )

    @callback(
        Output("notify-container", "children"),
        Input("show-notification", "n_clicks"),
        prevent_initial_call=True,
    )
    def notify(n):
        nots = dmc.Notification(
                id=f"my-notification",
                message=f"{n} - clicks",
                color="green",
                loading=False,
                action="show" if n == 1 else 'update',
                autoClose=False,
            )
        return nots

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#show-notification", "Load Data")
    button = dash_duo.find_element('#show-notification')
    for i in range(1, 5):
        button.click()
        nots_holder = dash_duo.find_element("#my-notification")
        time.sleep(1)
        assert f'{i} - clicks' in nots_holder.text

def test_003nc_notification_clear(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        children=[
            dmc.NotificationProvider(),
            dmc.Affix(id='notify-container', position={"bottom": 20, "right": 20}),
            dmc.Button("Load Data", id="show-notification")
        ],
    )

    @callback(
        Output("notify-container", "children"),
        Input("show-notification", "n_clicks"),
        prevent_initial_call=True,
    )
    def notify(n):
        nots = dmc.Notification(
                id=f"my-notification",
                message=f"{n} - clicks",
                color="green",
                loading=False,
                action="show" if n == 1 else 'update' if n < 5 else 'clean',
                autoClose=False,
            )
        return nots

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#show-notification", "Load Data")
    button = dash_duo.find_element('#show-notification')
    for i in range(1, 5):
        button.click()
        nots_holder = dash_duo.find_element("#my-notification")
        time.sleep(1)
        assert f'{i} - clicks' in nots_holder.text

    button.click()
    nots_holder = dash_duo.find_element(".mantine-Notifications-root[data-position='bottom-right'] > div")
    time.sleep(1)
    children = nots_holder.find_elements_by_xpath('./*')  # Finds all direct children
    assert len(children) == 0