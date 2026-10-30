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


class CustomCopyButton(Component):
    """A CustomCopyButton component.
CustomCopyButton - custom component with copy to clipboard functionality

Keyword arguments:

- children (boolean | number | string | dict | list; optional):
    Function that receives {copied, copy} and returns a component  See
    https://www.dash-mantine-components.com/functions-as-props.

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- timeout (number; default 1000):
    Copied status timeout in ms, `1000` by default.

- value (string; required):
    Value to be copied to clipboard."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'dash_mantine_components'
    _type = 'CustomCopyButton'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        value: typing.Optional[str] = None,
        timeout: typing.Optional[NumberType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'timeout', 'value']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'timeout', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['value']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(CustomCopyButton, self).__init__(children=children, **args)

setattr(CustomCopyButton, "__init__", _explicitize_args(CustomCopyButton.__init__))
