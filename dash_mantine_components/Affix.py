# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Affix(Component):
    """An Affix component.
Render react node inside portal at fixed position. For more information, see: https://mantine.dev/core/affix/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Any react node that should trigger tooltip.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- position (dict; optional):
    Fixed position in px.

    `position` is a dict with keys:

    - bottom (number | string; optional)

    - left (number | string; optional)

    - right (number | string; optional)

    - top (number | string; optional)

- style (dict; optional):
    Inline style override.

- zIndex (string; optional):
    Root element z-index property."""
    @_explicitize_args
    def __init__(self, children=None, class_name=Component.UNDEFINED, id=Component.UNDEFINED, position=Component.UNDEFINED, style=Component.UNDEFINED, zIndex=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'class_name', 'position', 'style', 'zIndex']
        self._type = 'Affix'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'class_name', 'position', 'style', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Affix, self).__init__(children=children, **args)
