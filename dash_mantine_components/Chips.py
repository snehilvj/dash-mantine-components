# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Chips(Component):
    """A Chips component.
Alternative to Select and RadioGroup. For more information, see: https://mantine.dev/core/chips/

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- align (optional):
    Defines align-items css property.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- color (optional):
    Active chip color, defaults to theme.primaryColor.

- data (optional):
    Chips.

- direction (optional):
    Defines flex-direction property, row for horizontal, column for
    vertical.

- grow (boolean; optional):
    Defines flex-grow property for each element, True -> 1, False ->
    0.

- multiple (boolean; optional):
    Allow multiple values to be picked.

- noWrap (boolean; optional):
    Defined flex-wrap property.

- position (optional):
    Defines justify-content property.

- radius (optional):
    Chip border-radius from theme or number to set value in px.

- size (optional):
    Predefined chip size.

- spacing (optional):
    Spacing between chips from theme or number to set value in px.

- style (dict; optional):
    Inline style override.

- value (string | list of strings; optional):
    Controlled component value.

- variant (a value equal to: "outline", "filled"; optional):
    Controls chip appearance, defaults to filled with dark theme and
    to outline in light theme."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, align=Component.UNDEFINED, data=Component.UNDEFINED, color=Component.UNDEFINED, direction=Component.UNDEFINED, grow=Component.UNDEFINED, multiple=Component.UNDEFINED, noWrap=Component.UNDEFINED, position=Component.UNDEFINED, radius=Component.UNDEFINED, size=Component.UNDEFINED, spacing=Component.UNDEFINED, style=Component.UNDEFINED, value=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'align', 'className', 'color', 'data', 'direction', 'grow', 'multiple', 'noWrap', 'position', 'radius', 'size', 'spacing', 'style', 'value', 'variant']
        self._type = 'Chips'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'align', 'className', 'color', 'data', 'direction', 'grow', 'multiple', 'noWrap', 'position', 'radius', 'size', 'spacing', 'style', 'value', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Chips, self).__init__(**args)
