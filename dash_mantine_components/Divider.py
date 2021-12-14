# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Divider(Component):
    """A Divider component.
Horizontal line with optional label or vertical divider. For more information, see: https://mantine.dev/core/divider/

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- color (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional):
    Line color from theme, defaults to gray in light color scheme and
    to dark in dark color scheme.

- label (string; optional):
    Adds text after line in horizontal orientation.

- labelPosition (a value equal to: "right", "left", "center"; optional):
    Label position.

- orientation (a value equal to: "horizontal", "vertical"; optional):
    Line orientation.

- size (a value equal to: "xs", "sm", "md", "lg", "xl" | number; optional):
    Sets height in horizontal orientation and width in vertical.

- style (dict; optional):
    Inline style override.

- variant (a value equal to: "dashed", "dotted", "solid"; optional):
    Divider borderStyle."""
    @_explicitize_args
    def __init__(self, className=Component.UNDEFINED, color=Component.UNDEFINED, id=Component.UNDEFINED, label=Component.UNDEFINED, labelPosition=Component.UNDEFINED, orientation=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'color', 'label', 'labelPosition', 'orientation', 'size', 'style', 'variant']
        self._type = 'Divider'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'color', 'label', 'labelPosition', 'orientation', 'size', 'style', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Divider, self).__init__(**args)
