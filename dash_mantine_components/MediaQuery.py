# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class MediaQuery(Component):
    """A MediaQuery component.
Apply styles to children if media query matches. For more information, see: https://mantine.dev/core/media-query/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Content that should be centered vertically and horizontally.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- inline (optional):
    Larger than given breakpoint or value in px, will be hidden on
    smaller viewport.

- largerThan (string; optional):
    Often used with CSS to style elements with common properties.

- query (string; optional):
    Any other media query.

- smallerThan (optional):
    Smaller than given breakpoint or value in px, will be hidden on
    larger viewport."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, largerThan=Component.UNDEFINED, inline=Component.UNDEFINED, query=Component.UNDEFINED, smallerThan=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'inline', 'largerThan', 'query', 'smallerThan']
        self._type = 'MediaQuery'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'inline', 'largerThan', 'query', 'smallerThan']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(MediaQuery, self).__init__(children=children, **args)
