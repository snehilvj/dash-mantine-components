
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
        dmc.NumberInput(label="X position", min=0, max=100, value=0, id="x-position"),
    ])

    app.layout = dmc.MantineProvider([
        controls,
        component
    ])

    @app.callback(
        Output("scrollArea", "scrollTo"),
        Input("x-position", "value"),
        Input("y-position", "value"),

    )
    def scroll_to(x, y):
       return {"top": y, "left": x}

    dash_duo.start_server(app)

    section_1 = dash_duo.find_element("#section-1")
    initial_location_section_y = section_1.location['y']
    initial_location_section_x = section_1.location['y']

    y_input = dash_duo.find_element("#y-position")
    y_input.send_keys("50")
    x_input = dash_duo.find_element("#x-position")
    x_input.send_keys("50")
    time.sleep(.5)

    updated_location_section_y = section_1.location['y']
    updated_location_section_x = section_1.location['x']
    assert updated_location_section_y < initial_location_section_y
    assert updated_location_section_x < initial_location_section_x

    assert dash_duo.get_logs() == []




