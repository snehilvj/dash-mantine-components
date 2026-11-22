import json

import pytest
from dash import Dash, Input, Output, State, _dash_renderer
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys

import dash_mantine_components as dmc

_dash_renderer._set_react_version("19.2.4")


data = [
    {
        "label": "Fruit",
        "value": "fruit",
        "children": [
            {"label": "Apple", "value": "apple"},
            {"label": "Banana", "value": "banana"},
        ],
    },
    {
        "label": "Vegetables",
        "value": "vegetables",
        "children": [{"label": "Carrot", "value": "carrot"}],
    },
]


def option(dash_duo, value):
    # several dropdowns may render options with the same value
    selector = f"div[value='{value}']"
    dash_duo.wait_for_element(selector)
    return next(el for el in dash_duo.find_elements(selector) if el.is_displayed())


def open_dropdown(dash_duo, selector=""):
    # the input is hidden in multiple and checkbox modes unless searchable
    dash_duo.find_element(f"{selector} .mantine-TreeSelect-input").click()


def press_tab(dash_duo):
    ActionChains(dash_duo.driver).send_keys(Keys.TAB).perform()


def value_app(**tree_select_props):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        dmc.Stack(
            [
                dmc.TreeSelect(
                    id="tree-select",
                    data=data,
                    defaultExpandAll=True,
                    **tree_select_props,
                ),
                dmc.Box(id="out"),
            ]
        )
    )

    @app.callback(Output("out", "children"), Input("tree-select", "value"))
    def update(value):
        return json.dumps(value)

    return app


# single mode: select, select a parent, and clear
def test_001ts_tree_select_single(dash_duo):
    app = value_app(clearable=True)
    dash_duo.start_server(app)
    dash_duo.wait_for_text_to_equal("#out", "null")

    dash_duo.find_element("#tree-select").click()
    option(dash_duo, "apple").click()
    dash_duo.wait_for_text_to_equal("#out", '"apple"')

    dash_duo.find_element("#tree-select").click()
    option(dash_duo, "fruit").click()
    dash_duo.wait_for_text_to_equal("#out", '"fruit"')

    dash_duo.find_element(".mantine-InputClearButton-root").click()
    dash_duo.wait_for_text_to_equal("#out", "null")

    assert dash_duo.get_logs() == []


# multiple mode: select and deselect
def test_002ts_tree_select_multiple(dash_duo):
    app = value_app(mode="multiple")
    dash_duo.start_server(app)
    dash_duo.wait_for_text_to_equal("#out", "null")

    open_dropdown(dash_duo)
    option(dash_duo, "apple").click()
    option(dash_duo, "carrot").click()
    dash_duo.wait_for_text_to_equal("#out", '["apple", "carrot"]')

    option(dash_duo, "apple").click()
    dash_duo.wait_for_text_to_equal("#out", '["carrot"]')

    assert dash_duo.get_logs() == []


# checkbox mode: checking a parent cascades according to checkedStrategy
@pytest.mark.parametrize(
    "strategy, expected",
    [
        ("child", '["apple", "banana"]'),
        ("parent", '["fruit"]'),
        ("all", '["apple", "banana", "fruit"]'),
    ],
)
def test_003ts_tree_select_checkbox(dash_duo, strategy, expected):
    app = value_app(mode="checkbox", checkedStrategy=strategy)
    dash_duo.start_server(app)
    dash_duo.wait_for_text_to_equal("#out", "null")

    open_dropdown(dash_duo)
    option(dash_duo, "fruit").click()
    dash_duo.wait_for_text_to_equal("#out", expected)

    # unchecking a child leaves the parent indeterminate
    option(dash_duo, "banana").click()
    dash_duo.wait_for_text_to_equal("#out", '["apple"]')

    assert dash_duo.get_logs() == []


# ensure data and value can be updated in the same callback
def test_004ts_tree_select_update_data_and_value(dash_duo):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        dmc.Box(
            [
                dmc.Button("Update", id="update"),
                dmc.TreeSelect(id="tree-select", data=[], mode="checkbox"),
                dmc.Box(id="out"),
            ]
        )
    )

    @app.callback(
        Output("tree-select", "data"),
        Output("tree-select", "value"),
        Input("update", "n_clicks"),
        prevent_initial_call=True,
    )
    def update_tree_select(_):
        return data, ["carrot"]

    @app.callback(Output("out", "children"), Input("tree-select", "value"))
    def update(value):
        return json.dumps(value)

    dash_duo.start_server(app)
    dash_duo.wait_for_text_to_equal("#out", "null")

    dash_duo.find_element("#update").click()
    dash_duo.wait_for_text_to_equal("#out", '["carrot"]')

    assert dash_duo.get_logs() == []


