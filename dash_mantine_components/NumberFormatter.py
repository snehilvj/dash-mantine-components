# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.types import NumberType  # noqa: F401
except ImportError:
    # Backwards compatibility for dash<=4.1.0
    if typing.TYPE_CHECKING:
        raise
    NumberType = typing.Union[  # noqa: F401
        typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
    ]

ComponentSingleType = typing.Union[str, int, float, Component, None]
ComponentType = typing.Union[
    ComponentSingleType,
    typing.Sequence[ComponentSingleType],
]


class NumberFormatter(Component):
    """A NumberFormatter component.
NumberFormatter

Keyword arguments:

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- allowNegative (boolean; optional):
    Determines whether negative values are allowed, `True` by default.

- aria-* (string; optional):
    Wild card aria attributes.

- data-* (string; optional):
    Wild card data attributes.

- decimalScale (number; optional):
    Limits the number of digits that are displayed after the decimal
    point, by default there is no limit.

- decimalSeparator (string; optional):
    Character used as a decimal separator, `'.'` by default.

- fixedDecimalScale (boolean; optional):
    If set, 0s are added after `decimalSeparator` to match given
    `decimalScale`. `False` by default.

- loading_state (dict; optional):
    Object that holds the loading state object coming from
    dash-renderer. For use with dash<3.

    `loading_state` is a dict with keys:

    - is_loading (boolean; required):
        Determines if the component is loading or not.

    - prop_name (string; required):
        Holds which property is loading.

    - component_name (string; required):
        Holds the name of the component that is loading.

- prefix (string; optional):
    Prefix added before the value.

- suffix (string; optional):
    Suffix added after the value.

- tabIndex (number; optional):
    tab-index.

- thousandSeparator (string | boolean; optional):
    A character used to separate thousands, `','` by default.

- thousandsGroupStyle (a value equal to: 'none', 'thousand', 'lakh', 'wan'; optional):
    Defines the thousand grouping style.

- value (string | number; optional):
    Value to format."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'dash_mantine_components'
    _type = 'NumberFormatter'
    LoadingState = TypedDict(
        "LoadingState",
            {
            "is_loading": bool,
            "prop_name": str,
            "component_name": str
        }
    )


    def __init__(
        self,
        value: typing.Optional[typing.Union[str, NumberType]] = None,
        allowNegative: typing.Optional[bool] = None,
        decimalScale: typing.Optional[NumberType] = None,
        decimalSeparator: typing.Optional[str] = None,
        fixedDecimalScale: typing.Optional[bool] = None,
        prefix: typing.Optional[str] = None,
        suffix: typing.Optional[str] = None,
        thousandsGroupStyle: typing.Optional[Literal["none", "thousand", "lakh", "wan"]] = None,
        thousandSeparator: typing.Optional[typing.Union[str, bool]] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        tabIndex: typing.Optional[NumberType] = None,
        loading_state: typing.Optional["LoadingState"] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'allowNegative', 'aria-*', 'data-*', 'decimalScale', 'decimalSeparator', 'fixedDecimalScale', 'loading_state', 'prefix', 'suffix', 'tabIndex', 'thousandSeparator', 'thousandsGroupStyle', 'value']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'allowNegative', 'aria-*', 'data-*', 'decimalScale', 'decimalSeparator', 'fixedDecimalScale', 'loading_state', 'prefix', 'suffix', 'tabIndex', 'thousandSeparator', 'thousandsGroupStyle', 'value']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(NumberFormatter, self).__init__(**args)

setattr(NumberFormatter, "__init__", _explicitize_args(NumberFormatter.__init__))
