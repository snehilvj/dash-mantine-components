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


class NavigationProgressProvider(Component):
    """A NavigationProgressProvider component.
NavigationProgressProvider

Keyword arguments:

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- aria-* (string; optional):
    Wild card aria attributes.

- color (optional):
    Key of `theme.colors` of any other valid CSS color,
    `theme.primaryColor` by default.

- data-* (string; optional):
    Wild card data attributes.

- initialProgress (number; optional):
    Initial progress value, `0` by default.

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

- size (number; optional):
    Controls height of the progress bar.

- stepInterval (number; optional):
    Step interval in ms, `500` by default.

- tabIndex (number; optional):
    tab-index.

- withinPortal (boolean; optional):
    Determines whether the progress bar should be rendered within
    `Portal`, `True` by default.

- zIndex (optional):
    Progressbar z-index, `9999` by default."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'dash_mantine_components'
    _type = 'NavigationProgressProvider'
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
        initialProgress: typing.Optional[NumberType] = None,
        color: typing.Optional[typing.Optional[str]] = None,
        size: typing.Optional[typing.Optional[str]] = None,
        stepInterval: typing.Optional[NumberType] = None,
        withinPortal: typing.Optional[bool] = None,
        zIndex: typing.Optional[typing.Union[Literal["-moz-initial"], Literal["inherit"], Literal["initial"], Literal["revert"], Literal["revert-layer"], Literal["unset"], Literal["auto"]]] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        tabIndex: typing.Optional[NumberType] = None,
        loading_state: typing.Optional["LoadingState"] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'aria-*', 'color', 'data-*', 'initialProgress', 'loading_state', 'size', 'stepInterval', 'tabIndex', 'withinPortal', 'zIndex']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'aria-*', 'color', 'data-*', 'initialProgress', 'loading_state', 'size', 'stepInterval', 'tabIndex', 'withinPortal', 'zIndex']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(NavigationProgressProvider, self).__init__(**args)

setattr(NavigationProgressProvider, "__init__", _explicitize_args(NavigationProgressProvider.__init__))
