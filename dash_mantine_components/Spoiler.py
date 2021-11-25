# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Spoiler(Component):
    """A Spoiler component.
Hide long sections of content under spoiler. For more information, see: https://mantine.dev/core/spoiler/

Keyword arguments:

- children (string; optional):
    Primary content.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- hideLabel (string; default "Hide"):
    Label for close spoiler action.

- initialState (boolean; optional):
    Initial spoiler state, True to wrap content in spoiler, False to
    show content without spoiler, opened state will be updated on
    mount.

- maxHeight (number; optional):
    Max height of visible content, when this point is reached spoiler
    appears.

- showLabel (string; default "Show more"):
    Label for open spoiler action."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, hideLabel=Component.UNDEFINED, initialState=Component.UNDEFINED, maxHeight=Component.UNDEFINED, showLabel=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'hideLabel', 'initialState', 'maxHeight', 'showLabel']
        self._type = 'Spoiler'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'hideLabel', 'initialState', 'maxHeight', 'showLabel']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Spoiler, self).__init__(children=children, **args)
