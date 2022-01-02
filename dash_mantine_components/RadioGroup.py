# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class RadioGroup(Component):
    """A RadioGroup component.
Capture user feedback limited to small set of options. For more information, see: https://mantine.dev/core/radio-group/

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- color (a value equal to: "dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"; optional):
    Active radio color from theme.colors.

- data (list of dicts; optional):
    RadioGroup options.

    `data` is a list of dicts with keys:

    - label (string; required):
        The option's label.

    - value (string; required):
        Option's value.

- description (string; optional):
    Input description, displayed after label.

- error (string; optional):
    Displays error message after input.

- label (string; optional):
    Input label, displayed before input.

- required (boolean; optional):
    Adds red asterisk on the right side of label.

- size (a value equal to: "xs", "sm", "md", "lg", "xl"; optional):
    Predefined label fontSize, radio width, height and border-radius.

- spacing (a value equal to: "xs", "sm", "md", "lg", "xl"; optional):
    Spacing between radios in horizontal variant.

- style (dict; optional):
    Inline style override.

- value (string; optional):
    Value of currently selected radio (controlled).

- variant (a value equal to: "horizontal", "vertical"; optional):
    Radios position."""
    @_explicitize_args
    def __init__(self, class_name=Component.UNDEFINED, color=Component.UNDEFINED, data=Component.UNDEFINED, description=Component.UNDEFINED, error=Component.UNDEFINED, id=Component.UNDEFINED, label=Component.UNDEFINED, required=Component.UNDEFINED, size=Component.UNDEFINED, spacing=Component.UNDEFINED, style=Component.UNDEFINED, value=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'class_name', 'color', 'data', 'description', 'error', 'label', 'required', 'size', 'spacing', 'style', 'value', 'variant']
        self._type = 'RadioGroup'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'class_name', 'color', 'data', 'description', 'error', 'label', 'required', 'size', 'spacing', 'style', 'value', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(RadioGroup, self).__init__(**args)
