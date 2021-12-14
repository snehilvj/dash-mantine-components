# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class TextInput(Component):
    """A TextInput component.
Custom input with label and description. For more information, see: https://mantine.dev/core/text-input/

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- description (string; optional):
    Input description, displayed after label.

- disabled (boolean; optional):
    The component can show it is currently unable to be interacted
    with.

- error (string; optional):
    Displays error message after input.

- label (string; optional):
    Input label, displayed before input.

- multiline (boolean; optional):
    Will input have multiple lines?.

- placeholder (string; optional):
    Placeholder, displayed when date is not selected.

- radius (a value equal to: "xs", "sm", "md", "lg", "xl" | number; optional):
    Input border-radius from theme or number to set border-radius in
    px.

- required (boolean; optional):
    Adds red asterisk on the right side of label.

- size (a value equal to: "xs", "sm", "md", "lg", "xl"; optional):
    Input size.

- style (dict; optional):
    Inline style override.

- type (a value equal to: "number", "text", "password"; optional):
    The type of control to render.

- value (a list of or a singular dash component, string or number; default ""):
    Input value.

- variant (a value equal to: "default", "filled", "unstyled", "headless"; optional):
    Defines input appearance, defaults to default in light color
    scheme and filled in dark."""
    @_explicitize_args
    def __init__(self, className=Component.UNDEFINED, description=Component.UNDEFINED, disabled=Component.UNDEFINED, error=Component.UNDEFINED, id=Component.UNDEFINED, label=Component.UNDEFINED, multiline=Component.UNDEFINED, placeholder=Component.UNDEFINED, radius=Component.UNDEFINED, required=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, type=Component.UNDEFINED, value=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'description', 'disabled', 'error', 'label', 'multiline', 'placeholder', 'radius', 'required', 'size', 'style', 'type', 'value', 'variant']
        self._type = 'TextInput'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'description', 'disabled', 'error', 'label', 'multiline', 'placeholder', 'radius', 'required', 'size', 'style', 'type', 'value', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(TextInput, self).__init__(**args)
