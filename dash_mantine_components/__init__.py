from __future__ import print_function as _

import json
import os as _os
import sys as _sys

import dash as _dash

from . import styles

# noinspection PyUnresolvedReferences
from ._imports_ import *
from ._imports_ import __all__
from .figure_templates import add_figure_templates
from .theme import DEFAULT_THEME

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

# Add async components here.
async_resources = [
    "AreaChart",
    "BarChart",
    "LineChart",
    "BubbleChart",
    "DonutChart",
    "PieChart",
    "RadarChart",
    "ScatterChart",
    "CompositeChart",
    "Sparkline",
    "CodeHighlight",
    "CodeHighlightTabs",
    "InlineCodeHighlight",
    "RichTextEditor",
]
async_chunks = [f"async-{async_resource}" for async_resource in async_resources]

# Add shared chunks here.
shared_chunks = [
    f"{__name__}-charts-shared",
]

# Collect all chunks (main, async, shared).
chunks = [__name__] + async_chunks + shared_chunks

# Add all chunks to the js_dist list.
_js_dist = []
_js_dist.extend(
    [
        {
            "relative_package_path": f"{chunk}.js",
            "external_url": f"https://unpkg.com/{package_name}@{__version__}/{__name__}/{chunk}.js",
            "namespace": package_name,
            "async": chunk != __name__,  # don't make the main bundle async
        }
        for chunk in chunks
    ]
)
_js_dist.extend(
    [
        {
            "relative_package_path": f"{chunk}.js.map",
            "external_url": f"https://unpkg.com/{package_name}@{__version__}/{__name__}/{chunk}.js.map",
            "namespace": package_name,
            "dynamic": True,
        }
        for chunk in chunks
    ]
)

# Similarly, collect CSS.
_css_dist = []

for _component in __all__:
    setattr(locals()[_component], "_js_dist", _js_dist)
    setattr(locals()[_component], "_css_dist", _css_dist)

__all__ += [DEFAULT_THEME, styles, add_figure_templates]
