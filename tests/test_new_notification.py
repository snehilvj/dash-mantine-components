import time
from dash import Dash, html, _dash_renderer, callback, Patch, Input, Output, no_update, set_props, clientside_callback
import dash_mantine_components as dmc
from dash.testing.wait import until
import json


_dash_renderer._set_react_version("18.2.0")


def test_001na_notification_new_noreopen(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        children=[
            dmc.NotificationContainer(id='notify-container'),
            dmc.Button("Load Data", id="show-notification")
        ],
    )

    @callback(
        Output("notify-container", "sendNotifications"),
        Input("show-notification", "n_clicks"),
        prevent_initial_call=True,
    )
    def notify(n):
        if n < 4:
            nots = [
                dict(
                    id=f"my-notification-{n}",
                    title="Appointment booked",
                    message="Your appointment has been scheduled successfully",
                    color="green",
                    loading=False,
                    autoClose=3000,
                )
            ]
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

def test_002nu_notification_new_update(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        children=[
            dmc.NotificationContainer(id='notify-container'),
            dmc.Button("Load Data", id="show-notification")
        ],
    )

    @callback(
        Output("notify-container", "sendNotifications"),
        Input("show-notification", "n_clicks"),
        prevent_initial_call=True,
    )
    def notify(n):
        base_not = dict(id=f"my-notification",message=f"{n} - clicks", color="green", loading=False, autoClose=False)
        if n == 1:
            return [base_not]
        return [{**base_not, 'action': 'update'}]

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#show-notification", "Load Data")
    button = dash_duo.find_element('#show-notification')
    for i in range(1, 5):
        button.click()
        nots_holder = dash_duo.find_element("#my-notification")
        time.sleep(1)
        assert f'{i} - clicks' in nots_holder.text

def test_003nc_notification_new_clear(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        children=[
            dmc.NotificationContainer(id='notify-container'),
            dmc.Button("Load Data", id="show-notification")
        ],
    )

    @callback(
        Output("notify-container", "sendNotifications"),
        Input("show-notification", "n_clicks"),
        prevent_initial_call=True,
    )
    def notify(n):
        base_not = dict(id=f"my-notification", message=f"{n} - clicks", color="green", loading=False, autoClose=False)
        if n == 1:
            return [base_not]
        elif n<5:
            return [{**base_not, 'action': 'update'}]
        set_props('notify-container', {'clean': True})
        return no_update

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

def test_004nc_notification_new_clearQueue_store(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        children=[
            dmc.NotificationContainer(id='notify-container', limit=3),
            dmc.Button("Load Data", id="show-notification"),
            html.Div(id='notification_store', children='{}'),
            dmc.Button(id='fetch_notification_store')
        ],
    )

    clientside_callback(
        """(n) => {
            if (n == 8) {
                dash_mantine_components.appNotifications.api.clean()
            }
        }""",
        Input("show-notification", "n_clicks"),
    )

    @callback(
        Output("notify-container", "sendNotifications"),
        Input("show-notification", "n_clicks"),
        prevent_initial_call=True,
    )
    def notify(n):
        base_not = dict(id=f"my-notification-{n}", message=f"{n} - clicks", color="green", loading=False, autoClose=False)
        if n<7:
            return [base_not]
        if n==7:
            set_props('notify-container', {'cleanQueue': True})
        return no_update

    clientside_callback(
        """(n) => {
            return JSON.stringify(dash_mantine_components.appNotifications.store)
        }""",
        Output('notification_store', 'children'),
        Input('fetch_notification_store', 'n_clicks')
    )

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#show-notification", "Load Data")
    button = dash_duo.find_element('#show-notification')
    fetch = dash_duo.find_element('#fetch_notification_store')
    for i in range(1, 8):
        button.click()
        if i < 4:
            until(lambda: f'{i} - clicks' in dash_duo.find_element(f"#my-notification-{i}").text, 3)
            fetch.click()
            until(lambda: len(json.loads(dash_duo.find_element(f"#notification_store").text).get('notifications', [])) == i, 30)
        elif i < 7:
            time.sleep(1)
            fetch.click()
            until(lambda: len(json.loads(dash_duo.find_element(f"#notification_store").text).get('queue', [])) == i-3, 3)
        else:
            time.sleep(1)
            fetch.click()
            until(lambda: len(json.loads(dash_duo.find_element(f"#notification_store").text).get('queue', [])) == 0, 3)

    button.click()
    nots_holder = dash_duo.find_element(".mantine-Notifications-root[data-position='bottom-right'] > div")
    time.sleep(1)
    fetch.click()
    until(lambda: len(json.loads(dash_duo.find_element(f"#notification_store").text).get('notifications', [])) == 0, 30)
    children = nots_holder.find_elements_by_xpath('./*')  # Finds all direct children
    assert len(children) == 0