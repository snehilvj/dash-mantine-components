import random
import time
from dash import Dash, html, Output, Input, _dash_renderer, callback, no_update
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def test_001ti_timeline(dash_duo):
    # prepare the timeline items
    timeline_items = [
        dmc.TimelineItem(
            title=char,
            children=dmc.Text(char)
        )
        for char in list('ABCDE')
    ]

    app = Dash()
    app.layout = dmc.MantineProvider(
        html.Div(
            [
                dmc.Button("Shuffle timeline-items", id="button"),
                dmc.Timeline(
                    # active=1,
                    bulletSize=15,
                    lineWidth=2,
                    id="timeline-items",
                    children=timeline_items,
                )
            ]
        )
    )

    @callback(
        Output('timeline-items', 'children'),
        Output('timeline-items', 'active'),
        Input('button', 'n_clicks'),
        prevent_initial_call=True
    )
    def update_output(n_clicks):
        if n_clicks:
            number_displayed = random.randint(0, len(timeline_items))
            return random.sample(timeline_items, number_displayed), random.randint(0, number_displayed)
        else:
            return no_update, no_update

    dash_duo.start_server(app)


    # update timeline
    btn = dash_duo.find_element("#button")
    btn.click()
    time.sleep(1)

    assert dash_duo.get_logs() == []
