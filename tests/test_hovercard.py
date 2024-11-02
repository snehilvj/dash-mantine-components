from dash import Dash, html, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")

def test_001ho_hovercard(dash_duo):
    app = Dash(__name__)

    def make_component(boxWrapperProps, id):
        return dmc.HoverCard(
            [
                dmc.HoverCardTarget(
                    dmc.Button("trigger", fullWidth=True),
                    boxWrapperProps=boxWrapperProps,
                ),
                dmc.HoverCardDropdown(["hover content"]),
            ], id=id
        )

    app.layout = dmc.MantineProvider(
        html.Div([
            make_component(None, "hover1"),
            make_component({"w": "100%"}, "hover2")
        ], style={"color": "yellow"})
    )

    dash_duo.start_server(app)


    # Locate the first component
    element = dash_duo.find_element("#hover1-target")

    # Verify the HoverTargetCard has the default style
    style_attribute = element.get_attribute("style")
    assert style_attribute == "width: fit-content;"

    # Locate the second component
    element = dash_duo.find_element("#hover2-target")

    # Verify the HoverTargetCard has the styles passed from boxWrapperProps
    style_attribute = element.get_attribute("style")
    assert style_attribute == "width: 100%;"

    assert dash_duo.get_logs() == []