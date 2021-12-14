# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Group(Component):
    """A Group component.
Compose elements and components in flex container. For more information, see: https://mantine.dev/core/group/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Content.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- align (a value equal to: "stretch", "center", "flex-end", "flex-start"; optional):
    Defines align-items css property.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- direction (a value equal to: "row", "column"; optional):
    Defines flex-direction property, row for horizontal, column for
    vertical.

- grow (boolean; optional):
    Defines flex-grow property for each element, True -> 1, False ->
    0.

- noWrap (boolean; optional):
    Defined flex-wrap property.

- position (a value equal to: "right", "center", "left", "apart"; optional):
    Defines justify-content property.

- spacing (a value equal to: "xs", "sm", "md", "lg", "xl"; optional):
    Space between elements.

- style (dict; optional):
    Inline style override."""
    @_explicitize_args
    def __init__(self, children=None, align=Component.UNDEFINED, className=Component.UNDEFINED, direction=Component.UNDEFINED, grow=Component.UNDEFINED, id=Component.UNDEFINED, noWrap=Component.UNDEFINED, position=Component.UNDEFINED, spacing=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'align', 'className', 'direction', 'grow', 'noWrap', 'position', 'spacing', 'style']
        self._type = 'Group'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'align', 'className', 'direction', 'grow', 'noWrap', 'position', 'spacing', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Group, self).__init__(children=children, **args)
