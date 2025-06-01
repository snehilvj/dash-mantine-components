
import dash_mantine_components as dmc
from dash import Dash


def test_001fu_funtions_as_props(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider([
        dmc.Slider(labelAlwaysOn=True,value=25, p=50, label={"function": "myLabel"}),
        dmc.Slider(labelAlwaysOn=True,min=-50, max=50, value=10, p=50, label={"function": "myLabelComponent"}),
        dmc.Slider(labelAlwaysOn=True,value=25, p=50, label={"function": "labelFormatter", "options": {"suffix": " °F"}}),
        dmc.Slider(labelAlwaysOn=True, min=1, max=30, value=10, p=50, scale={"function": "getScale"}),


       dmc.DatePickerInput(
            disabledDates={"function": "excludeDate"},
            value="2025-11-07",
            popoverProps={"opened": True},
        ),
        dmc.DatePickerInput(
            value="2024-11-05",
            disabledDates=["2024-11-04", "2024-11-06"],
            popoverProps={"opened": True},
            mt=400
        ),
    ])


    dash_duo.start_server(app)

    # Collect all visible slider labels
    labels = dash_duo.find_elements('.mantine-Slider-label')

    assert labels[0].text == "25 °C"
    assert labels[1].text == "10"
    assert labels[2].text == "25 °F"
    assert labels[3].text == "1024"

    inner = labels[1].find_element("tag name", "div")
    style = inner.get_attribute("style")
    assert "color: red" in style
    assert "font-size: 16px" in style


    # List of dates to test (as shown in aria-label)
    disabled_dates = [
        "4 November 2024",
        "6 November 2024",
        "6 November 2025",
        "8 November 2025"
    ]

    for label in disabled_dates:
        dash_duo.wait_for_element(f"button[aria-label='{label}']")
        day_button = dash_duo.find_element(f"button[aria-label='{label}']")

        assert day_button.get_attribute("data-disabled") == "true", f"{label} not marked data-disabled"
        assert day_button.get_attribute("disabled") is not None, f"{label} not actually disabled"

    assert dash_duo.get_logs() == []


