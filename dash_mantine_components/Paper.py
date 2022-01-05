# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Paper(Component):
    """A Paper component.
Renders white or dark background depending on color scheme. For more information, see: https://mantine.dev/core/paper/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Paper content.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- padding (a value equal to: "xs", "sm", "md", "lg", "xl" | number; optional):
    Predefined padding value from theme.spacing or number for padding
    in px.

- radius (a value equal to: "xs", "sm", "md", "lg", "xl" | number; optional):
    Predefined border-radius value from theme.radius or number for
    border-radius in px.

- shadow (a value equal to: "xs", "sm", "md", "lg", "xl"; optional):
    Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or
    any valid css box-shadow property.

- style (dict; optional):
    Inline style override.

- withBorder (boolean; optional):
    Adds 1px border with theme.colors.gray[2] color in light color
    scheme and theme.colors.dark[6] in dark color scheme."""
    @_explicitize_args
    def __init__(self, children=None, class_name=Component.UNDEFINED, id=Component.UNDEFINED, padding=Component.UNDEFINED, radius=Component.UNDEFINED, shadow=Component.UNDEFINED, style=Component.UNDEFINED, withBorder=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'class_name', 'padding', 'radius', 'shadow', 'style', 'withBorder']
        self._type = 'Paper'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'class_name', 'padding', 'radius', 'shadow', 'style', 'withBorder']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Paper, self).__init__(children=children, **args)
