import dash_mantine_components as dmc
from dash import Dash, Input, Output, State, _dash_renderer, callback

_dash_renderer._set_react_version("19.2.4")


def test_001rn_rolling_number(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        [
            dmc.RollingNumber(id="rn-plain", value=42),
            dmc.RollingNumber(
                id="rn-formatted",
                value=1234.5,
                prefix="$",
                suffix=" USD",
                thousandSeparator=True,
                decimalScale=2,
                fixedDecimalScale=True,
            ),
            dmc.RollingNumber(id="rn-live", value=0, withLiveRegion=True),
            dmc.Button("Increment", id="btn"),
        ]
    )

    @callback(
        Output("rn-plain", "value"),
        Input("btn", "n_clicks"),
        State("rn-plain", "value"),
        prevent_initial_call=True,
    )
    def increment(n_clicks, value):
        return value + 100

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#rn-plain")

    plain = dash_duo.find_element("#rn-plain")
    assert "mantine-RollingNumber-root" in plain.get_attribute("class")
    assert plain.get_attribute("aria-label") == "42"
    assert plain.get_attribute("role") == "img"
    assert len(dash_duo.find_elements("#rn-plain .mantine-RollingNumber-digit")) == 2

    formatted = dash_duo.find_element("#rn-formatted")
    assert formatted.get_attribute("aria-label") == "$1,234.50 USD"

    live = dash_duo.find_element("#rn-live")
    assert live.get_attribute("role") == "status"

    # value updated from a callback re-renders with the new number
    dash_duo.find_element("#btn").click()
    dash_duo.wait_for_element("#rn-plain[aria-label='142']")
    assert len(dash_duo.find_elements("#rn-plain .mantine-RollingNumber-digit")) == 3

    assert dash_duo.get_logs() == []
