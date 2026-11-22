import pytest
from dash import Dash, Input, Output, _dash_renderer

import dash_mantine_components as dmc

_dash_renderer._set_react_version("19.2.4")


def test_001dl_semantics_and_defaults(dash_duo):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        dmc.DataList(
            [
                dmc.DataListItem(
                    [
                        dmc.DataListItemLabel("Name", id="name-label", fw=700),
                        dmc.DataListItemValue("John Doe", id="name-value"),
                    ],
                    id="name-item",
                    **{"data-testid": "name"},
                ),
                dmc.DataListItem(
                    [
                        dmc.DataListItemLabel(dmc.Text("Email", span=True)),
                        dmc.DataListItemValue(
                            dmc.Anchor(
                                "john@example.com",
                                href="mailto:john@example.com",
                                id="email-link",
                            ),
                            id="email-value",
                        ),
                    ],
                    id="email-item",
                ),
            ],
            id="data-list",
            w=400,
            **{"aria-label": "User details"},
        )
    )

    dash_duo.start_server(app)
    root = dash_duo.wait_for_element("#data-list")
    assert root.tag_name == "dl"
    assert root.get_attribute("aria-label") == "User details"
    assert root.get_attribute("data-orientation") == "horizontal"
    assert root.get_attribute("data-with-divider") is None
    assert root.value_of_css_property("font-size") == "14px"
    assert root.value_of_css_property("gap") == "12px"
    assert root.value_of_css_property("width") == "400px"
    assert len(dash_duo.find_elements("#data-list > div")) == 2
    assert len(dash_duo.find_elements("#data-list > div > dt")) == 2
    assert len(dash_duo.find_elements("#data-list > div > dd")) == 2
    label = dash_duo.find_element("#name-label")
    assert label.text == "Name"
    assert label.value_of_css_property("min-width") == "120px"
    assert label.value_of_css_property("font-weight") == "700"
    assert dash_duo.find_element("#name-value").text == "John Doe"
    assert dash_duo.find_element("#name-item").get_attribute("data-testid") == "name"
    assert (
        dash_duo.find_element("#name-item").value_of_css_property("flex-direction")
        == "row"
    )
    assert (
        dash_duo.find_element("#email-item").value_of_css_property("border-top-width")
        == "0px"
    )
    assert (
        dash_duo.find_element("#email-link").get_attribute("href")
        == "mailto:john@example.com"
    )
    assert dash_duo.get_logs() == []


@pytest.mark.parametrize(
    "size,font_size,gap,expected_gap,label_width",
    [
        ("xs", 12, 20, 20, 160),
        ("sm", 14, "lg", 20, "160px"),
        ("md", 16, "24px", 24, 160),
        ("lg", 18, 0, 0, "10rem"),
        ("xl", 20, "2rem", 32, 160),
    ],
)
def test_002dl_size_spacing_and_label_width(
    dash_duo, size, font_size, gap, expected_gap, label_width
):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        dmc.DataList(
            dmc.DataListItem(
                [
                    dmc.DataListItemLabel("Name", id="label"),
                    dmc.DataListItemValue("John Doe", id="value"),
                ]
            ),
            id="data-list",
            size=size,
            gap=gap,
            labelWidth=label_width,
        )
    )

    dash_duo.start_server(app)
    root = dash_duo.wait_for_element("#data-list")
    assert root.value_of_css_property("gap") == f"{expected_gap}px"
    for selector in ("#data-list", "#label", "#value"):
        element = dash_duo.find_element(selector)
        assert element.value_of_css_property("font-size") == f"{font_size}px"
        assert float(element.value_of_css_property("line-height")[:-2]) > font_size
    assert dash_duo.find_element("#label").value_of_css_property("min-width") == "160px"
    assert dash_duo.get_logs() == []