# values that are not in the new data are removed, in a single callback trigger
def test_005ts_tree_select_data_filters_value(dash_duo):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        [
            dmc.Text(id="triggered"),
            dmc.TreeSelect(
                id="tree-select",
                data=data,
                mode="multiple",
                value=["fruit", "apple", "carrot"],
            ),
            dmc.Button("change data", id="change-data"),
        ]
    )

    @app.callback(
        Output("tree-select", "data"),
        Input("change-data", "n_clicks"),
        prevent_initial_call=True,
    )
    def change_data(_):
        return data[:1]

    @app.callback(
        Output("triggered", "children"),
        Input("tree-select", "value"),
        Input("tree-select", "data"),
        State("triggered", "children"),
    )
    def triggered(value, _, prev):
        return (prev or "") + "|" + json.dumps(value)

    dash_duo.start_server(app)
    dash_duo.wait_for_text_to_equal("#triggered", '|["fruit", "apple", "carrot"]')

    dash_duo.find_element("#change-data").click()

    # parents are kept, and the callback is triggered only once
    dash_duo.wait_for_text_to_equal(
        "#triggered", '|["fruit", "apple", "carrot"]|["fruit", "apple"]'
    )

    assert dash_duo.get_logs() == []


def test_006ts_tree_select_debounce(dash_duo):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        dmc.Stack(
            [
                dmc.Box(id="out-true"),
                dmc.TreeSelect(
                    id="debounce-true",
                    data=data,
                    defaultExpandAll=True,
                    debounce=True,
                ),
                dmc.Box(id="out-false"),
                dmc.TreeSelect(id="debounce-false", data=data, defaultExpandAll=True),
                dmc.Box(id="out-2000"),
                dmc.TreeSelect(
                    id="debounce-2000",
                    data=data,
                    defaultExpandAll=True,
                    debounce=2000,
                ),
                dmc.TreeSelect(
                    id="debounce-clearable",
                    data=data,
                    value="apple",
                    debounce=True,
                    clearable=True,
                    mt="200px",
                ),
                dmc.Box(id="out-clearable"),
            ]
        )
    )

    @app.callback(
        Output("out-true", "children"),
        Output("out-false", "children"),
        Output("out-2000", "children"),
        Output("out-clearable", "children"),
        Input("debounce-true", "value"),
        Input("debounce-false", "value"),
        Input("debounce-2000", "value"),
        Input("debounce-clearable", "value"),
    )
    def update(d_true, d_false, d_2000, d_clearable):
        return (
            json.dumps(d_true),
            json.dumps(d_false),
            json.dumps(d_2000),
            json.dumps(d_clearable),
        )

    dash_duo.start_server(app)
    dash_duo.wait_for_text_to_equal("#out-true", "null")

    # debounce=True: value is only sent when the input loses focus
    elem = dash_duo.find_element("#debounce-true")
    elem.click()
    option(dash_duo, "apple").click()
    with pytest.raises(TimeoutException):
        dash_duo.wait_for_text_to_equal("#out-true", '"apple"', timeout=1)
    press_tab(dash_duo)
    dash_duo.wait_for_text_to_equal("#out-true", '"apple"')

    # debounce=False: value is sent immediately
    dash_duo.find_element("#debounce-false").click()
    option(dash_duo, "banana").click()
    dash_duo.wait_for_text_to_equal("#out-false", '"banana"')

    # debounce=2000: value is sent after the delay
    dash_duo.find_element("#debounce-2000").click()
    option(dash_duo, "carrot").click()
    with pytest.raises(TimeoutException):
        dash_duo.wait_for_text_to_equal("#out-2000", '"carrot"', timeout=1)
    dash_duo.wait_for_text_to_equal("#out-2000", '"carrot"')

    # debounce=True: clearing while unfocused is sent immediately
    dash_duo.wait_for_text_to_equal("#out-clearable", '"apple"')
    dash_duo.find_element(".mantine-InputClearButton-root").click()
    dash_duo.wait_for_text_to_equal("#out-clearable", "null")

    assert dash_duo.get_logs() == []


def test_007ts_tree_select_n_submit_n_blur(dash_duo):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        dmc.Stack(
            [
                dmc.TreeSelect(id="tree-select", data=data, searchable=True),
                dmc.Box(id="out"),
            ]
        )
    )

    @app.callback(
        Output("out", "children"),
        Input("tree-select", "n_submit"),
        Input("tree-select", "n_blur"),
    )
    def update(n_submit, n_blur):
        return f"{n_submit} {n_blur}"

    dash_duo.start_server(app)
    dash_duo.wait_for_text_to_equal("#out", "None None")

    elem = dash_duo.find_element("#tree-select")
    elem.click()
    elem.send_keys(Keys.ESCAPE)
    elem.send_keys(Keys.ENTER)
    dash_duo.wait_for_text_to_equal("#out", "1 None")

    elem.send_keys(Keys.TAB)
    dash_duo.wait_for_text_to_equal("#out", "1 1")

    assert dash_duo.get_logs() == []


