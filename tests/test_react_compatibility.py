import os
import subprocess
import sys
from pathlib import Path

import pytest
from dash import Dash, Input, Output, _dash_renderer

import dash_mantine_components as dmc

REACT_ERROR = (
    "Dash Mantine Components v3 requires React >=19.2.4; " "detected React 18.3.1"
)


def _error_message(dash_duo):
    dash_duo.wait_for_element(".dash-fe-error__title")
    return dash_duo.driver.execute_script("""
        const titles = [...document.querySelectorAll(".dash-fe-error__title")];
        return titles.map(element => element.textContent).join("\\n");
        """)


def test_react_compatibility_export_contract():
    result = subprocess.run(
        [
            "node",
            "--test",
            "tests/js/reactCompatibility.test.js",
        ],
        cwd=Path(__file__).parents[1],
        check=False,
        capture_output=True,
        text=True,
    )

    assert result.returncode == 0, result.stdout + result.stderr


@pytest.mark.parametrize(
    "component",
    [
        pytest.param(dmc.Button("Open", id="button"), id="synchronous"),
        pytest.param(
            dmc.AreaChart(
                data=[{"date": "2026-01-01", "value": 1}],
                dataKey="date",
                series=[{"name": "value", "color": "blue.6"}],
                id="async-chart",
            ),
            id="asynchronous",
        ),
    ],
)
def test_unsupported_react_shows_version_error(component, dash_duo):
    _dash_renderer._set_react_version("18.3.1")
    app = Dash(__name__)
    app.layout = component

    dash_duo.start_server(
        app,
        debug=True,
        use_reloader=False,
        dev_tools_hot_reload=False,
    )

    message = _error_message(dash_duo)
    assert REACT_ERROR in message
    assert "before creating the Dash app" in message
    assert "use is not a function" not in message
    if component._type == "AreaChart":
        resources = dash_duo.driver.execute_script(
            "return performance.getEntriesByType('resource').map(entry => entry.name);"
        )
        assert not any("async-AreaChart" in resource for resource in resources)


def test_unsupported_react_with_provider_still_shows_version_error(dash_duo):
    _dash_renderer._set_react_version("18.3.1")
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(dmc.Button("Open", id="button"))

    dash_duo.start_server(
        app,
        debug=True,
        use_reloader=False,
        dev_tools_hot_reload=False,
    )

    assert REACT_ERROR in _error_message(dash_duo)


def test_supported_react_preserves_missing_provider_error(dash_duo):
    _dash_renderer._set_react_version("19.2.4")
    app = Dash(__name__)
    app.layout = dmc.Button("Open", id="button")

    dash_duo.start_server(
        app,
        debug=True,
        use_reloader=False,
        dev_tools_hot_reload=False,
    )

    message = _error_message(dash_duo)
    assert "MantineProvider was not found in component tree" in message
    assert REACT_ERROR not in message


def test_supported_react_preserves_components_callbacks_and_metadata(dash_duo):
    _dash_renderer._set_react_version("19.2.4")
    app = Dash(__name__)
    app.layout = dmc.MantineProvider(
        [
            dmc.Button("Open", id="open-drawer"),
            dmc.Drawer(
                "Drawer content",
                id="drawer",
                title="Drawer",
                opened=False,
            ),
            dmc.Select(
                id="persistent-select",
                data=["one", "two"],
                persistence=True,
            ),
            dmc.AreaChart(
                data=[{"date": "2026-01-01", "value": 1}],
                dataKey="date",
                series=[{"name": "value", "color": "blue.6"}],
                id="async-chart",
            ),
        ]
    )

    @app.callback(
        Output("drawer", "opened"),
        Input("open-drawer", "n_clicks"),
        prevent_initial_call=True,
    )
    def open_drawer(_):
        return True

    dash_duo.start_server(
        app,
        debug=True,
        use_reloader=False,
        dev_tools_hot_reload=False,
    )
    dash_duo.wait_for_element("#async-chart")
    dash_duo.find_element("#open-drawer").click()
    dash_duo.wait_for_text_to_equal(".mantine-Drawer-title", "Drawer")
    assert dash_duo.find_element(".mantine-Drawer-body").text == "Drawer content"
    assert (
        dash_duo.driver.execute_script("""
        return window.dash_mantine_components.Select.dashPersistence;
        """)
        == {
            "persisted_props": ["value"],
            "persistence_type": "local",
        }
    )
    assert dash_duo.get_logs() == []


def test_import_before_selecting_react_has_no_frontend_compatibility_warning():
    repository = Path(__file__).parents[1]
    environment = os.environ.copy()
    environment.pop("REACT_VERSION", None)
    result = subprocess.run(
        [
            sys.executable,
            "-c",
            (
                "from dash import _dash_renderer; "
                "import dash_mantine_components; "
                "_dash_renderer._set_react_version('19.2.4'); "
                "print('ok')"
            ),
        ],
        cwd=repository,
        env=environment,
        check=False,
        capture_output=True,
        text=True,
    )

    assert result.returncode == 0, result.stderr
    assert result.stdout.strip() == "ok"
    assert result.stderr == ""
