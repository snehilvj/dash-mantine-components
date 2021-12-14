# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Grid(Component):
    """A Grid component.
Flexbox grid system with variable amount of columns. For more information, see: https://mantine.dev/core/grid/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Content.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- align (a value equal to: "stretch", "center", "flex-end", "flex-start"; optional):
    Set grid align-content property.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- columns (number; optional):
    Amount of columns in each row.

- grow (boolean; optional):
    Should columns in the last row take 100% of grid width.

- gutter (a value equal to: "xs", "sm", "md", "lg", "xl" | number; optional):
    Spacing between columns predefined value from theme.spacing or
    number for gutter in px.

- justify (a value equal to: "space-between", "space-around", "center", "flex-end", "flex-start"; optional):
    Set grid justify-content property.

- style (dict; optional):
    Inline style override."""
    @_explicitize_args
    def __init__(self, children=None, align=Component.UNDEFINED, className=Component.UNDEFINED, columns=Component.UNDEFINED, grow=Component.UNDEFINED, gutter=Component.UNDEFINED, id=Component.UNDEFINED, justify=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'align', 'className', 'columns', 'grow', 'gutter', 'justify', 'style']
        self._type = 'Grid'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'align', 'className', 'columns', 'grow', 'gutter', 'justify', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Grid, self).__init__(children=children, **args)
