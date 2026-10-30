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


class DatesProvider(Component):
    """A DatesProvider component.
DatesProvider

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- settings (dict; required)

    `settings` is a dict with keys:

    - locale (string; optional)

    - firstDayOfWeek (a value equal to: 0, 1, 2, 3, 4, 5, 6; optional)

    - weekendDays (list of a value equal to: 0, 1, 2, 3, 4, 5, 6s; optional)

    - labelSeparator (string; optional)

    - consistentWeeks (boolean; optional)"""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'dash_mantine_components'
    _type = 'DatesProvider'
    Settings = TypedDict(
        "Settings",
            {
            "locale": NotRequired[str],
            "firstDayOfWeek": NotRequired[Literal[0, 1, 2, 3, 4, 5, 6]],
            "weekendDays": NotRequired[typing.Sequence[Literal[0, 1, 2, 3, 4, 5, 6]]],
            "labelSeparator": NotRequired[str],
            "consistentWeeks": NotRequired[bool]
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        settings: typing.Optional["Settings"] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'settings']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'settings']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['settings']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(DatesProvider, self).__init__(children=children, **args)

setattr(DatesProvider, "__init__", _explicitize_args(DatesProvider.__init__))
