# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Notification(Component):
    """A Notification component.
Show dynamic notifications and alerts to user, part of notifications system. For more information, see: https://mantine.dev/core/notification/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Notification body, place main text here.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- color (optional):
    Notification line or icon color.

- loading (boolean; optional):
    Replaces colored line or icon with Loader component.

- title (string; optional):
    Notification title, displayed before body."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, color=Component.UNDEFINED, loading=Component.UNDEFINED, title=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'color', 'loading', 'title']
        self._type = 'Notification'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'color', 'loading', 'title']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Notification, self).__init__(children=children, **args)
