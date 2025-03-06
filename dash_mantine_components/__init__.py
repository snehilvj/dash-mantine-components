from __future__ import print_function as _

import json
import os as _os
import sys as _sys

import dash as _dash

from . import styles

# noinspection PyUnresolvedReferences
from ._imports_ import *
from ._imports_ import __all__
from .theme import DEFAULT_THEME
from .figure_templates import add_figure_templates

if not hasattr(_dash, "__plotly_dash") and not hasattr(_dash, "development"):
    print(
        "Dash was not successfully imported. "
        "Make sure you don't have a file "
        'named \n"dash.py" in your current directory.',
        file=_sys.stderr,
    )
    _sys.exit(1)

_basepath = _os.path.dirname(__file__)
_filepath = _os.path.abspath(_os.path.join(_basepath, "package-info.json"))
with open(_filepath) as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")
__version__ = package["version"]

_current_path = _os.path.dirname(_os.path.abspath(__file__))

_this_module = _sys.modules[__name__]


async_resources = ["AreaChart", "BarChart", "LineChart", "BubbleChart", "DonutChart", "PieChart",
                   "RadarChart", "ScatterChart", "CompositeChart", "Sparkline"]


_js_dist = []


_js_dist.extend(
    [
        {
            "relative_package_path": f"async-{async_resource}.js",
            "external_url": (
                f"https://unpkg.com/{package_name}@{__version__}/{__name__}/async-{async_resource}.js"
            ),
            "namespace": package_name,
            "async": True,
        }
        for async_resource in async_resources
    ]
)

# TODO: Figure out if unpkg link works
_js_dist.extend(
    [
        {
            "relative_package_path": f"async-{async_resource}.js.map",
            "external_url": f"https://unpkg.com/{package_name}@{__version__}/{__name__}/async-{async_resource}.js.map",
            "namespace": package_name,
            "dynamic": True,
        }
        for async_resource in async_resources
    ]
)

_js_dist.extend(
    [
        {
            "relative_package_path": "dash_mantine_components.js",
            "external_url": f"https://unpkg.com/{package_name}@{__version__}/{__name__}/{__name__}.js",
            "namespace": package_name,
        },
        {
            "relative_package_path": "dash_mantine_components.js.map",
            "external_url": f"https://unpkg.com/{package_name}@{__version__}/{__name__}/{__name__}.js.map",
            "namespace": package_name,
            "dynamic": True,
        },
        {
            "relative_package_path": "dash_mantine_components-shared.js",
            "external_url": f"https://unpkg.com/{package_name}@{__version__}/{__name__}/{__name__}-shared.js",
            "namespace": package_name,
        },
        {
            "relative_package_path": "dash_mantine_components-shared.js.map",
            "external_url": f"https://unpkg.com/{package_name}@{__version__}/{__name__}/{__name__}-shared.js.map",
            "namespace": package_name,
            "dynamic": True,
        },
    ]
)

_css_dist = []


for _component in __all__:
    setattr(locals()[_component], "_js_dist", _js_dist)
    setattr(locals()[_component], "_css_dist", _css_dist)


__all__ += [DEFAULT_THEME, styles, add_figure_templates]
