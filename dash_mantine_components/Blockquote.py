# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Blockquote(Component):
    """A Blockquote component.
Blockquote with optional cite. For more information, see: https://mantine.dev/core/blockquote/

Keyword arguments:

- children (string; optional):
    Primary content.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- cite (string; optional):
    Describe a reference to a cited quote.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- color (optional):
    Badge color from theme.

- style (dict; optional):
    Inline style override."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, cite=Component.UNDEFINED, color=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'cite', 'className', 'color', 'style']
        self._type = 'Blockquote'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'cite', 'className', 'color', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Blockquote, self).__init__(children=children, **args)