def test_008ts_tree_select_clear_search_on_focus(dash_duo):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        dmc.TreeSelect(
            id="tree-select",
            data=data,
            value="apple",
            searchable=True,
            clearSearchOnFocus=True,
        )
    )

    dash_duo.start_server(app)

    dash_duo.wait_for_element("#tree-select[value='Apple']")
    elem = dash_duo.find_element("#tree-select")
    elem.click()
    dash_duo.wait_for_element("#tree-select[value='']")

    assert dash_duo.get_logs() == []


# searchValue, expandedValues and dropdownOpened are published to Dash
def test_009ts_tree_select_state_props(dash_duo):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        dmc.Stack(
            [
                dmc.TreeSelect(id="tree-select", data=data, searchable=True),
                dmc.Box(id="out"),
            ]
        )
    )

    @app.callback(
        Output("out", "children"),
        Input("tree-select", "searchValue"),
        Input("tree-select", "expandedValues"),
        Input("tree-select", "dropdownOpened"),
    )
    def update(search, expanded, opened):
        return json.dumps({"search": search, "expanded": expanded, "opened": opened})

    dash_duo.start_server(app)

    elem = dash_duo.find_element("#tree-select")
    elem.click()
    dash_duo.wait_for_contains_text("#out", '"opened": true')

    dash_duo.find_element("div[value='fruit'] [role='button']").click()
    dash_duo.wait_for_contains_text("#out", '"expanded": ["fruit"]')

    elem.send_keys("car")
    dash_duo.wait_for_contains_text("#out", '"search": "car"')

    elem.send_keys(Keys.ESCAPE)
    dash_duo.wait_for_contains_text("#out", '"opened": false')

    assert dash_duo.get_logs() == []


# searchValue can be set from a callback
def test_010ts_tree_select_search_value_from_callback(dash_duo):
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        dmc.Stack(
            [
                dmc.Button("Search", id="search"),
                dmc.TreeSelect(id="tree-select", data=data, searchable=True),
            ]
        )
    )

    @app.callback(
        Output("tree-select", "searchValue"),
        Input("search", "n_clicks"),
        prevent_initial_call=True,
    )
    def search(_):
        return "Carrot"

    dash_duo.start_server(app)
    dash_duo.find_element("#search").click()
    dash_duo.wait_for_element("#tree-select[value='Carrot']")

    assert dash_duo.get_logs() == []


def test_011ts_tree_select_function_props(dash_duo):
    app = Dash(__name__, assets_folder="../assets")
    app.layout = dmc.MantineProvider(
        dmc.Stack(
            [
                dmc.TreeSelect(
                    id="pills",
                    data=data,
                    mode="multiple",
                    value=["apple", "banana", "carrot"],
                    maxDisplayedValues=1,
                    maxDisplayedValuesContent={"function": "treeSelectOverflow"},
                    renderPill={"function": "treeSelectPill"},
                ),
                dmc.TreeSelect(
                    id="search",
                    data=data,
                    searchable=True,
                    defaultExpandAll=True,
                    nothingFoundMessage="Nothing found",
                    filter={"function": "treeSelectStartsWith"},
                    renderNode={"function": "treeSelectNode"},
                ),
            ]
        )
    )

    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal(".custom-tree-pill", "✔ Apple")
    dash_duo.wait_for_contains_text("body", "+2 hidden")

    elem = dash_duo.find_element("#search")
    elem.click()
    nodes = [el.text for el in dash_duo.find_elements(".custom-tree-node")]
    assert "🌳 Fruit" in nodes
    assert "🌳 Apple" in nodes

    # the default filter matches "an" inside "Banana", startsWith does not
    elem.send_keys("an")
    dash_duo.wait_for_contains_text("body", "Nothing found")
    elem.send_keys(Keys.BACKSPACE, Keys.BACKSPACE, "ba")
    dash_duo.wait_for_text_to_equal(".custom-tree-node", "🌳 Fruit")
    nodes = [el.text for el in dash_duo.find_elements(".custom-tree-node")]
    assert nodes == ["🌳 Fruit", "🌳 Banana"]

    assert dash_duo.get_logs() == []


@pytest.mark.parametrize("prop", ["disabled", "readOnly"])
def test_012ts_tree_select_disabled_read_only(dash_duo, prop):
    app = value_app(mode="multiple", value=["apple"], searchable=True, **{prop: True})
    dash_duo.start_server(app)
    dash_duo.wait_for_text_to_equal("#out", '["apple"]')

    elem = dash_duo.find_element("#tree-select")
    if prop == "disabled":
        assert not elem.is_enabled()
    else:
        elem.click()
        elem.send_keys(Keys.BACKSPACE)
        with pytest.raises(TimeoutException):
            dash_duo.wait_for_text_to_equal("#out", "[]", timeout=1)

    assert dash_duo.get_logs() == []
