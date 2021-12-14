# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Col(Component):
    """A Col component.
Utility component to pass to Grid. For more information, see: https://mantine.dev/core/grid/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Col content.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- lg (number; optional):
    Col span at (min-width: theme.breakpoints.lg).

- md (number; optional):
    Col span at (min-width: theme.breakpoints.md).

- offset (number; optional):
    Column left offset.

- sm (number; optional):
    Col span at (min-width: theme.breakpoints.sm).

- span (number; optional):
    Default col span.

- style (dict; optional):
    Inline style override.

- xl (number; optional):
    Col span at (min-width: theme.breakpoints.xl).

- xs (number; optional):
    Col span at (min-width: theme.breakpoints.xs)."""
    @_explicitize_args
    def __init__(self, children=None, className=Component.UNDEFINED, id=Component.UNDEFINED, offset=Component.UNDEFINED, span=Component.UNDEFINED, style=Component.UNDEFINED, xs=Component.UNDEFINED, sm=Component.UNDEFINED, md=Component.UNDEFINED, lg=Component.UNDEFINED, xl=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'lg', 'md', 'offset', 'sm', 'span', 'style', 'xl', 'xs']
        self._type = 'Col'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'lg', 'md', 'offset', 'sm', 'span', 'style', 'xl', 'xs']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Col, self).__init__(children=children, **args)
