# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SegmentedControl(Component):
    """A SegmentedControl component.
Horizontal control made of multiple segments, alternative to RadioGroup. For more information, see: https://mantine.dev/core/segmented-control/

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- color (optional):
    Active control color from theme.colors, defaults to white in light
    color scheme and theme.colors.dark[9] in dark.

- data (optional):
    Data based on which controls are rendered.

- fullWidth (boolean; optional):
    True if component should have 100% width.

- radius (optional):
    Border-radius from theme or number to set border-radius in px.

- size (optional):
    Controls font-size, paddings and height.

- style (dict; optional):
    Inline style override.

- value (string; optional):
    Current selected value."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, color=Component.UNDEFINED, data=Component.UNDEFINED, fullWidth=Component.UNDEFINED, radius=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'color', 'data', 'fullWidth', 'radius', 'size', 'style', 'value']
        self._type = 'SegmentedControl'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'color', 'data', 'fullWidth', 'radius', 'size', 'style', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(SegmentedControl, self).__init__(**args)
