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


class Schedule(Component):
    """A Schedule component.


Keyword arguments:

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- aria-* (string; optional):
    Wild card aria attributes.

- data-* (string; optional):
    Wild card data attributes.

- date (string; optional):
    Date to display.

- dayViewProps (boolean | number | string | dict | list; optional):
    Props passed to the day view.

- eventClickData (boolean | number | string | dict | list; optional):
    Data for the event most recently clicked.

- events (list of boolean | number | string | dict | lists; optional):
    Meetings to display in the calendar.

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

- monthViewProps (boolean | number | string | dict | list; optional):
    Props passed to the month view.

- tabIndex (number; optional):
    tab-index.

- view (a value equal to: 'day', 'week', 'month', 'year'; optional):
    Calendar view.

- weekViewProps (boolean | number | string | dict | list; optional):
    Props passed to the week view.

- withAgenda (boolean; optional):
    Whether to display the agenda button.

- yearViewProps (boolean | number | string | dict | list; optional):
    Props passed to the year view."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'dash_mantine_components'
    _type = 'Schedule'
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
        events: typing.Optional[typing.Sequence[typing.Any]] = None,
        date: typing.Optional[str] = None,
        view: typing.Optional[Literal["day", "week", "month", "year"]] = None,
        eventClickData: typing.Optional[typing.Any] = None,
        style: typing.Optional[typing.Any] = None,
        dayViewProps: typing.Optional[typing.Any] = None,
        weekViewProps: typing.Optional[typing.Any] = None,
        monthViewProps: typing.Optional[typing.Any] = None,
        yearViewProps: typing.Optional[typing.Any] = None,
        withAgenda: typing.Optional[bool] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        tabIndex: typing.Optional[NumberType] = None,
        loading_state: typing.Optional["LoadingState"] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'aria-*', 'data-*', 'date', 'dayViewProps', 'eventClickData', 'events', 'loading_state', 'monthViewProps', 'style', 'tabIndex', 'view', 'weekViewProps', 'withAgenda', 'yearViewProps']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'aria-*', 'data-*', 'date', 'dayViewProps', 'eventClickData', 'events', 'loading_state', 'monthViewProps', 'style', 'tabIndex', 'view', 'weekViewProps', 'withAgenda', 'yearViewProps']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(Schedule, self).__init__(**args)

setattr(Schedule, "__init__", _explicitize_args(Schedule.__init__))
