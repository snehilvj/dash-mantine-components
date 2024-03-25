from __future__ import print_function as _

import json
import os as _os
import sys as _sys

import dash as _dash

# noinspection PyUnresolvedReferences
from ._imports_ import *
from ._imports_ import __all__

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

_js_dist = []

_js_dist.extend(
    [
        {
            "relative_package_path": "dash_mantine_components.js",
            "external_url": "https://unpkg.com/{0}@{2}/{1}/{1}.js".format(
                package_name, __name__, __version__
            ),
            "namespace": package_name,
        },
        {
            "relative_package_path": "dash_mantine_components.js.map",
            "external_url": "https://unpkg.com/{0}@{2}/{1}/{1}.js.map".format(
                package_name, __name__, __version__
            ),
            "namespace": package_name,
            "dynamic": True,
        },
    ]
)

_css_dist = []


for _component in __all__:
    setattr(locals()[_component], "_js_dist", _js_dist)
    setattr(locals()[_component], "_css_dist", _css_dist)


# https://mantine.dev/theming/default-theme/
DEFAULT_THEME = {
    "scale": 1,
    "fontSmoothing": True,
    "focusRing": "auto",
    "white": "#fff",
    "black": "#000",
    "colors": {
        "dark": [
            "#C9C9C9",
            "#b8b8b8",
            "#828282",
            "#696969",
            "#424242",
            "#3b3b3b",
            "#2e2e2e",
            "#242424",
            "#1f1f1f",
            "#141414",
        ],
        "gray": [
            "#f8f9fa",
            "#f1f3f5",
            "#e9ecef",
            "#dee2e6",
            "#ced4da",
            "#adb5bd",
            "#868e96",
            "#495057",
            "#343a40",
            "#212529",
        ],
        "red": [
            "#fff5f5",
            "#ffe3e3",
            "#ffc9c9",
            "#ffa8a8",
            "#ff8787",
            "#ff6b6b",
            "#fa5252",
            "#f03e3e",
            "#e03131",
            "#c92a2a",
        ],
        "pink": [
            "#fff0f6",
            "#ffdeeb",
            "#fcc2d7",
            "#faa2c1",
            "#f783ac",
            "#f06595",
            "#e64980",
            "#d6336c",
            "#c2255c",
            "#a61e4d",
        ],
        "grape": [
            "#f8f0fc",
            "#f3d9fa",
            "#eebefa",
            "#e599f7",
            "#da77f2",
            "#cc5de8",
            "#be4bdb",
            "#ae3ec9",
            "#9c36b5",
            "#862e9c",
        ],
        "violet": [
            "#f3f0ff",
            "#e5dbff",
            "#d0bfff",
            "#b197fc",
            "#9775fa",
            "#845ef7",
            "#7950f2",
            "#7048e8",
            "#6741d9",
            "#5f3dc4",
        ],
        "indigo": [
            "#edf2ff",
            "#dbe4ff",
            "#bac8ff",
            "#91a7ff",
            "#748ffc",
            "#5c7cfa",
            "#4c6ef5",
            "#4263eb",
            "#3b5bdb",
            "#364fc7",
        ],
        "blue": [
            "#e7f5ff",
            "#d0ebff",
            "#a5d8ff",
            "#74c0fc",
            "#4dabf7",
            "#339af0",
            "#228be6",
            "#1c7ed6",
            "#1971c2",
            "#1864ab",
        ],
        "cyan": [
            "#e3fafc",
            "#c5f6fa",
            "#99e9f2",
            "#66d9e8",
            "#3bc9db",
            "#22b8cf",
            "#15aabf",
            "#1098ad",
            "#0c8599",
            "#0b7285",
        ],
        "teal": [
            "#e6fcf5",
            "#c3fae8",
            "#96f2d7",
            "#63e6be",
            "#38d9a9",
            "#20c997",
            "#12b886",
            "#0ca678",
            "#099268",
            "#087f5b",
        ],
        "green": [
            "#ebfbee",
            "#d3f9d8",
            "#b2f2bb",
            "#8ce99a",
            "#69db7c",
            "#51cf66",
            "#40c057",
            "#37b24d",
            "#2f9e44",
            "#2b8a3e",
        ],
        "lime": [
            "#f4fce3",
            "#e9fac8",
            "#d8f5a2",
            "#c0eb75",
            "#a9e34b",
            "#94d82d",
            "#82c91e",
            "#74b816",
            "#66a80f",
            "#5c940d",
        ],
        "yellow": [
            "#fff9db",
            "#fff3bf",
            "#ffec99",
            "#ffe066",
            "#ffd43b",
            "#fcc419",
            "#fab005",
            "#f59f00",
            "#f08c00",
            "#e67700",
        ],
        "orange": [
            "#fff4e6",
            "#ffe8cc",
            "#ffd8a8",
            "#ffc078",
            "#ffa94d",
            "#ff922b",
            "#fd7e14",
            "#f76707",
            "#e8590c",
            "#d9480f",
        ],
    },
    "primaryShade": {"light": 6, "dark": 8},
    "primaryColor": "blue",
    "autoContrast": False,
    "luminanceThreshold": 0.3,
    "fontFamily": "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    "fontFamilyMonospace": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    "respectReducedMotion": False,
    "cursorType": "default",
    "defaultGradient": {"from": "blue", "to": "cyan", "deg": 45},
    "defaultRadius": "sm",
    "activeClassName": "mantine-active",
    "focusClassName": "",
    "headings": {
        "fontFamily": "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
        "fontWeight": "700",
        "textWrap": "wrap",
        "sizes": {
            "h1": {
                "fontSize": "calc(2.125rem * var(--mantine-scale))",
                "lineHeight": "1.3",
            },
            "h2": {
                "fontSize": "calc(1.625rem * var(--mantine-scale))",
                "lineHeight": "1.35",
            },
            "h3": {
                "fontSize": "calc(1.375rem * var(--mantine-scale))",
                "lineHeight": "1.4",
            },
            "h4": {
                "fontSize": "calc(1.125rem * var(--mantine-scale))",
                "lineHeight": "1.45",
            },
            "h5": {
                "fontSize": "calc(1rem * var(--mantine-scale))",
                "lineHeight": "1.5",
            },
            "h6": {
                "fontSize": "calc(0.875rem * var(--mantine-scale))",
                "lineHeight": "1.5",
            },
        },
    },
    "fontSizes": {
        "xs": "calc(0.75rem * var(--mantine-scale))",
        "sm": "calc(0.875rem * var(--mantine-scale))",
        "md": "calc(1rem * var(--mantine-scale))",
        "lg": "calc(1.125rem * var(--mantine-scale))",
        "xl": "calc(1.25rem * var(--mantine-scale))",
    },
    "lineHeights": {"xs": "1.4", "sm": "1.45", "md": "1.55", "lg": "1.6", "xl": "1.65"},
    "radius": {
        "xs": "calc(0.125rem * var(--mantine-scale))",
        "sm": "calc(0.25rem * var(--mantine-scale))",
        "md": "calc(0.5rem * var(--mantine-scale))",
        "lg": "calc(1rem * var(--mantine-scale))",
        "xl": "calc(2rem * var(--mantine-scale))",
    },
    "spacing": {
        "xs": "calc(0.625rem * var(--mantine-scale))",
        "sm": "calc(0.75rem * var(--mantine-scale))",
        "md": "calc(1rem * var(--mantine-scale))",
        "lg": "calc(1.25rem * var(--mantine-scale))",
        "xl": "calc(2rem * var(--mantine-scale))",
    },
    "breakpoints": {
        "xs": "36em",
        "sm": "48em",
        "md": "62em",
        "lg": "75em",
        "xl": "88em",
    },
    "shadows": {
        "xs": "0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), 0 calc(0.0625rem * var(--mantine-scale)) calc(0.125rem * var(--mantine-scale)) rgba(0, 0, 0, 0.1)",
        "sm": "0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(0.625rem * var(--mantine-scale)) calc(0.9375rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.4375rem * var(--mantine-scale)) calc(0.4375rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale))",
        "md": "0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.25rem * var(--mantine-scale)) calc(1.5625rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.625rem * var(--mantine-scale)) calc(0.625rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale))",
        "lg": "0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.75rem * var(--mantine-scale)) calc(1.4375rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.75rem * var(--mantine-scale)) calc(0.75rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale))",
        "xl": "0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(2.25rem * var(--mantine-scale)) calc(1.75rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(1.0625rem * var(--mantine-scale)) calc(1.0625rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale))",
    },
    "other": {},
    "components": {},
}

__all__ += [DEFAULT_THEME]
