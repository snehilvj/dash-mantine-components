from dash import Dash, html,  callback, Output, Input
import dash_mantine_components as dmc
import dash.testing.wait as wait
import time

from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys


def test_clp001_clipboard_text(dash_duo):
    copy_text = "Hello, Dash!"
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(html.Div(
        [
            dmc.CopyButton(
                id="copy_button",
                value=copy_text,
                children="copy",
                copiedChildren="copied",
                color="red",
                copiedColor="green"

            ),
            dmc.Textarea(id="paste"),
        ]
    ))
    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#copy_button", "copy")

    dash_duo.find_element("#copy_button").click()

    # check that button children updates during copy
    dash_duo.wait_for_text_to_equal("#copy_button", "copied")

    dash_duo.find_element("#paste").click()
    ActionChains(dash_duo.driver).key_down(Keys.CONTROL).send_keys("v").key_up(
        Keys.CONTROL
    ).perform()

    wait.until(
        lambda: dash_duo.find_element("#paste").get_attribute("value")
        == copy_text,
        timeout=3,
    )


def test_clp002_clipboard_text(dash_duo):
    copy_text = "Copy this text to the clipboard using a separate button"
    app = Dash(__name__, prevent_initial_callbacks=True)
    app.layout = dmc.MantineProvider(html.Div(
        [
            dmc.CopyButton(id="copy_button", value="default", n_clicks=0, children="copy", copiedChildren="copied"),
            dmc.Textarea(id="paste"),
            dmc.Button("update Copy", id="copy_update", n_clicks=0),
        ]
    ))

    @callback(
        Output("copy_button", "value"),
        Output("copy_button", "triggerCopy"),
        Input("copy_update", "n_clicks"),
        prevent_initial_call=True,
    )
    def update_copy(n):
        return copy_text, True

    dash_duo.start_server(app)

    dash_duo.find_element("#copy_update").click()
    dash_duo.find_element("#paste").click()
    ActionChains(dash_duo.driver).key_down(Keys.CONTROL).send_keys("v").key_up(
        Keys.CONTROL
    ).perform()

    wait.until(
        lambda: dash_duo.find_element("#paste").get_attribute("value")
        == copy_text,
        timeout=3,
    )