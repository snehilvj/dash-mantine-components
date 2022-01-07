# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ColorPicker(Component):
    """A ColorPicker component.
Alternative to Select and RadioGroup. For more information, see: https://mantine.dev/core/ColorPicker/

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- alphaLabel (string; optional):
    Alpha slider aria-label.

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- focusable (boolean; optional):
    Should interactive elements be focusable.

- format (a value equal to: "hex", "rgba", "rgb", "hsl", "hsla"; optional):
    Color format.

- fullWidth (boolean; optional):
    Force picker to take 100% width of its container.

- hueLabel (string; optional):
    Hue slider aria-label.

- saturationLabel (string; optional):
    Saturation slider aria-label.

- size (a value equal to: "xs", "sm", "md", "lg", "xl"; optional):
    Predefined component size.

- style (dict; optional):
    Inline style override.

- swatches (list of strings; optional):
    Predefined colors.

- swatchesPerRow (number; optional):
    Number of swatches displayed in one row.

- value (string; optional):
    Controlled component value.

- withPicker (boolean; optional):
    Set to False to display swatches only."""
    @_explicitize_args
    def __init__(self, alphaLabel=Component.UNDEFINED, class_name=Component.UNDEFINED, focusable=Component.UNDEFINED, format=Component.UNDEFINED, fullWidth=Component.UNDEFINED, hueLabel=Component.UNDEFINED, id=Component.UNDEFINED, saturationLabel=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, swatches=Component.UNDEFINED, swatchesPerRow=Component.UNDEFINED, value=Component.UNDEFINED, withPicker=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'alphaLabel', 'class_name', 'focusable', 'format', 'fullWidth', 'hueLabel', 'saturationLabel', 'size', 'style', 'swatches', 'swatchesPerRow', 'value', 'withPicker']
        self._type = 'ColorPicker'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'alphaLabel', 'class_name', 'focusable', 'format', 'fullWidth', 'hueLabel', 'saturationLabel', 'size', 'style', 'swatches', 'swatchesPerRow', 'value', 'withPicker']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ColorPicker, self).__init__(**args)
