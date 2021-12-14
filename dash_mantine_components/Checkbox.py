# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Checkbox(Component):
    """A Checkbox component.
Capture boolean input from user. For more information, see: https://mantine.dev/core/checkbox/

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- checked (boolean; default False):
    State of check box.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- color (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional):
    Checkbox color.

- disabled (boolean; optional):
    A checkbox can show it is currently unable to be interacted with.

- label (string; optional):
    Checkbox label.

- size (a value equal to: "xs", "sm", "md", "lg", "xl"; optional):
    Predefined label font-size and checkbox width and height in px.

- style (dict; optional):
    Inline style override.

- transitionDuration (number; optional):
    Check/uncheck transition duration, set to 0 to disable all
    transitions."""
    @_explicitize_args
    def __init__(self, checked=Component.UNDEFINED, className=Component.UNDEFINED, color=Component.UNDEFINED, disabled=Component.UNDEFINED, id=Component.UNDEFINED, label=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, transitionDuration=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'checked', 'className', 'color', 'disabled', 'label', 'size', 'style', 'transitionDuration']
        self._type = 'Checkbox'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'checked', 'className', 'color', 'disabled', 'label', 'size', 'style', 'transitionDuration']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Checkbox, self).__init__(**args)
