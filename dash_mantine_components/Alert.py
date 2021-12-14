# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Alert(Component):
    """An Alert component.
Attract user attention with important static message. For more information, see: https://mantine.dev/core/alert/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Alert message.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- color (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional):
    Alert title and line colors from theme.

- duration (number; optional):
    Duration in milliseconds after which the Alert dismisses itself.

- show (boolean; default False):
    Whether to show the alert.

- style (dict; optional):
    Inline style override.

- title (string; optional):
    Optional alert title.

- withCloseButton (boolean; optional):
    Display close button."""
    @_explicitize_args
    def __init__(self, children=None, className=Component.UNDEFINED, color=Component.UNDEFINED, duration=Component.UNDEFINED, id=Component.UNDEFINED, title=Component.UNDEFINED, show=Component.UNDEFINED, style=Component.UNDEFINED, withCloseButton=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'color', 'duration', 'show', 'style', 'title', 'withCloseButton']
        self._type = 'Alert'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'color', 'duration', 'show', 'style', 'title', 'withCloseButton']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Alert, self).__init__(children=children, **args)
