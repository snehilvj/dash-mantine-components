# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Space(Component):
    """A Space component.
Add horizontal or vertical spacing from theme. For more information, see: https://mantine.dev/core/space/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Tab content.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- class_name (string; optional):
    Often used with CSS to style elements with common properties.

- h (a value equal to: "xs", "sm", "md", "lg", "xl" | number; optional):
    Height, set to add vertical spacing.

- style (dict; optional):
    Inline style override.

- w (a value equal to: "xs", "sm", "md", "lg", "xl" | number; optional):
    Width, set to add horizontal spacing."""
    @_explicitize_args
    def __init__(self, children=None, class_name=Component.UNDEFINED, h=Component.UNDEFINED, id=Component.UNDEFINED, style=Component.UNDEFINED, w=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'class_name', 'h', 'style', 'w']
        self._type = 'Space'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'class_name', 'h', 'style', 'w']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Space, self).__init__(children=children, **args)
