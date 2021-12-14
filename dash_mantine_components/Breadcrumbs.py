# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Breadcrumbs(Component):
    """A Breadcrumbs component.
Separate list of react nodes with given separator. For more information, see: https://mantine.dev/core/breadcrumbs/

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- items (list of dicts; optional):
    Link items.

    `items` is a list of dicts with keys:

    - href (string; required)

    - title (string; required)

- separator (string; optional):
    Separator between breadcrumbs.

- style (dict; optional):
    Inline style override."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, items=Component.UNDEFINED, separator=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'items', 'separator', 'style']
        self._type = 'Breadcrumbs'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'items', 'separator', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Breadcrumbs, self).__init__(**args)
