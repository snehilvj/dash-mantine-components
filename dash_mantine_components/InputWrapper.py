# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class InputWrapper(Component):
    """An InputWrapper component.
Enhance custom inputs with label, error and description. For more information, see: https://mantine.dev/core/input-wrapper/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Input that should be wrapped.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- description (string; optional):
    Input description, displayed after label.

- error (string; optional):
    Displays error message after input.

- label (string; optional):
    Input label, displayed before input.

- required (boolean; optional):
    Adds red asterisk on the right side of label.

- size (a value equal to: "xs", "sm", "md", "lg", "xl"; optional):
    Input size.

- style (dict; optional):
    Inline style override."""
    @_explicitize_args
    def __init__(self, children=None, class_name=Component.UNDEFINED, description=Component.UNDEFINED, error=Component.UNDEFINED, id=Component.UNDEFINED, label=Component.UNDEFINED, required=Component.UNDEFINED, size=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'class_name', 'description', 'error', 'label', 'required', 'size', 'style']
        self._type = 'InputWrapper'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'class_name', 'description', 'error', 'label', 'required', 'size', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(InputWrapper, self).__init__(children=children, **args)
