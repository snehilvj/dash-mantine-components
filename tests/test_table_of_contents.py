import dash
from dash import Dash, html, callback, Input, Output, _dash_renderer
import dash_mantine_components as dmc

_dash_renderer._set_react_version("18.2.0")


def _get_toc_items(dash_duo):
    return dash_duo.find_elements("a.mantine-TableOfContents-control")


def make_section(i, page):
    return dmc.Box(
        [
            dmc.Title(children=f"{page} Title {i}", id=f"title-{i}", order=2),
            dmc.Space(h=300),
        ],
        p="lg",
    )


def test_001ta_table_of_contents_multipage(dash_duo):
    app = Dash(use_pages=True, pages_folder="")

    aside = dmc.AppShellAside(
        children=dmc.Stack(
            children=[
                dmc.Space(h=50),
                dmc.Text("Table of contents"),
                dmc.TableOfContents(variant="filled", id="toc"),
            ]
        ),
        px="lg",
    )

    dash.register_page(
        "home",
        path="/",
        layout=html.Div([make_section(i, "home") for i in range(3)]),
    )
    dash.register_page(
        "page1",
        path="/page-1",
        layout=html.Div([make_section(i, "page1") for i in range(3)]),
    )

    app.layout = dmc.MantineProvider(
        children=dmc.AppShell(
            [
                dmc.AppShellNavbar(
                    [
                        dmc.NavLink(label="Home", href="/", id="home"),
                        dmc.NavLink(label="Page 1", href="/page-1", id="page-1"),
                    ]
                ),
                dmc.AppShellMain(dash.page_container),
                aside,
            ],
            navbar={"width": 200},
        ),
    )

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#title-0", "home Title 0")

    toc_items = _get_toc_items(dash_duo)
    assert len(toc_items) == 3

    toc_texts = [item.text for item in toc_items]
    assert toc_texts == [
        "home Title 0",
        "home Title 1",
        "home Title 2",
    ]

    dash_duo.find_element("#page-1").click()
    dash_duo.wait_for_text_to_equal("#title-0", "page1 Title 0")

    toc_items = _get_toc_items(dash_duo)
    assert len(toc_items) == 3

    toc_texts = [item.text for item in toc_items]
    assert toc_texts == [
        "page1 Title 0",
        "page1 Title 1",
        "page1 Title 2",
    ]

    assert dash_duo.get_logs() == []


def test_002ta_table_of_contents_target_id(dash_duo):
    app = Dash()

    component = dmc.AppShell(
        dmc.AppShellMain(
            [
                dmc.Tabs(
                    [
                        dmc.TabsList(
                            [
                                dmc.TabsTab("Tab one", value="1"),
                                dmc.TabsTab("Tab two", value="2", id="tab2"),
                            ]
                        ),
                    ],
                    id="tabs-example",
                    value="1",
                ),
                html.Div(id="tabs-content"),
                dmc.AppShellAside(
                    dmc.TableOfContents(id="toc", target_id="tabs-content")
                ),
            ]
        )
    )

    app.layout = dmc.MantineProvider(component)

    @callback(Output("tabs-content", "children"), Input("tabs-example", "value"))
    def render_content(active):
        if active == "1":
            return html.Div([make_section(i, "Tab1") for i in range(3)])
        else:
            return html.Div([make_section(i, "Tab2") for i in range(3)])

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#title-0", "Tab1 Title 0")

    toc_items = _get_toc_items(dash_duo)
    assert len(toc_items) == 3

    toc_texts = [item.text for item in toc_items]
    assert toc_texts == [
        "Tab1 Title 0",
        "Tab1 Title 1",
        "Tab1 Title 2",
    ]

    dash_duo.find_element("#tab2").click()
    dash_duo.wait_for_text_to_equal("#title-0", "Tab2 Title 0")

    toc_items = _get_toc_items(dash_duo)
    assert len(toc_items) == 3

    toc_texts = [item.text for item in toc_items]
    assert toc_texts == [
        "Tab2 Title 0",
        "Tab2 Title 1",
        "Tab2 Title 2",
    ]

    assert dash_duo.get_logs() == []


def test_003ta_table_of_contents_reinitialize(dash_duo):
    app = Dash()

    component = dmc.AppShell(
        dmc.AppShellMain(
            [
                dmc.Tabs(
                    [
                        dmc.TabsList(
                            [
                                dmc.TabsTab("Tab one", value="1"),
                                dmc.TabsTab("Tab two", value="2", id="tab2"),
                            ]
                        ),
                    ],
                    id="tabs-example",
                    value="1",
                ),
                html.Div(id="tabs-content"),
                dmc.AppShellAside(dmc.TableOfContents(id="toc")),
            ]
        )
    )

    app.layout = dmc.MantineProvider(component)

    @callback(
        Output("tabs-content", "children"),
        Output("toc", "refresh"),
        Input("tabs-example", "value"),
    )
    def render_content(active):
        if active == "1":
            return html.Div([make_section(i, "Tab1") for i in range(3)]), True
        else:
            return html.Div([make_section(i, "Tab2") for i in range(3)]), True

    dash_duo.start_server(app)

    # Wait for the app to load
    dash_duo.wait_for_text_to_equal("#title-0", "Tab1 Title 0")

    toc_items = _get_toc_items(dash_duo)
    assert len(toc_items) == 3

    toc_texts = [item.text for item in toc_items]
    assert toc_texts == [
        "Tab1 Title 0",
        "Tab1 Title 1",
        "Tab1 Title 2",
    ]

    dash_duo.find_element("#tab2").click()
    dash_duo.wait_for_text_to_equal("#title-0", "Tab2 Title 0")

    toc_items = _get_toc_items(dash_duo)
    assert len(toc_items) == 3

    toc_texts = [item.text for item in toc_items]
    assert toc_texts == [
        "Tab2 Title 0",
        "Tab2 Title 1",
        "Tab2 Title 2",
    ]

    assert dash_duo.get_logs() == []