def test_003dl_update_layout_and_content(dash_duo):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        [
            dmc.DataList(
                [
                    dmc.DataListItem(
                        [
                            dmc.DataListItemLabel("Name", id="label"),
                            dmc.DataListItemValue("John Doe", id="value"),
                        ],
                        id="first-item",
                    ),
                    dmc.DataListItem(
                        [
                            dmc.DataListItemLabel("Role"),
                            dmc.DataListItemValue("Engineer"),
                        ],
                        id="second-item",
                    ),
                ],
                id="data-list",
                w=400,
            ),
            dmc.Button("Toggle layout", id="toggle"),
        ]
    )

    @app.callback(
        Output("data-list", "orientation"),
        Output("data-list", "withDivider"),
        Output("data-list", "size"),
        Output("data-list", "gap"),
        Output("data-list", "labelWidth"),
        Output("label", "children"),
        Output("value", "children"),
        Input("toggle", "n_clicks"),
        prevent_initial_call=True,
    )
    def update_list(n_clicks):
        if n_clicks % 2:
            return "vertical", True, "lg", 24, 180, "Status", dmc.Badge("Active")
        return "horizontal", False, "sm", "sm", 120, "Name", "John Doe"

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#data-list")
    dash_duo.find_element("#toggle").click()
    dash_duo.wait_for_text_to_equal("#value", "ACTIVE")
    root = dash_duo.find_element("#data-list")
    first_item = dash_duo.find_element("#first-item")
    second_item = dash_duo.find_element("#second-item")
    assert root.get_attribute("data-orientation") == "vertical"
    assert root.get_attribute("data-with-divider") is not None
    assert root.value_of_css_property("font-size") == "18px"
    assert root.value_of_css_property("gap") == "0px"
    assert first_item.value_of_css_property("flex-direction") == "column"
    assert first_item.value_of_css_property("border-top-width") == "0px"
    assert second_item.value_of_css_property("border-top-width") == "1px"
    assert second_item.value_of_css_property("padding-top") == "24px"
    assert second_item.value_of_css_property("margin-top") == "24px"
    assert dash_duo.find_element("#label").text == "Status"
    assert len(dash_duo.find_elements("#value .mantine-Badge-root")) == 1
    assert (
        dash_duo.find_element("#value").rect["y"]
        > dash_duo.find_element("#label").rect["y"]
    )
    assert "--data-list-label-width: 180px" in root.get_attribute("style")

    dash_duo.find_element("#toggle").click()
    dash_duo.wait_for_text_to_equal("#value", "John Doe")
    assert root.get_attribute("data-orientation") == "horizontal"
    assert root.get_attribute("data-with-divider") is None
    assert root.value_of_css_property("font-size") == "14px"
    assert root.value_of_css_property("gap") == "12px"
    assert first_item.value_of_css_property("flex-direction") == "row"
    assert second_item.value_of_css_property("border-top-width") == "0px"
    assert dash_duo.find_element("#label").text == "Name"
    assert dash_duo.find_element("#label").value_of_css_property("min-width") == "120px"
    assert dash_duo.get_logs() == []


def test_004dl_styles_api_and_unstyled(dash_duo):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        [
            dmc.DataList(
                dmc.DataListItem(
                    [
                        dmc.DataListItemLabel(
                            "Name",
                            id="label",
                            className="custom-label",
                            styles={"itemLabel": {"fontWeight": 700}},
                        ),
                        dmc.DataListItemValue(
                            "John Doe", id="value", p=4, style={"opacity": 0.75}
                        ),
                    ],
                    id="item",
                    classNames={"item": "local-item"},
                    styles={"item": {"paddingLeft": 10}},
                ),
                id="data-list",
                classNames={
                    "root": "list-root",
                    "item": "list-item",
                    "itemLabel": "list-label",
                    "itemValue": "list-value",
                },
                styles={
                    "root": {"backgroundColor": "rgb(240, 240, 240)"},
                    "item": {"borderRadius": 8},
                    "itemLabel": {"color": "rgb(255, 0, 0)"},
                    "itemValue": {"color": "rgb(0, 0, 255)"},
                },
                attributes={"itemValue": {"data-testid": "styled-value"}},
            ),
            dmc.DataList(
                dmc.DataListItem(
                    [
                        dmc.DataListItemLabel("Label"),
                        dmc.DataListItemValue("Value"),
                    ],
                    id="bare-item",
                ),
                id="bare-list",
                unstyled=True,
                className="bare-list",
            ),
        ]
    )

    dash_duo.start_server(app)
    root = dash_duo.wait_for_element("#data-list")
    for selector, class_name in (
        ("#data-list", "list-root"),
        ("#item", "list-item"),
        ("#item", "local-item"),
        ("#label", "list-label"),
        ("#label", "custom-label"),
        ("#value", "list-value"),
    ):
        assert (
            class_name in dash_duo.find_element(selector).get_attribute("class").split()
        )
    assert root.value_of_css_property("background-color") == "rgba(240, 240, 240, 1)"
    assert (
        dash_duo.find_element("#item").value_of_css_property("border-radius") == "8px"
    )
    assert (
        dash_duo.find_element("#item").value_of_css_property("padding-left") == "10px"
    )
    label = dash_duo.find_element("#label")
    assert label.value_of_css_property("color") == "rgba(255, 0, 0, 1)"
    assert label.value_of_css_property("font-weight") == "700"
    value = dash_duo.find_element("#value")
    assert value.value_of_css_property("color") == "rgba(0, 0, 255, 1)"
    assert value.value_of_css_property("padding-top") == "4px"
    assert value.value_of_css_property("opacity") == "0.75"
    assert value.get_attribute("data-testid") == "styled-value"
    assert (
        "bare-list"
        in dash_duo.find_element("#bare-list").get_attribute("class").split()
    )
    assert (
        dash_duo.find_element("#bare-list").value_of_css_property("display") == "block"
    )
    assert (
        dash_duo.find_element("#bare-item").value_of_css_property("display") == "block"
    )
    assert dash_duo.get_logs() == []
