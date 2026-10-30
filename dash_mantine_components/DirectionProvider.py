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


class DirectionProvider(Component):
    """A DirectionProvider component.
irectionProvider set direction for all components inside it

Keyword arguments:

- children (a list of or a singular dash component, string or number; required):
    Your application.

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- direction (a value equal to: 'rtl', 'ltr'; optional):
    Direction `ltr` by default.

- persisted_props (list of strings; optional):
    Properties whose user interactions will persist after refreshing
    the  component or the page. Since only `value` is allowed this
    prop can  normally be ignored.

- persistence (string | number | boolean; optional):
    Used to allow user interactions in this component to be persisted
    when  the component - or the page - is refreshed. If `persisted`
    is truthy and  hasn't changed from its previous value, a `value`
    that the user has  changed while using the app will keep that
    change, as long as  the new `value` also matches what was given
    originally.  Used in conjunction with `persistence_type`. Note:
    The component must  have an `id` for persistence to work.

- persistence_type (a value equal to: 'local', 'session', 'memory'; optional):
    Where persisted user changes will be stored:  memory: only kept in
    memory, reset on page refresh.  local: window.localStorage, data
    is kept after the browser quit.  session: window.sessionStorage,
    data is cleared once the browser quit."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'dash_mantine_components'
    _type = 'DirectionProvider'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        direction: typing.Optional[Literal["rtl", "ltr"]] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        persistence: typing.Optional[typing.Union[str, NumberType, bool]] = None,
        persisted_props: typing.Optional[typing.Sequence[str]] = None,
        persistence_type: typing.Optional[Literal["local", "session", "memory"]] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'direction', 'persisted_props', 'persistence', 'persistence_type']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'direction', 'persisted_props', 'persistence', 'persistence_type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        if 'children' not in _explicit_args:
            raise TypeError('Required argument children was not specified.')

        super(DirectionProvider, self).__init__(children=children, **args)

setattr(DirectionProvider, "__init__", _explicitize_args(DirectionProvider.__init__))
