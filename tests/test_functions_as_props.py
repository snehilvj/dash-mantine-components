
import dash_mantine_components as dmc
from dash import Dash


def test_001fu_funtions_as_props(dash_duo):
    app = Dash(__name__)

    app.layout = dmc.MantineProvider([
        dmc.Slider(labelAlwaysOn=True,value=25, p=50, label={"function": "myLabel"}),
        dmc.Slider(labelAlwaysOn=True,min=-50, max=50, value=10, p=50, label={"function": "myLabelComponent"}),
        dmc.Slider(labelAlwaysOn=True,value=25, p=50, label={"function": "labelFormatter", "options": {"suffix": " °F"}}),
        dmc.Slider(labelAlwaysOn=True, min=1, max=30, value=10, p=50, scale={"function": "getScale"})
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

    assert dash_duo.get_logs() == []


