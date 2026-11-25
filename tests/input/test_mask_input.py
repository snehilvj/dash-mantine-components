import dash_mantine_components as dmc
from dash import Dash, Input, Output, _dash_renderer, callback, html
from selenium.webdriver.common.keys import Keys

_dash_renderer._set_react_version("19.2.4")


def test_001mi_mask_input(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        [
            dmc.MaskInput(id="phone", mask="(999) 999-9999", label="Phone"),
            dmc.MaskInput(id="prefilled", mask="(999) 999-9999", value="5551234567"),
            dmc.Button("Clear", id="clear"),
            html.Div(id="out"),
            html.Div(id="out-prefilled"),
        ]
    )

    @callback(
        Output("out", "children"),
        Input("phone", "value"),
        Input("phone", "maskedValue"),
        Input("phone", "complete"),
    )
    def show(value, masked, complete):
        return f"{value}|{masked}|{complete}"

    @callback(
        Output("out-prefilled", "children"),
        Input("prefilled", "maskedValue"),
        Input("prefilled", "complete"),
    )
    def show_prefilled(masked, complete):
        return f"{masked}|{complete}"

    @callback(Output("phone", "value"), Input("clear", "n_clicks"), prevent_initial_call=True)
    def clear(_):
        return ""

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#phone")

    # prefilled raw value is formatted and reported as complete on load
    dash_duo.wait_for_text_to_equal("#out-prefilled", "(555) 123-4567|True")
    assert dash_duo.find_element("#prefilled").get_attribute("value") == "(555) 123-4567"

    phone = dash_duo.find_element("#phone")

    # letters are rejected, digits fill the slots, maskedValue matches what is displayed
    phone.send_keys("ab555")
    dash_duo.wait_for_text_to_equal("#out", "555|(555) ___-____|False")

    phone.send_keys("1234567")
    dash_duo.wait_for_text_to_equal("#out", "5551234567|(555) 123-4567|True")

    # extra characters are ignored once the mask is full
    phone.send_keys("99")
    dash_duo.wait_for_text_to_equal("#out", "5551234567|(555) 123-4567|True")

    # deleting a character makes it incomplete again
    phone.send_keys(Keys.BACKSPACE)
    dash_duo.wait_for_text_to_equal("#out", "555123456|(555) 123-456_|False")

    # value set from a callback clears the input
    dash_duo.find_element("#clear").click()
    dash_duo.wait_for_text_to_equal("#out", "||False")
    assert dash_duo.find_element("#phone").get_attribute("value") in ("", "(___) ___-____")

    assert dash_duo.get_logs() == []


def test_002mi_mask_input_tokens_transform(dash_duo):
    app = Dash(__name__, assets_folder="../assets")

    app.layout = dmc.MantineProvider(
        [
            # custom token from a regex string
            dmc.MaskInput(id="hex", mask="\\#hhhhhh", tokens={"h": "[0-9a-fA-F]"}),
            # function transform via dashMantineFunctions
            dmc.MaskInput(id="plate", mask="AAA-9999", transform={"function": "toUpper"}),
            # optional segment after "?"
            dmc.MaskInput(id="ext", mask="99-99?-99"),
            html.Div(id="out"),
        ]
    )

    @callback(
        Output("out", "children"),
        Input("hex", "value"),
        Input("plate", "maskedValue"),
        Input("ext", "complete"),
    )
    def show(hex_value, plate, ext_complete):
        return f"{hex_value}|{plate}|{ext_complete}"

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#hex")

    dash_duo.find_element("#hex").send_keys("zz1a2Bg3")
    dash_duo.find_element("#plate").send_keys("abc1234")
    dash_duo.find_element("#ext").send_keys("1234")

    dash_duo.wait_for_text_to_equal("#out", "1a2B3|ABC-1234|True")

    assert dash_duo.get_logs() == []


def test_003mi_mask_input_modify(dash_duo):
    app = Dash(__name__, assets_folder="../assets")

    app.layout = dmc.MantineProvider(
        [
            # Amex: modify swaps to the 15-digit 4-6-5 mask once the prefix matches
            dmc.MaskInput(
                id="amex",
                mask="9999 9999 9999 9999",
                modify={"function": "cardMask"},
            ),
            # Non-Amex: modify returns undefined, the default 16-digit mask stays
            dmc.MaskInput(
                id="visa",
                mask="9999 9999 9999 9999",
                modify={"function": "cardMask"},
            ),
            html.Div(id="out"),
        ]
    )

    @callback(
        Output("out", "children"),
        Input("amex", "maskedValue"),
        Input("amex", "complete"),
        Input("visa", "maskedValue"),
        Input("visa", "complete"),
    )
    def show(amex_masked, amex_complete, visa_masked, visa_complete):
        return f"{amex_masked}|{amex_complete}||{visa_masked}|{visa_complete}"

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#amex")

    dash_duo.find_element("#amex").send_keys("371234567890123")
    dash_duo.find_element("#visa").send_keys("4111111111111111")

    dash_duo.wait_for_text_to_equal(
        "#out",
        "3712 345678 90123|True||4111 1111 1111 1111|True",
    )

    assert dash_duo.get_logs() == []


def test_004mi_mask_input_submit_blur(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider(
        [
            dmc.MaskInput(id="phone", mask="(999) 999-9999", label="Phone"),
            html.Div(id="out"),
        ]
    )

    @callback(
        Output("out", "children"),
        Input("phone", "n_submit"),
        Input("phone", "n_blur"),
    )
    def show(n_submit, n_blur):
        return f"{n_submit}|{n_blur}"

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#phone")

    # event counters are unset until the first event fires
    dash_duo.wait_for_text_to_equal("#out", "None|None")

    phone = dash_duo.find_element("#phone")
    phone.send_keys("5551234567")

    # Enter increments n_submit
    phone.send_keys(Keys.ENTER)
    dash_duo.wait_for_text_to_equal("#out", "1|None")

    # losing focus increments n_blur
    phone.send_keys(Keys.TAB)
    dash_duo.wait_for_text_to_equal("#out", "1|1")

    assert dash_duo.get_logs() == []

