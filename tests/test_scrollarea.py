
import time
from dash import Dash, html, _dash_renderer, Input, Output

import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def test_001sc_scrollarea_scrollto(dash_duo):
    app = Dash(__name__)

    component = dmc.ScrollArea(
        h=250,
        w=350,
        id="scrollArea",
        children=[
            dmc.Paper(
                w=600,
                children=[
                    dmc.Title(f"Section {i}", order=3, mt="lg", id=f"section-{i}"),
                    dmc.Text("This is a sentence.   " * 10)
                ]
            )
            for i in range(10)
        ]

    )

    controls = dmc.Group([
        dmc.NumberInput(label="Y position", min=0, max=100, value=0, id="y-position"),
        dmc.Button("scroll to section 9", id="element-id", n_clicks=0)
    ])

    app.layout = dmc.MantineProvider([
        controls,
        component
    ])

    @app.callback(
        Output("scrollArea", "scrollTo"),
        Input("y-position", "value"),
        Input("element-id", "n_clicks")
    )
    def scroll_to(y, n):
        if n > 0:
            return {"element": "#section-9"}
        return {"top": y}

    dash_duo.start_server(app)

    section_1 = dash_duo.find_element("#section-1")
    initial_location_section1 = section_1.location['y']

    y_input = dash_duo.find_element("#y-position")
    y_input.send_keys("50")
    time.sleep(.5)

    updated_location_section1 = section_1.location['y']
    assert updated_location_section1 < initial_location_section1

    section_9 = dash_duo.find_element("#section-9")
    initial_location_section9 = section_9.location['y']

    dash_duo.find_element("#element-id").click()
    time.sleep(.5)
    updated_location_section9 = section_9.location['y']
    assert updated_location_section9 < initial_location_section9

    assert dash_duo.get_logs() == []




