from dash import Dash, html
import dash_mantine_components as dmc
from time import sleep
from selenium.common.exceptions import NoSuchElementException
import pytest


def test_alert_simple(dash_duo):
    app = Dash()

    app.layout = html.Div(
        [
            dmc.Alert(
                "Message",
                title="Title",
                color="red",
                show=True,
                id="alert",
                duration=400,
            ),
        ]
    )

    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal(".mantine-Alert-label", "Title")
    dash_duo.wait_for_text_to_equal(".mantine-Alert-message", "Message")

    sleep(0.4)

    with pytest.raises(NoSuchElementException):
        dash_duo.find_element("#alert")
